import styled from 'styled-components';
import { Ul } from 'components/styled';
import { Link } from 'react-router-dom';

export const StyledList = styled(Ul)`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 10px;

    & li {
      width: ${(props) =>props.theme.mobileWidth};
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;