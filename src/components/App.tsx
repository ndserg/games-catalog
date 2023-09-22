import { useEffect, useState } from 'react';
import GamesList from './games/GamesList';
import { getLocalGames } from 'servises/localStorage.service';
import { Game } from 'types/game';

interface Load {
  (data: Game[]): void,
}

interface Error {
  (message: string): void,
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onLoad: Load = (data: Game[]) => {
    setError('');
    setGames(data.slice(0, 20));
  };

  const onError: Error = (message): void => {
    setError(message);
  };

  useEffect(() => {
    setIsLoading(true);

    getLocalGames(onLoad, onError);

    setIsLoading(false);
  }, []);

  if (error) {
    return (
      <div>{error}</div>
    );
  }

  return (
    <div className="App">
      {isLoading && <p>Loading...</p>}
      {!isLoading && <GamesList games={games} />}
    </div>
  );
}

export default App;
