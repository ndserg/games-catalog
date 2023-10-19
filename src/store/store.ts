import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createAPI } from 'servises/api';
import gamesReducer from './gamesSlice';
import gameReducer from './gameSlice';
import favoriteGamesReducer from './favoriteGamesSlice';

export const api = createAPI();

const rootReducer = combineReducers({
  games: gamesReducer,
  game: gameReducer,
  favorites: favoriteGamesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
      extraArgument: api,
    },
  }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;