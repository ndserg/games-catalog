const checkStatus = (response: Response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export const getAllGames = () => {
  return fetch('https://www.mmobomb.com/api1/games')
    .then(checkStatus)
    .catch((err) => {
      throw err;
    });
};