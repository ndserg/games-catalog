import { getAllGames } from './api.service';
import { Game } from '../types/game';

interface Load {
  (data: Game[]): void,
}

interface Error {
  (message: string): void,
}

export const getLocalGames = (onLoad: Load, onError: Error) => {
  const storage: Storage = localStorage;
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
