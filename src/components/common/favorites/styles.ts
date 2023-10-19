import styled from 'styled-components';

export const FavoritesWrapper = styled.div`
  position: relative;

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    order: 1;
  }
`;

export const FavoriteButton = styled.button<{ $isFavoritesPage: boolean }>`
  width: 48px;
  height: 48px;
  padding: 14px;

  border: none;
  border-radius: ${(props) => props.theme.defaultBorderRadius};

  background-color: ${(props) => {
    if (props.disabled) {
      return props.theme.colorBlack_5;
    } else if (props.$isFavoritesPage) {
      return props.theme.colorPrimary_75;
    } else {
      return props.theme.colorBlack_15;
    }
  }};

  svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.$isFavoritesPage ? props.theme.colorWhite : props.theme.colorBlack_50};
  }

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    order: 1;

    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
    
    &:hover {
      background-color: ${(props) => props.disabled ? props.theme.colorBlack_5 : props.theme.colorPrimary};

      svg {
        fill: ${(props) => props.disabled ? props.theme.colorBlack_50 : props.theme.colorWhite};
      }
    }
  }

  &:active {
    background-color: ${(props) => props.disabled ? props.theme.colorBlack_5 : props.theme.colorPrimary_50};
    
    svg {
      fill: ${(props) => {
    if (props.disabled) {
      return props.theme.colorBlack_50;
    } else if (props.$isFavoritesPage) {
      return props.theme.colorBlack_50;
    } else {
      return props.theme.colorBlack_50;
    }
  }};
    }
  }
`;

export const FavoritesCount = styled.p`
  position: absolute;
  top: -5px;
  right: -5px;

  display: inline-block;
  min-width: 20px;
  height: 20px;
  margin: 0;
  padding-right: 5px;
  padding-left: 5px;

  color: ${(props) => props.theme.colorWhite};
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;

  background-color: ${(props) => props.theme.colorBlack_75};

  border-radius: 50%;
`;