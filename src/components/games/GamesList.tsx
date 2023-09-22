import { Game } from 'types/game';
import GameItem from './GameItem';

type GamesListProps = {
  games: Game[],
};

const TodoList = ({ games }: GamesListProps) => {
  return (
    <ul>
      {games && games.map((game) => (
        <li key={game.id}>
          <GameItem {...game} />
        </li>
      ))}
    </ul>
  );
};
 
export default TodoList;

