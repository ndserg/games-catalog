import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFavoriteGames, setFavoritesGames } from 'servises/localStorage.service';

export type FavoriteGamesSlice = {
  favorites: number[],
};

const initialState: FavoriteGamesSlice = {
  favorites: [],
};

const favoriteGamesSlice = createSlice({
  name: '@favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
        setFavoritesGames(state.favorites);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const idx = state.favorites.indexOf(action.payload);

      if (idx !== -1) {
        state.favorites.splice(idx, 1);
        setFavoritesGames(state.favorites);
      }
    },
    loadFavorites: (state) => {
      state.favorites = getFavoriteGames();
    },
  },
});

export const { loadFavorites, addFavorite, removeFavorite } = favoriteGamesSlice.actions;
export default favoriteGamesSlice.reducer;
