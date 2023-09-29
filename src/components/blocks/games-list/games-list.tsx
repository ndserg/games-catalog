import { Game } from 'types/game';
import GameCard from '../../ui/game-card/game-card';
import { Li } from 'components/styled';
import { StyledList, StyledLink } from './styles';
import { getFavoriteGames } from 'servises/localStorage.service';

type GamesListProps = {
  games: Game[],
};

const GamesList = ({ games }: GamesListProps) => {
  const favoriteGames = getFavoriteGames();

  const isFavorite = (gameId: number) => {
    return favoriteGames.includes(gameId);
  };

  return (
    <section className='container'>
      <StyledList>
        {games && games.map((game) => (
          <Li key={game.id}>
            <StyledLink to={`/game/${game.id}`}>
              <GameCard game={game} isFavorite={isFavorite(game.id)}/>
            </StyledLink>
          </Li>
        ))}
      </StyledList>
    </section>
  );
};
 
export default GamesList;

