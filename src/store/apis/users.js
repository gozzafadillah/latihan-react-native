/* eslint-disable prettier/prettier */
import axiosInstance from '../axiosInstance';

const ApiUsers = {
  async Login(email, password) {
    try {
      const res = await axiosInstance.post('/login', {
        email: email,
        password: password,
      });
      return res;
    } catch (error) {
      return error;
    }
  },
  async GetHealth() {
    try {
      const res = await axiosInstance.get('/users/health');
      return res.data;
    } catch (error) {
      return error;
    }
  },
};

export default ApiUsers;
