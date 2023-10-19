import { ReactComponent as FavoriteImg } from 'assets/icon-favorite.svg';
import { FavoritesWrapper, FavoriteButton, FavoritesCount } from './styles';

type FavoritesProps = {
  onFavoritesToggle: () => void,
  isFavoritesPage: boolean,
  favorites: number[],
};

const Favorites = ({ onFavoritesToggle, isFavoritesPage, favorites }: FavoritesProps) => {
  const isDisabled = favorites.length === 0;

  return (
    <FavoritesWrapper>
      <FavoriteButton disabled={isDisabled} $isFavoritesPage={isFavoritesPage} onClick={onFavoritesToggle}>
        <FavoriteImg />
      </FavoriteButton>
      {!isDisabled && <FavoritesCount>{favorites.length}</FavoritesCount>}
    </FavoritesWrapper>
  );
};
 
export default Favorites;