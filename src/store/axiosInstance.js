/* eslint-disable prettier/prettier */
import axios from 'axios';
import {requestHandler} from './interceptor';

const config = {
  baseURL: 'https://2782-103-112-189-131.ap.ngrok.io',
};

const axiosInstance = axios.create(config);

// Handle request process
axiosInstance.interceptors.request.use(request => requestHandler(request));

export default axiosInstance;
