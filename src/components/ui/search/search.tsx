import { SearchWrapper, StyledSearch, ClearButton, SearchIconWrapper, SearchResults, SearchItem } from './styles';
import { ReactComponent as ClearIcon } from 'assets/icon-x.svg';
import { ReactComponent as DotsIcon } from 'assets/icon-dots.svg';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { useRef, useState } from 'react';

interface SearchProps {
  name: string,
}

const Search = ({ name }:SearchProps ) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const focusHandler = (): void => {
    setIsFocus(true);
  };

  const blurHandler = (): void => {
    setIsFocus(false);
  };

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(evt.target.value);
  };

  const selectHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    const target = evt.target as HTMLElement;
  
    if (target.tagName === 'LI') {
      console.log(evt.target);
    }
  };

  const clearHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    setValue('');
    searchRef.current?.focus();
  };

  return (
    <SearchWrapper>
      <ClearButton type='button' onClick={clearHandler}>
        {value && <ClearIcon />}
        {!value && <DotsIcon />}
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
      {value && <SearchResults onClick={selectHandler}>
        <SearchItem>Игра 1</SearchItem>
        <SearchItem>Игра 2</SearchItem>
        <SearchItem>Игра 3</SearchItem>
        <SearchItem>Игра 4</SearchItem>
      </SearchResults>
      }
      <SearchIconWrapper $isFocus={isFocus}><SearchIcon /></SearchIconWrapper>
    </SearchWrapper>
    
  );
};
 
export default Search;