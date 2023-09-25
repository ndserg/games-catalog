import GamesList from 'components/blocks/games-list/games-list';
import { Game } from 'types/game';

interface MainPAgeProps {
  isLoading: boolean,
  games: Game[],
}

const MainPage = ({ isLoading, games }: MainPAgeProps ) => {
  return (
  <main>
    <h1 className='visually-hidden'>Каталог игр</h1>
    {isLoading && <p>Loading...</p>}
    {!isLoading && <GamesList games={games} />}
  </main>
  );
};
 
export default MainPage;