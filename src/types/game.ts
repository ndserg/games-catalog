export interface Game {
  developer: string,
  game_url: string,
  genre: string,
  id: number,
  platform: string,
  profile_url: string,
  publisher: string,
  release_date: string,
  short_description: string,
  thumbnail: string,
  title: string,
}

type SystemRequirements = {
  [key: string]: string
};

export type Screenshot = {
  id: number,
  image: string,
};

export interface GameDescription extends Game {
  description: string,
  screenshots: Screenshot[],
  status: string,
  minimum_system_requirements?: SystemRequirements,
}
