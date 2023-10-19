import { createSlice } from '@reduxjs/toolkit';
import { Game } from 'types/game';
import { fetchGames } from './gamesAsyncActions';

export type GamesSlice = {
  isLoading: boolean,
  error: string | null,
  list: Game[],
};

const initialState: GamesSlice = {
  isLoading: false,
  error: null,
  list: [],
};

const gamesSlice = createSlice({
  name: '@games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      });
  },
});

export default gamesSlice.reducer;
