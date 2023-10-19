import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GlobalStyle } from './styles';
import MainPage from 'components/pages/main-page/main-page';
import GamePage from 'components/pages/game-page/game-page';
import Header from 'components/layout/header/header';
import { useAppDispatch } from 'store/redux-hooks';
import { RootState } from 'store/store';
import { fetchGames } from 'store/gamesAsyncActions';
import { useSelector } from 'react-redux';
import { loadFavorites } from 'store/favoriteGamesSlice';


export const App = () => {
  const navigate = useNavigate();
  const [isFavoritesPage, setIsFavoritesPage] = useState<boolean>(false);
  const { list: games, error, isLoading } = useSelector((state: RootState) => state.games);
  const { favorites } = useSelector((state: RootState) => state.favorites);
  const dispatch = useAppDispatch();

  const onFavoritesPageHandler = (): void => {
    setIsFavoritesPage((prevState) => !prevState);
    navigate('/allgames/1');
  };

  useEffect(() => {
    dispatch(fetchGames());

  }, [dispatch]);

  useEffect(() => {
    if (favorites.length === 0) {
      setIsFavoritesPage(false);
    }

  }, [favorites, navigate]);

  useEffect(() => {
    dispatch(loadFavorites());

  }, [dispatch]);

  if (error) {
    return (
      <h1>{error}</h1>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Header games={games} toggleFavorites={onFavoritesPageHandler} isFavoritesPage={isFavoritesPage} favorites={favorites}/>
      <Routes>
        <Route path='/' element={<Navigate to='/allgames/' replace />}/>
        <Route path='/:platform?/:page?' element={<MainPage isLoading={isLoading} games={games} isFavoritesPage={isFavoritesPage} favorites={favorites}/>}/>
        <Route path='/game/:id' element={<GamePage />}/>
      </Routes>
    </>
  );
};

export default App;
