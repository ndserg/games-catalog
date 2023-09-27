import styled from 'styled-components';
import { Ul } from 'components/styled';
import { Link } from 'react-router-dom';

export const StyledList = styled(Ul)`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  margin-bottom: 30px;

  @media (min-width: ${(props) => props.theme.tabletWidth}) {
    margin-bottom: 45px;
  }

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    & li {
      width: ${(props) => props.theme.mobileWidth};
      margin-right: 30px;
    }

    & li:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (min-width: 1512px) {
    justify-content: flex-start;

    & li {
      margin-right: 16px;
    }

    & li:nth-child(3n) {
      margin-right: 16px;
    }

    & li:nth-child(4n) {
      margin-right: 0;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;