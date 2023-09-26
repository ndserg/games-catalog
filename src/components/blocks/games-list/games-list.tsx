import { Game } from 'types/game';
import GameCard from '../../ui/game-card/game-card';
import { Li } from 'components/styled';
import { StyledList, StyledLink } from './styles';


type GamesListProps = {
  games: Game[],
};

const GamesList = ({ games }: GamesListProps) => {
  return (
    <section className='container'>
      <StyledList>
        {games && games.map((game) => (
          <Li key={game.id}>
            <StyledLink to={`/game/${game.id}`}>
              <GameCard {...game} />
            </StyledLink>
          </Li>
        ))}
      </StyledList>
    </section>
  );
};
 
export default GamesList;

