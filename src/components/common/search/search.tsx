import { Game } from 'types/game';
import { SearchWrapper, StyledSearch, ClearButton, StyledClearIcon, StyledDotsIcon, SearchIconWrapper, SearchResults, SearcLink } from './styles';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { useRef, useState } from 'react';
import { filterByName } from 'utils/utils';
import { Li } from 'components/styled';

interface SearchProps {
  name: string,
  games: Game[],
}

const Search = ({ name, games }: SearchProps ) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [foundedGames, setFoundedGames] = useState<Game[]>([]);

  const clearSearch = (): void => {
    setValue('');
    setFoundedGames([]);
  };

  const focusHandler = (): void => {
    setIsFocus(true);
  };

  const blurHandler = (): void => {
    setIsFocus(false);
    clearSearch();
  };

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const searchResults = filterByName(games, evt.target.value);
    setFoundedGames(searchResults);
    setValue(evt.target.value);
  };

  const selectHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    clearSearch();
  };

  const clearHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    clearSearch();
    searchRef.current?.focus();
  };


  return (
    <SearchWrapper>
      <ClearButton type='button' onClick={clearHandler}>
        {value && <StyledClearIcon />}
        {!value && <StyledDotsIcon $isFocus={isFocus}/>}
      </ClearButton>
      <StyledSearch
        ref={searchRef}
        type='text'
        name={name}
        id={name}
        value={value}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onInput={inputHandler}
        placeholder='Search anything'
        autoComplete='off'
      />
      {foundedGames.length > 0 && <SearchResults onClick={selectHandler}>
        {foundedGames.map((game) => (
          <Li key={game.id}>
            <SearcLink to={`/game/${game.id}`}>{game.title}</SearcLink>
          </Li>
        ))}
      </SearchResults>
      }
      <SearchIconWrapper $isFocus={isFocus}><SearchIcon /></SearchIconWrapper>
    </SearchWrapper>
    
  );
};
 
export default Search;