import Search from 'components/common/search/search';
import Nav from '../nav/nav';
import { ReactComponent as FavoriteImg } from 'assets/icon-favorite.svg';
import { HeaderWrapper, HeaderLogo, StyledLink, StyledHr, FavoriteButton } from './styles';

const Header = () => {
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

        <Search name="search"/>
      </HeaderWrapper>
      <StyledHr />
    </>
  );
};
 
export default Header;