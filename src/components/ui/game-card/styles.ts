import styled from 'styled-components';

export const StyledGameCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  
  border-radius: ${(props) => props.theme.defaultBorderRadius};

  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.07);

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 338px;
  margin-bottom: 16px;

  border-radius: ${(props) => props.theme.defaultBorderRadius};

  object-fit: contain;

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    width: 290px;
    max-height: 164px;
    margin-right: 10px;
  }

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    width: 338px;
    max-height: none;
    margin-right: 0;
  }
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 16px;

  color: ${(props) => props.theme.colorBlack};
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
`;

export const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 16px;

  color: ${(props) => props.theme.colorBlack_75};
  font-size: ${(props) => props.theme.fontSizeDefault};
`;

export const Info = styled.div`
  position: relative;

  padding-top: 13px;
  padding-right: 52px;
  padding-bottom: 13px;
  padding-left: 16px;
  
  border-radius: ${(props) => props.theme.defaultBorderRadius};
  
  background-color: ${(props) => props.theme.colorBlack_5};

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    margin-top: auto;
  }
`;

export const DeveloperInfo = styled.b`
  display: block;
  margin-bottom: 5px;

  color: ${(props) => props.theme.colorBlack};
  font-weight: 500;
  line-height: 22px;
`;

export const ReleaseDate = styled.time`
  display: block;

  color: ${(props) => props.theme.colorBlack_75};
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;

export const FavoriteButton = styled.button<{ $favorite?: boolean }>`
  position: absolute;
  top: calc(50% - 10px);
  right: 16px;

  width: 20px;
  height: 22px;
  padding: 0;

  border: none;

  svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.$favorite ? props.theme.colorPrimary : props.theme.colorBlack_50};
  }

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    cursor: pointer;
    
    &:hover {
      svg {
        fill: ${(props) => props.theme.colorBlack};
      }
    }
  }

  &:active {
    svg {
      fill: ${(props) => props.theme.colorPrimary};
    }
  }
`;


