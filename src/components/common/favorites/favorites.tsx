import { ReactComponent as FavoriteImg } from 'assets/icon-favorite.svg';
import { FavoriteButton } from './styles';

type FavoritesProps = {
  onFavoritesToggle: () => void,
  isFavorite: boolean,
  favorites: number[],
};

const Favorites = ({ onFavoritesToggle, isFavorite, favorites }: FavoritesProps) => {
  const isDisabled = favorites.length === 0;

  return (
    <FavoriteButton disabled={isDisabled} $isFavorite={isFavorite} onClick={onFavoritesToggle}>
      <FavoriteImg />
    </FavoriteButton>
  );
};
 
export default Favorites;