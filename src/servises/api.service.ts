const apiUrl = 'https://mmo-games.p.rapidapi.com';
const localDataURL = '/php/game_fetch.php';

const checkStatus = (response: Response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export const getAllGames = () => {
  return fetch(`${localDataURL}?url=${apiUrl}/games`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
  })
    .then(checkStatus)
    .catch((err) => {
      throw err;
    });
};

export const getGame = (id: string) => {
  return fetch(`${localDataURL}?isGame=true&url=${apiUrl}/game?id=${id}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
  })
    .then(checkStatus)
    .catch((err) => {
      throw err;
    });
};