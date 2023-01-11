/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable semi */

import AsyncStorage from '@react-native-async-storage/async-storage';

const localStorage = {
  async saveToLocal(key, val) {
    try {
      await AsyncStorage.setItem(
        key,
        JSON.stringify({
          token: val,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  },
  async getFromLocal(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      console.log(e);
    }
  },
};

export default localStorage;
