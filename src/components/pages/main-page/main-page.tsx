import GamesList from 'components/blocks/games-list/games-list';
import Loading from 'components/ui/loading/loading';
import Pagination from 'components/common/pagination/pagination';
import { Game } from 'types/game';
import { pageItemsCount, sortTypes } from 'const';
import { useNavigate, useParams } from 'react-router-dom';
import { filterByGenre, filterByPlatform, sortByDate, paginate } from 'utils/utils';
import { Main, NoFound } from './styles';
import { Container } from 'components/styled';
import Filters from 'components/common/filters/filters';
import { useEffect, useState } from 'react';

type FilterProps = {
  [key: string]: string
};

interface MainPageProps {
  isLoading: boolean,
  games: Game[],
  isFavoritesPage: boolean,
  favorites: number[],
}

const MainPage = ({ isLoading, games, isFavoritesPage, favorites }: MainPageProps ) => {
  const navigate = useNavigate();
  const { platform, page } = useParams();
  const [filters, setFilters] = useState({
    genre: 'All',
    sortType: sortTypes.DESC,
  });

  const resetFilters = () => {
    setFilters({
      genre: 'All',
      sortType: sortTypes.DESC,
    });
  };

  useEffect(() => {
    resetFilters();
  }, [platform, isFavoritesPage]);


  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const currentGames = isFavoritesPage ? games.filter((game) => favorites.includes(game.id)) : games;
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

  let noGamesMessage = null;

  if (gamesByGenre.length === 0 && gamesByPlatform.length === 0) {
    noGamesMessage = <NoFound>No found games by selected Platform - <b>{platform}</b> <br/> and selected genre - <b>{filters.genre}</b></NoFound>;
  } else if (gamesByGenre.length === 0) {
    noGamesMessage = <NoFound>No found games by genre - <b>{filters.genre}</b></NoFound>;
  } else if (gamesByPlatform.length === 0) {
    noGamesMessage = <NoFound>No found games by Platform - <b>{platform}</b></NoFound>;
  }

  return (
  <Main>
    <h1 className='visually-hidden'>Каталог игр</h1>
    <Filters games={currentGames} onFilterChange={onFilterChange} currentFilters={filters}/>
    {!noGamesMessage && <GamesList games={cropedGames} />}

    {noGamesMessage && 
      <Container>
        {noGamesMessage}
      </Container>
      }

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