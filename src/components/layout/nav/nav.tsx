import { NavWrapper, StyledLink } from './styles';
import { platforms } from 'const';

const Nav = () => {
  return (
    <NavWrapper>
      {platforms && Object.keys(platforms).map((platform, idx) => (
        <StyledLink key={`${platform}_${idx}`} to={`/${platform}`}>{platforms[platform]}</StyledLink>
      ))
      }
    </NavWrapper>
  );
};
 
export default Nav;