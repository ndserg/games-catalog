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
  return fetch('https://mmo-games.p.rapidapi.com/games', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1ac0bc8aaemshaed3d523fedbf09p12cec5jsn37ee6f0e3077',
      'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
    },
  })
    .then(checkStatus)
    .catch((err) => {
      throw err;
    });
};

export const getGame = (id: string) => {
  return fetch(`https://mmo-games.p.rapidapi.com/game?id=${id}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1ac0bc8aaemshaed3d523fedbf09p12cec5jsn37ee6f0e3077',
      'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
    },
  })
    .then(checkStatus)
    .catch((err) => {
      throw err;
    });
};