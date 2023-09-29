import GamesList from 'components/blocks/games-list/games-list';
import Loading from 'components/ui/loading/loading';
import Pagination from 'components/common/pagination/pagination';
import { Game } from 'types/game';
import { pageItemsCount, sortTypes } from 'const';
import { useNavigate, useParams } from 'react-router-dom';
import { filterByGenre, filterByPlatform, sortByDate, paginate } from 'utils/utils';
import { Main } from './styles';
import Filters from 'components/common/filters/filters';
import { useEffect, useState } from 'react';

type FilterProps = {
  [key: string]: string
};

interface MainPageProps {
  isLoading: boolean,
  games: Game[],
  isFavorite: boolean,
  favorites: number[],
}

const MainPage = ({ isLoading, games, isFavorite, favorites }: MainPageProps ) => {
  const navigate = useNavigate();
  const { platform, page } = useParams();
  const [filters, setFilters] = useState({
    genre: '',
    sortType: sortTypes.DESC,
  });

  const currentGames = isFavorite ? games.filter((game) => favorites.includes(game.id)) : games;
  const gamesByPlatform = platform ? filterByPlatform(currentGames, platform) : currentGames;
  const gamesByGenre = filters.genre ? filterByGenre(gamesByPlatform, filters.genre) : gamesByPlatform;
  const gamesByDate = sortByDate(gamesByGenre, filters.sortType);
  const currentPage = page ? Number(page) : 1;
  const cropedGames = paginate(gamesByDate, currentPage, pageItemsCount);
  const goHome = () => navigate(`/${platform}/1`);

  const onFilterChange = ( filter: FilterProps) => {
    setFilters((prevState) => ({
      ...prevState,
      ...filter,
    }));
    goHome();
  };

  useEffect(() => {
    setFilters({
      genre: '',
      sortType: sortTypes.DESC,
    });
  }, [platform, isFavorite]);


  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
  <Main>
    <h1 className='visually-hidden'>Каталог игр</h1>
    <Filters games={currentGames} onFilterChange={onFilterChange} currentFilters={filters}/>
    <GamesList games={cropedGames} />

    <Pagination
      itemsCount={gamesByDate.length}
      pageSize={pageItemsCount}
      currentCategory={platform || ''}
      currentPage={currentPage}
    />
  </Main>
  );
};
 
export default MainPage;