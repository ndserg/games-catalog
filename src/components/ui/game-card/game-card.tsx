import { Game } from 'types/game';
import { ReactComponent as FavoriteImg } from 'assets/icon-favorite.svg';
import { StyledGameCard, InfoWrapper, Image, Title, Paragraph, Info, DeveloperInfo, ReleaseDate, FavoriteButton, Badge } from './styles';

type GameProps = Pick<Game, 'thumbnail' | 'title' | 'short_description' | 'developer' | 'release_date' | 'platform'>;

const GameCard = ({ thumbnail, title, short_description, developer, release_date, platform }: GameProps) => {

  return (
    <StyledGameCard>
      <Badge>{platform}</Badge>
      <Image src={thumbnail} alt={title} />
      <InfoWrapper>
        <Title>{title}</Title>
        <Paragraph>{short_description}</Paragraph>
        <Info>
          <DeveloperInfo>{developer}</DeveloperInfo>
          <ReleaseDate dateTime={release_date}>{release_date}</ReleaseDate>
          <FavoriteButton>
            <FavoriteImg />
          </FavoriteButton>
        </Info>
      </InfoWrapper>
    </StyledGameCard>
  );
};
 
export default GameCard;
