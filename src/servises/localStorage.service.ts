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

const storage: Storage = localStorage;

export const getLocalGames = (onLoad: Load, onError: Error) => {
  const gamesData = localStorage.getItem('games') || '';

  if (gamesData) {
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
    })
    .catch((error) => onError(`Ошибка получения данных: ${error.message}`));
};

export const getLocalGame = (onLoad: LoadGame, onError: Error, id: string) => {
  const gameData = localStorage.getItem('game') || '';

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
