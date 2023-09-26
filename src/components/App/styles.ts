import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;

    min-height: 100vh;

    color: ${(props) => props.theme.colorBlack_75};
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: ${(props) => props.theme.fontWeightDefault};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeightDefault};

    background-color: ${(props) => props.theme.colorWhite};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .visually-hidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;

    border: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .container {
    width: ${(props) => props.theme.mobileWidth};
    margin: 0 auto;

    @media (min-width: ${(props) =>props.theme.tabletWidth}) {
      width: ${(props) => props.theme.tabletWidth};
    }

    @media (min-width: ${(props) =>props.theme.desktopWidth}) {
      min-width: ${(props) => props.theme.desktopWidth};
      width: auto;
      padding-right: 70px;
      padding-left: 70px;
    }

    @media (min-width: 1512px) {
      width: 1512px;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
`;
