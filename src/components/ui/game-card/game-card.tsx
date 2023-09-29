import { useState } from 'react';
import { Game } from 'types/game';
import { ReactComponent as FavoriteImg } from 'assets/icon-favorite.svg';
import { StyledGameCard, InfoWrapper, Image, Title, Paragraph, Info, DeveloperInfo, ReleaseDate, FavoriteButton, Badge } from './styles';
import { setFavoriteGame } from 'servises/localStorage.service';

type GameProps = {
  game: Pick<Game, 'id' | 'thumbnail' | 'title' | 'short_description' | 'developer' | 'release_date' | 'platform'>,
  isFavorite: boolean,
};

const GameCard = ({ game, isFavorite }: GameProps) => {
  const { id, platform, thumbnail, title, developer } = game;
  const [favorite, setFavorite] = useState<boolean>(isFavorite);

  const favoritClickHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    setFavorite((prevState) => !prevState);
    setFavoriteGame(id);
  };

  return (
    <StyledGameCard>
      <Badge>{platform}</Badge>
      <Image src={thumbnail} alt={title} />
      <InfoWrapper>
        <Title>{title}</Title>
        <Paragraph>{game.short_description}</Paragraph>
        <Info>
          <DeveloperInfo>{developer}</DeveloperInfo>
          <ReleaseDate dateTime={game.release_date}>{game.release_date}</ReleaseDate>
          <FavoriteButton onClick={favoritClickHandler} $favorite={favorite}>
            <FavoriteImg />
          </FavoriteButton>
        </Info>
      </InfoWrapper>
    </StyledGameCard>
  );
};
 
export default GameCard;
