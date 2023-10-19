import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FullGameInfo } from 'types/game';
import { GameSlice } from './gameSlice';
import { AppDispatch } from './store';
import { BACKEND_URL } from 'servises/api';

export const fetchGame = createAsyncThunk<
FullGameInfo,
string,
{
  dispatch: AppDispatch,
  extra: AxiosInstance,
  state: { game: GameSlice },
  rejectValue: string,
}
>(
  'data/fetchGame',
  async (id, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<FullGameInfo>(`?isGame=true&url=${BACKEND_URL}/game?id=${id}`);

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
      const { game: { isLoading } } = getState();

      if (isLoading) {
        return false;
      }
    },
  },
);