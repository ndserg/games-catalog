import { createSlice } from '@reduxjs/toolkit';
import { FullGameInfo } from 'types/game';
import { fetchGame } from './gameAsyncActions';

export type GameSlice = {
  isLoading: boolean,
  error: string | null,
  game: FullGameInfo | null,
};

const initialState: GameSlice = {
  isLoading: false,
  error: null,
  game: null,
};

const gameSlice = createSlice({
  name: '@game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGame.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGame.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.isLoading = false;
        state.game = action.payload;
      });
  },
});

export default gameSlice.reducer;
