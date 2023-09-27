import GamesList from 'components/blocks/games-list/games-list';
import Loading from 'components/ui/loading/loading';
import Pagination from 'components/ui/pagination/pagination';
import { Game } from 'types/game';
import { pageItemsCount } from 'const';
import { useParams } from 'react-router-dom';
import { filterByGenre, filterByPlatform, paginate } from 'utils/utils';
import { Main } from './styles';

interface MainPAgeProps {
  isLoading: boolean,
  games: Game[],
}

const MainPage = ({ isLoading, games }: MainPAgeProps ) => {
  const { platform, page } = useParams();
  const gamesByBlatform = platform ? filterByPlatform(games, platform) : games;
  const currentPage = page ? Number(page) : 1;
  const cropedGames = paginate(gamesByBlatform, currentPage, pageItemsCount);
 
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
    <GamesList games={cropedGames} />

    <Pagination
      itemsCount={gamesByBlatform.length}
      pageSize={pageItemsCount}
      currentCategory={platform || ''}
      currentPage={currentPage}
    />
  </Main>
  );
};
 
export default MainPage;