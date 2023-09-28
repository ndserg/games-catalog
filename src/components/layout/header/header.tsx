import Search from 'components/common/search/search';
import Nav from '../nav/nav';
import { ReactComponent as FavoriteImg } from 'assets/icon-favorite.svg';
import { Game } from 'types/game';
import { HeaderWrapper, HeaderLogo, StyledLink, StyledHr, FavoriteButton } from './styles';

interface HeaderProps {
  games: Game[],
}

const Header = ({ games }: HeaderProps ) => {
  const isDisabled = true;

  return (
    <>
      <HeaderWrapper className="container">
        <StyledLink to="/">
          <HeaderLogo/>
        </StyledLink>
        
        <Nav />

        <FavoriteButton disabled={isDisabled}>
          <FavoriteImg />
        </FavoriteButton>

        <Search name="search" games={games} />
      </HeaderWrapper>
      <StyledHr />
    </>
  );
};
 
export default Header;