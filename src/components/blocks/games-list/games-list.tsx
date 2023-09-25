import { Game } from 'types/game';
import GameCard from '../../ui/game-card/game-card';
import { Li } from 'components/styled';
import { StyledList } from './styles';

type GamesListProps = {
  games: Game[],
};

const GamesList = ({ games }: GamesListProps) => {
  return (
    <section className='container'>
      <StyledList>
        {games && games.map((game) => (
          <Li key={game.id}>
            <GameCard {...game} />
          </Li>
        ))}
      </StyledList>
    </section>
  );
};
 
export default GamesList;

