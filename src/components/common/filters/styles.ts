import styled, { css } from 'styled-components';
import { Ul, Li } from 'components/styled';

const buttonSyle = css`
  display: block;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;

  color: ${(props) => props.theme.colorBlack};
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  border-radius: ${(props) => props.theme.defaultBorderRadius};

  background-color: ${(props) => props.theme.colorWhite};

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    &:hover {
      color: ${(props) => props.theme.colorWhite};

      background-color: ${(props) => props.theme.colorPrimary_25};
    }
  }

  &:active {
    color: ${(props) => props.theme.colorWhite};

      background-color: ${(props) => props.theme.colorPrimary_75};
  }
`;

export const FiltersWrapper = styled.section`
  display: flex;
  margin-bottom: 30px;
  padding: 16px;

  border-radius: ${(props) => props.theme.defaultBorderRadius};

  background-color: ${(props) => props.theme.colorBlack_5};
`;

export const FilterSelect = styled.div`
  position: relative;

  display: flex;
  margin-right: 30px;
`;

export const FilterLabel = styled.label`
  ${buttonSyle}
`;

export const StyledInput = styled.input`
  &:checked ~ ul {
    display: block;
    height: auto;
    padding: 20px 65px 20px 15px;
  }

  &:checked + label {
    color: ${(props) => props.theme.colorWhite};

    background-color: ${(props) => props.theme.colorSecondary};

    @media (min-width: ${(props) =>props.theme.desktopWidth}) {
      &:hover {
        color: ${(props) => props.theme.colorWhite};
        
        background-color: ${(props) => props.theme.colorPrimary_25};
      }

      &:active {
        ${(props) => props.theme.colorWhite};

        background-color: ${(props) => props.theme.colorPrimary_75};
      }
    }
  }
`;

export const SelectList = styled(Ul)`
  position: absolute;
  top: 120%;
  z-index: 2;

  height: 0;
  padding: 0;

  border-radius: 12px;
  background-color: ${(props) => props.theme.colorWhite};

  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);

  overflow: hidden;

  li {
    margin-bottom: 10px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  transition: all 0.2s ease-in;
`;

export const SelectItem = styled(Li)`
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

interface SortButtonProps {
  $arrow?: string
}

export const SortButton = styled.button.attrs<SortButtonProps>(({ $arrow }) => ({
  $arrow,
}))`
  ${buttonSyle}
  display: flex;
  align-items: center;
  column-gap: 15px;

  padding-right: 10px;

  border: none;
  color: ${(props) => props.$arrow};

  &::after {
    display: block;

    border: 8px solid transparent;
    border-top: 8px solid ${(props) => props.theme.colorBlack};

    transform: ${(props) => props.$arrow === 'asc' ? 'rotate(180deg) translateY(4px)' : 'translateY(4px)'}; 

    content: "";
  }

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
      &:hover {
        &::after {
          border-top-color: ${(props) => props.theme.colorWhite};
        }
        
      }
    }

    &:active {
      &::after {
        border-top-color: ${(props) => props.theme.colorWhite};
      }
    }
`;