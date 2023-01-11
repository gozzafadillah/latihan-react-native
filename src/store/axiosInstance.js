/* eslint-disable prettier/prettier */
import axios from 'axios';
import {requestHandler} from './interceptor';

const config = {
  baseURL: 'http://localhost:8080',
  Headers: {
    'content-type': 'multipart/form-data',
  },
};

const axiosInstance = axios.create(config);

// Handle request process
axiosInstance.interceptors.request.use(request => requestHandler(request));

export default axiosInstance;
