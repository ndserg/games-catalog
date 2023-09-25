import { useEffect, useState } from 'react';
import { getLocalGames } from 'servises/localStorage.service';
import { Game } from 'types/game';
import { GlobalStyle } from './styles';
import MainPage from 'components/pages/main-page/main-page';

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
      <h1>{error}</h1>
    );
  }

  return (
    <>
      <GlobalStyle />
      <MainPage isLoading={isLoading} games={games} />
    </>
  );
}

export default App;
