import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Ul } from 'components/styled';
import { ReactComponent as ClearIcon } from 'assets/icon-x.svg';
import { ReactComponent as DotsIcon } from 'assets/icon-dots.svg';

const iconStyles = css`
  width: 100%;
  height: 100%;

  fill: ${(props) => props.theme.colorBlack_50};
`;

export const SearchWrapper = styled.div`
  position: relative;

  width: 100%;

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    width: 400px;
  }
`;

export const SearchIconWrapper = styled.span<{ $isFocus: boolean }>`
  position: absolute;
  top: 12px;
  right: 16px;

  display: block;
  width: 20px;
  height: 20px;

  svg {
    width: 100%;

    fill: ${(props) => props.$isFocus ? props.theme.colorBlack : props.theme.colorBlack_50};
  }
`;

export const StyledSearch = styled.input`
  width: 100%;
  padding-top: 14px;
  padding-right: 56px;
  padding-bottom: 14px;
  padding-left: 56px;

  border: none;
  border-radius: ${(props) => props.theme.defaultBorderRadius};

  background-color: ${(props) => props.theme.colorBlack_5};

  &:hover,
  &:focus {
    outline: 2px solid ${(props) => props.theme.colorBlack_15};
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 12px;
  left: 16px;

  display: block;
  width: 20px;
  height: 20px;
  padding: 0;

  font-size: 0;

  border: none;

  background-color: transparent;
`;

export const StyledClearIcon = styled(ClearIcon)`
  ${iconStyles}

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    &:hover {
      fill: ${(props) => props.theme.colorBlack};
    }
  }

  &:active {
    fill: ${(props) => props.theme.colorBlack_75};
  }
`;

export const StyledDotsIcon = styled(DotsIcon)<{ $isFocus: boolean }>`
  ${iconStyles}
  fill: ${(props) => props.$isFocus ? props.theme.colorBlack : props.theme.colorBlack_50};
`;

export const SearchResults = styled(Ul)`
  position: absolute;
  top: 120%;
  z-index: 2;

  display: block;
  width: 100%;
  padding: 20px 65px 20px 15px;

  border-radius: 12px;
  background-color: ${(props) => props.theme.colorWhite};

  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);

  li {
    margin-bottom: 10px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

export const SearcLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  padding: 10px;

  color: ${(props) => props.theme.colorBlack_75};
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    margin-bottom: 5px;
    padding: 5px;

    &:hover {
    color: ${(props) => props.theme.colorDark};

    border-radius: 12px;
    background-color: ${(props) => props.theme.colorBlack_15};
    }
  }

  &:active {
    color: ${(props) => props.theme.colorDark};

    border-radius: 12px;
    background-color: ${(props) => props.theme.colorBlack_5};
  }
`;