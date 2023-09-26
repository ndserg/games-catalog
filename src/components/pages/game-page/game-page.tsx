import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLocalGame } from 'servises/localStorage.service';
import Loading from 'components/ui/loading/loading';
import { GameDescription } from 'types/game';
import { Container, GameHeader, Title, Image, Description, StyledList, ImageItem, Thumbnail, Table, TableTitle, TableRow, TableCell } from './styles';

interface LoadGame {
  (data: GameDescription): void,
}

interface Error {
  (message: string): void,
}

const GamePage = () => {
  const { id = '' } = useParams();
  const [game, setGame] = useState<GameDescription | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onLoad: LoadGame = (data) => {
    setError('');
    setGame(data);
  };
  
  const onError: Error = (message): void => {
    setError(message);
  };
  
  useEffect(() => {
    setIsLoading(true);
  
    getLocalGame(onLoad, onError, id);
  
    setIsLoading(false);
  }, [id]);
  
  if (error) {
    return (
      <h1>{error}</h1>
    );
  }

  if (isLoading || !game) {
    return (
      <section>
        <Loading />
      </section>
    );
  }
  const description = game.description.replaceAll(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '');

  return (
    <Container className="container">
      <GameHeader>
        <Title>{game.title}</Title>
        <Description>{description}</Description>
        <Image src={game.thumbnail} alt={game.title} />
      </GameHeader>

      <StyledList>
        {game.screenshots && game.screenshots.map((item) => (
          <ImageItem key={item.id}>
            <Thumbnail src={item.image} alt={item.id.toString()} />
          </ImageItem>
        ))}
      </StyledList>

      {game.minimum_system_requirements && 
        <Table>
          <TableTitle>Minimum system requirements</TableTitle>
          <tbody>
            {Object.keys(game.minimum_system_requirements).map((key) => (
              <TableRow key={`${key}_${game.id}`}>
                <TableCell>{key}:</TableCell>
                <TableCell>{game.minimum_system_requirements && game.minimum_system_requirements[key]}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      }
    </Container>
  );
};
 
export default GamePage;
