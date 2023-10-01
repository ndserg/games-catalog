import { getGenres } from 'utils/utils';
import { Game } from 'types/game';
import { FiltersWrapper, FilterSelect, SelectList, SelectItem, FilterLabel, StyledInput, SortButton } from './styles';
import { useEffect, useRef, useState } from 'react';
import { sortTypes } from 'const';

type FilterProps = {
  [key: string]: string
};

type SettledFilters = {
  genre: string,
  sortType: string,
};

interface FiltersProps {
  games: Game[],
  onFilterChange: (filter: FilterProps) => void,
  currentFilters: SettledFilters,
}

const Filters = ({ games, onFilterChange, currentFilters }: FiltersProps) => {
  const genres = getGenres(games);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const selectList = useRef<HTMLDivElement>(null);

  const filterChangeHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    const target = evt.target as HTMLElement;
  
    if (target.tagName === 'LI' && target.dataset) {
      const filter = { genre: target.dataset.genre || '' };
      onFilterChange(filter);
      setIsChecked(false);
    } else if (target.tagName === 'BUTTON') {
      const newSortType = currentFilters.sortType === sortTypes.ASC ? sortTypes.DESC : sortTypes.ASC;
      const filter = { sortType: newSortType };
      onFilterChange(filter);
    }
  };

  const checkedHandler = () => {
    setIsChecked((prevState) => prevState = !prevState);
  };

  useEffect(() => {
    const checkOusideClick = (evt: MouseEvent) => {
      const target = evt.target as HTMLElement;
 
      if (isChecked && selectList.current && !selectList.current.contains(target)) {
        setIsChecked(false);
      }
    };

    document.addEventListener('click', checkOusideClick);

    return () => {
      document.removeEventListener('click', checkOusideClick);
    };

  }, [isChecked]);

  return (
    <FiltersWrapper as="section">
      <h2 className="visually-hidden">Фильтры по жанрам и дате</h2>
      <FilterSelect ref={selectList}>

        <StyledInput
          className="visually-hidden"
          type="checkbox"
          name="sortByGenre"
          id="sortByGenre"
          checked={isChecked} onChange={checkedHandler}
        />

        <FilterLabel htmlFor="sortByGenre" >
          Filter By Genre: {(currentFilters.genre || 'All').toUpperCase()}
        </FilterLabel>

        <SelectList onClick={filterChangeHandler}>
          <SelectItem>All</SelectItem>
          {genres && Object.keys(genres).map((item, idx) => (
            <SelectItem key={`${item}_${idx}`} data-genre={item}>{item}</SelectItem>
          ))}
        </SelectList>

      </FilterSelect>

      <SortButton onClick={filterChangeHandler} $arrow={currentFilters.sortType}>Date</SortButton>

    </FiltersWrapper>
  );
};
 
export default Filters;