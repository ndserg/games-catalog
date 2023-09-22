import { Game } from 'types/game';

type GameProps = Pick<Game, 'thumbnail' | 'title' | 'short_description' | 'developer' | 'release_date'>;

const GameItem = ({ thumbnail, title, short_description, developer, release_date }: GameProps) => {

  return (
    <article>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>{short_description}</p>
      <div>
        <b>{developer}</b>
        <time dateTime={release_date}>{release_date}</time>
      </div>
    </article>
  );
};
 
export default GameItem;
