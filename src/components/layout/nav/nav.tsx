import { NavWrapper, NavLink } from './styles';

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink to="/">PC Games</NavLink>
      <NavLink to="/">Browser Games</NavLink>
    </NavWrapper>
  );
};
 
export default Nav;