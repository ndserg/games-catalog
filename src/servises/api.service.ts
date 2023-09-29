const checkStatus = (response: Response) => {
  if (response.headers.get('Content-Type')?.includes('text/html')) {
    throw new Error('Запрашиваемая страница не найдена!');
  } else if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export const getAllGames = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://www.mmobomb.com/api1/games')
    .then(checkStatus)
    .catch((err) => {
      throw err;
    });
};

export const getGame = (id: string) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://www.mmobomb.com/api1/game?id=${id}`)
    .then(checkStatus)
    .catch((err) => {
      throw err;
    });
};