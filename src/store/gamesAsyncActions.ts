import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Game } from 'types/game';
import { GamesSlice } from './gamesSlice';
import { AppDispatch } from './store';
import { BACKEND_URL } from 'servises/api';

export const fetchGames = createAsyncThunk<
Game[],
undefined,
{
  dispatch: AppDispatch,
  extra: AxiosInstance,
  state: { games: GamesSlice },
  rejectValue: string,
}
>(
  'data/fetchGames',
  async (_arg, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Game[]>(`?url=${BACKEND_URL}/games`);

      return data;

    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }

      return rejectWithValue('Unknown error');
    }
  },
  {
    condition: (_, { getState }) => {
      const { games: { isLoading } } = getState();

      if (isLoading) {
        return false;
      }
    },
  },
);
