import { Li } from 'components/styled';
import { StyledList, StyledLink, StyledSpan, NavButton } from './styles';

interface PaginationProps {
  itemsCount: number,
  pageSize: number,
  currentCategory: string,
  currentPage: number,
}

const Pagination = ({ itemsCount, pageSize, currentCategory, currentPage }: PaginationProps) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = [];
  const currentPath = currentCategory ? `/${currentCategory}` : '';

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const prevPage = pages.length > 0 && currentPage > 1 ? currentPage - 1 : false;
  const nextPage = pages.length > 0 && currentPage < pages.length ? currentPage + 1 : false;

  let cropedPages: number[] = [];

  if (pages.length > 1) {
    switch (true) {
      case currentPage < 6: 
        cropedPages = pages.slice(0, 7);
        break;
      case currentPage < pages.length - 7: 
        cropedPages = pages.slice(currentPage - 3, currentPage + 4);
        break;
      default: 
        cropedPages = pages.slice(pages.length - 7);
        break;
    }
  }

  return (
    <nav className="container">
      <StyledList>
        {prevPage && <NavButton to={`${currentPath}/${prevPage}`}>&#9668;</NavButton>}
        {cropedPages.map((page, idx) => {
          if (idx === 3) {
            return (
              <StyledSpan key={'page_' + page}>...</StyledSpan>
            );
          } else {
            return (
              <Li key={'page_' + page}>
                <StyledLink to={`${currentPath}/${page}`}>{page}</StyledLink>
              </Li>
            );
          }
          return true;
        })}
        {nextPage && <NavButton to={`${currentPath}/${nextPage}`}>&#9658;</NavButton>}
      </StyledList>
    </nav>
  );
};

export default Pagination;
