import styled from 'styled-components';
import { Ul } from 'components/styled';
import { Li } from 'components/styled';

export const Container = styled.main`
  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const GameHeader = styled.div`
  margin-bottom: 30px;
  padding: 15px;
  
  border-radius: ${(props) => props.theme.defaultBorderRadius};

  background-color: ${(props) => props.theme.colorBlack_5};

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    margin-bottom: 50px;
   
    padding-top: 32px;
    padding-right: 34px;
    padding-bottom: 32px;
    padding-left: 34px;
  }

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    margin-bottom: 70px;
    padding-bottom: 50px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;

  color: ${(props) => props.theme.colorDark};
  font-weight: 500;
  font-size: 20px;
  line-height: 33px;

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    margin-bottom: 32px;

    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
  }

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 328px;

  border-radius: ${(props) => props.theme.defaultBorderRadius};

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    width: 540px;
  }

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    max-width: 50%;
  }
`;

export const Description = styled.p`
  margin: 0;
  margin-bottom: 20px;

  color: ${(props) => props.theme.colorBlack};
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    margin-bottom: 32px;
  }

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    max-width: 50%;
    margin-right: 50px;
    margin-bottom: 0;
  }
`;

export const StyledList = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-bottom: 30px;

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    row-gap: 20px;

    margin-bottom: 50px;
  }

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    width: 48%;
    margin-bottom: 70px;
  }
`;

export const ImageItem = styled(Li)`
  width: 180px;
  padding: 10px;

  border-radius: ${(props) => props.theme.defaultBorderRadius};

  box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.07);

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    width: 292px;
  }

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    width: 304px;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;

  border-radius: ${(props) => props.theme.defaultBorderRadius};
`;

export const Table = styled.table`
  width: 100%;

  @media (min-width: ${(props) =>props.theme.desktopWidth}) {
    width: 48%;
    border-left: 4px dotted ${(props) => props.theme.colorBlack_15};
  }
`;

export const TableTitle = styled.caption`
  position: relative;

  padding-left: 10px;
  padding-bottom: 5px;

  color: ${(props) => props.theme.colorBlack};
  font-weight: 500;
  font-size: 20px;
  text-align: left;
  line-height: 26px;

  border-bottom: 4px solid ${(props) => props.theme.colorBlack_5};

  &::before {
    position: absolute;
    left: 0;
    top: 8px;

    display: block;
    width: 4px;
    height: 10px;
    margin-right: 5px;

    border-radius: ${(props) => props.theme.defaultBorderRadius};

    background-color: ${(props) => props.theme.colorPrimary};

    content: '';
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.theme.colorBlack_5};
  }
`;

export const TableCell = styled.td`
  padding: 5px;

  color: ${(props) => props.theme.colorBlack};
  font-weight: 500;

  &:first-child {
    text-transform: capitalize;
  }

  @media (min-width: ${(props) =>props.theme.tabletWidth}) {
    width: 70%;

    &:first-child {
      width: 30%;
    }
  }
`;