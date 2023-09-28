import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLocalGames } from 'servises/localStorage.service';
import { Game } from 'types/game';
import { GlobalStyle } from './styles';
import MainPage from 'components/pages/main-page/main-page';
import GamePage from 'components/pages/game-page/game-page';
import Header from 'components/layout/header/header';

interface Load {
  (data: Game[]): void,
}

interface Error {
  (message: string): void,
}

export const App = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onLoad: Load = (data) => {
    setError('');
    setGames(data);
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
      <Header games={games}/>
      <Routes>
        <Route path='/' element={<Navigate to='/allgames/' replace />}/>
        <Route path='/:platform?/:page?' element={<MainPage isLoading={isLoading} games={games} />}/>
        <Route path='/game/:id' element={<GamePage />}/>
      </Routes>
    </>
  );
};

export default App;
