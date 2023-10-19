import Search from 'components/common/search/search';
import Nav from '../nav/nav';
import { Game } from 'types/game';
import { HeaderWrapper, HeaderLogo, StyledLink, StyledHr } from './styles';
import Favorites from 'components/common/favorites/favorites';

interface HeaderProps {
  games: Game[],
  toggleFavorites: () => void,
  isFavoritesPage: boolean,
  favorites: number[],
}

const Header = ({ games, toggleFavorites, isFavoritesPage, favorites }: HeaderProps ) => {
  return (
    <>
      <HeaderWrapper as='header'>
        <StyledLink to="/">
          <HeaderLogo/>
        </StyledLink>
        
        <Nav />
        
        <Favorites onFavoritesToggle={toggleFavorites} isFavoritesPage={isFavoritesPage} favorites={favorites}/>

        <Search name="search" games={games} />
      </HeaderWrapper>
      <StyledHr />
    </>
  );
};
 
export default Header;