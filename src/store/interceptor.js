/* eslint-disable prettier/prettier */
import localStorage from '../utils/storageLocal';

export const isHandlerEnabled = config => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = async config => {
  if (isHandlerEnabled(config)) {
    const token = await localStorage.getFromLocal('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token.token}`;
    }
  }
  return config;
};
