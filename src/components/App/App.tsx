import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLocalGames } from 'servises/localStorage.service';
import { Game } from 'types/game';
import { GlobalStyle } from './styles';
import MainPage from 'components/pages/main-page/main-page';
import GamePage from 'components/pages/game-page/game-page';
import Header from 'components/layout/header/header';
import { sortByDate, filterByGenre, filterByPlatform } from 'utils/utils';
import { sortType } from 'const';

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

  const onLoad: Load = (data) => {
    setError('');

    const sortedGames = sortByDate(data, sortType.DESC);
    setGames(sortedGames.slice(0, 20));
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
      <Header />
      <Routes>
        <Route path='/' element={<MainPage isLoading={isLoading} games={games} />}/>
        <Route path='/game/:id' element={<GamePage />}/>
      </Routes>
    </>
  );
}

export default App;
