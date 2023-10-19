import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    padding-top: 45px;
    padding-bottom: 45px;
  }
`;

export const NoFound = styled.p`
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;

  font-size: 32px;
  line-height: normal;
  text-align: center;
`;

