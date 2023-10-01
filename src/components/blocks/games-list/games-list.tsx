import { Game } from 'types/game';
import GameCard from '../../ui/game-card/game-card';
import { Li } from 'components/styled';
import { GameListContainer, StyledList, StyledLink } from './styles';
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
    <GameListContainer as='section'>
      <h2 className="visually-hidden">Список Игр</h2>
      <StyledList>
        {games && games.map((game) => (
          <Li key={game.id}>
            <StyledLink to={`/game/${game.id}`}>
              <GameCard game={game} isFavorite={isFavorite(game.id)}/>
            </StyledLink>
          </Li>
        ))}
      </StyledList>
    </GameListContainer>
  );
};
 
export default GamesList;

