import styled from 'styled-components';

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  width: 48px;
  height: 48px;
  padding: 14px;

  border: none;
  border-radius: ${(props) => props.theme.defaultBorderRadius};

  background-color: ${(props) => {
    if (props.disabled) {
      return props.theme.colorBlack_5;
    } else if (props.$isFavorite) {
      return props.theme.colorPrimary_75;
    } else {
      return props.theme.colorBlack_15;
    }
  }};

  svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.$isFavorite ? props.theme.colorWhite : props.theme.colorBlack_50};
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
    } else if (props.$isFavorite) {
      return props.theme.colorBlack_50;
    } else {
      return props.theme.colorBlack_50;
    }
  }};
    }
  }
`;