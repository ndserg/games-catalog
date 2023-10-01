import { getAllGames, getGame } from './api.service';
import { Game, GameDescription } from '../types/game';

interface Load {
  (data: Game[]): void,
}

interface LoadGame {
  (data: GameDescription): void,
}

interface Error {
  (message: string): void,
}

interface HandlerProps {
  (): void,
}

const storage: Storage = localStorage;

const handlers = new Set<HandlerProps>();

export const setHandlers = (handler: HandlerProps) => {
  handlers.add(handler);
};

const callHandlers = () => {
  handlers.forEach((handler) => handler());
};

export const getLocalGames = (onLoad: Load, onError: Error) => {
  const gamesData = storage.getItem('games') || '';

  const lastUpdate = storage.getItem('lastFetch') ? storage.getItem('lastFetch') : 0;

  const isOutDated = lastUpdate ? Date.now() - Number(lastUpdate) >= 86400000 : true;

  if (gamesData && !isOutDated) {
    return onLoad(JSON.parse(gamesData));
  }

  getAllGames()
    .then((res) => {
      if (!res.ok) {
        throw new Error();
      }

      return res.json();
    })
    .then((data: Game[]) => {
      onLoad(data);
      storage.setItem('games', JSON.stringify(data));
      storage.setItem('lastFetch', Date.now().toString());
    })
    .catch((error) => onError(`Ошибка получения данных: ${error.message}`));
};

export const getLocalGame = (onLoad: LoadGame, onError: Error, id: string) => {
  const gameData = storage.getItem('game') || '';

  if (gameData && JSON.parse(gameData).id === Number(id)) {
    return onLoad(JSON.parse(gameData));
  }

  getGame(id)
    .then((res) => {
      if (!res.ok) {
        throw new Error();
      }

      return res.json();
    })
    .then((data: GameDescription) => {
      onLoad(data);
      storage.setItem('game', JSON.stringify(data));
    })
    .catch((error) => onError(`Ошибка получения данных: ${error.message}`));
};

export const setFavoriteGame = (newGameId: number ) => {
  const favoriteGames = storage.getItem('favorites');
  let updatedFavoritesGames: number[] = [];

  if (!favoriteGames) {
    updatedFavoritesGames.push(newGameId);
  } else if (favoriteGames) {
    const games = JSON.parse(favoriteGames);

    if (!games.includes(newGameId)) {
      updatedFavoritesGames = [...games, newGameId];
    } else {
      const gamesIndex = games.indexOf(newGameId);
      updatedFavoritesGames = gamesIndex === -1 ? games : [].concat(games.slice(0, gamesIndex), games.slice(gamesIndex + 1));
    }
  }

  storage.setItem('favorites', JSON.stringify(updatedFavoritesGames));
  callHandlers();
  return true;
};

export const getFavoriteGames = (): number[] => {
  const favoriteGames = storage.getItem('favorites');

  if (!favoriteGames) {
    return [];
  }

  return JSON.parse(favoriteGames);
};
