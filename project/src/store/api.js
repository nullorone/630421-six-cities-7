import axios from 'axios';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

const token = localStorage.getItem('token') ?? '';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    const {response} = error;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
