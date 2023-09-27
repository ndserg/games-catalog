import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  display: flex;
  column-gap: 15px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding-top: 10px;
  padding-right: 16px;
  padding-bottom: 10px;
  padding-left: 16px;

  color: ${(props) =>props.theme.colorBlack_75};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;

  border-radius: ${(props) => props.theme.defaultBorderRadius};

  background-color: ${(props) =>props.theme.colorBlack_5};

  &:hover {
    color: ${(props) =>props.theme.colorWhite};

    background-color: ${(props) =>props.theme.colorPrimary};
  }

  &.active {
    color: ${(props) =>props.theme.colorWhite};

    background-color: ${(props) =>props.theme.colorPrimary_75};
  }
`;
