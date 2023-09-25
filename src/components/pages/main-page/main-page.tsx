import GamesList from 'components/blocks/games-list/games-list';
import Loading from 'components/ui/loading/loading';
import { Game } from 'types/game';

interface MainPAgeProps {
  isLoading: boolean,
  games: Game[],
}

const MainPage = ({ isLoading, games }: MainPAgeProps ) => {

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
  <main>
    <h1 className='visually-hidden'>Каталог игр</h1>
    <GamesList games={games} />
  </main>
  );
};
 
export default MainPage;