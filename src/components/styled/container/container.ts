import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.theme.mobileWidth};
  margin: 0 auto;

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    width: ${(props) => props.theme.tabletWidth};
  }

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    min-width: ${(props) => props.theme.desktopWidth};
    padding-right: 70px;
    padding-left: 70px;
  }

  @media (min-width: 1512px) {
    width: 1512px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export default Container;
