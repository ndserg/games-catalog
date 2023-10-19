import axios, { AxiosInstance, AxiosError } from 'axios';

type DetailMessageType = {
  type: string;
  message: string;
};

export const BACKEND_URL = 'https://mmo-games.p.rapidapi.com';
const PROXY_URL = '/php/game_fetch.php';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: PROXY_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,

    (error: AxiosError<DetailMessageType>) => {
      if (error.response) {
        throw new Error(error.response.data.message);
      }

      throw error;
    },
  );

  return api;
};
