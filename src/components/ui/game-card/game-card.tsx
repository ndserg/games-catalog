import { Game } from 'types/game';
import { ReactComponent as FavoriteImg } from 'assets/icon-favorite.svg';
import { StyledGameCard, InfoWrapper, Image, Title, Paragraph, Info, DeveloperInfo, ReleaseDate, FavoriteButton, Badge } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { addFavorite, removeFavorite } from 'store/favoriteGamesSlice';
import { useAppDispatch } from 'store/redux-hooks';

type GameProps = {
  game: Pick<Game, 'id' | 'thumbnail' | 'title' | 'short_description' | 'developer' | 'release_date' | 'platform'>,
};

const GameCard = ({ game }: GameProps) => {
  const { id, platform, thumbnail, title, developer } = game;
  const { favorites } = useSelector((state: RootState) => state.favorites);
  const dispatch = useAppDispatch();

  const isFavorite = favorites.includes(id);

  const favoritClickHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
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
          <FavoriteButton onClick={favoritClickHandler} $favorite={isFavorite}>
            <FavoriteImg />
          </FavoriteButton>
        </Info>
      </InfoWrapper>
    </StyledGameCard>
  );
};
 
export default GameCard;
