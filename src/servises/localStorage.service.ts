const storage: Storage = localStorage;

export const setFavoritesGames = (favorites: number[] ) => {
  storage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavoriteGames = (): number[] => {
  const favoriteGames = storage.getItem('favorites');

  if (!favoriteGames) {
    return [];
  }

  return JSON.parse(favoriteGames);
};
