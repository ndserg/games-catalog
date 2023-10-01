import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLocalGame } from 'servises/localStorage.service';
import Loading from 'components/ui/loading/loading';
import { GameDescription, Screenshot } from 'types/game';
import { GameContainer, GameHeader, Title, Image, Description, StyledList, ImageItem, Thumbnail, Table, TableTitle, TableRow, TableCell, SlideContainer, NavButton } from './styles';

interface LoadGame {
  (data: GameDescription): void,
}

interface Error {
  (message: string): void,
}

const directions = {
  NEXT: 'next',
  PREV: 'prev',
};

const GamePage = () => {
  const { id = '' } = useParams();
  const [game, setGame] = useState<GameDescription | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [images, setimages] = useState<Screenshot[]>([]);
  const [currentImg, setCurrentImg] = useState<number>(0);

  const onLoad: LoadGame = (data) => {
    const { screenshots, thumbnail } = data;
    screenshots.unshift({ id: Date.now(), image: thumbnail });
    setError('');
    setGame(data);
    setimages(screenshots);
    setIsLoading(false);
  };
  
  const onError: Error = (message): void => {
    setError(message);
    setIsLoading(false);
  };

  const setSlideIndex = (direction: string) => {
    const slidesCount = images.length;

    if (direction === directions.NEXT) {
      setCurrentImg((prevState) => prevState + 1 > images.length - 1 ? 0 : prevState + 1);
    } else {
      setCurrentImg((prevState) => prevState - 1 < 0 && slidesCount > 1 ? slidesCount - 1 :  prevState - 1);
    }
  };

  const sliderClickHandler = (evt: React.MouseEvent) => {
    const target = evt.target as HTMLImageElement;

    if (target.tagName === 'BUTTON' && target.dataset?.direction) {
      setSlideIndex(target.dataset.direction);
    }

    if (target.tagName === 'IMG' && target.dataset?.thumbnail) {
      const index = Number(target.dataset.thumbnail);
      setCurrentImg(images.findIndex((image) => image.id === index));
    }
  };

  useEffect(() => {
    setIsLoading(true);
  
    getLocalGame(onLoad, onError, id);
  }, [id]);
  
  if (error) {
    return (
      <h1>{error}</h1>
    );
  }

  if (isLoading || !game || !images) {
    return (
      <section>
        <Loading />
      </section>
    );
  }
  const description = game.description.replaceAll(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '');

  return (
    <GameContainer as='main' onClick={sliderClickHandler}>
      <GameHeader>
        <Title>{game.title}</Title>
        <Description>{description}</Description>
        <SlideContainer>
          {images.length > 1 && <NavButton data-direction={directions.PREV}>&#9668;</NavButton>}
            <Image src={images[currentImg].image} alt={images[currentImg].id.toString()} />
            {images.length > 1 && <NavButton data-direction={directions.NEXT}>&#9658;</NavButton>}
        </SlideContainer>
      </GameHeader>

      <StyledList>
        {images && images.map((item) => (
          <ImageItem key={item.id} $current={images[currentImg].id ===  item.id}>
            <Thumbnail src={item.image} alt={item.id.toString()} data-thumbnail={item.id} />
          </ImageItem>
        ))}
      </StyledList>

      {game.minimum_system_requirements && 
        <Table>
          <TableTitle>Minimum system requirements</TableTitle>
          <tbody>
            {Object.keys(game.minimum_system_requirements).map((key) => (
              <TableRow key={`${key}_${game.id}`}>
                <TableCell>{key}:</TableCell>
                <TableCell>{game.minimum_system_requirements && game.minimum_system_requirements[key]}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      }
    </GameContainer>
  );
};
 
export default GamePage;
