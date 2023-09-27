type PlatformsTypes = {
  [key: string]: string,
};

export const platforms: PlatformsTypes = {
  Windows: 'PC Games', 
  Browser: 'Browser Games',
};

export const pageItemsCount = 16;

type SortTypes = {
  [key: string]: string,
};

export const sortType: SortTypes = {
  ASC: 'asc',
  DESC: 'desc',
};