/* eslint-disable prettier/prettier */
import * as Keychain from 'react-native-keychain';
export const isHandlerEnabled = config => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = async config => {
  try {
    // Retrieve the credentials
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      if (isHandlerEnabled(config)) {
        const token = 'kosong';
        console.log('token saya', credentials);
        if (token) {
          config.headers.Authorization = `Bearer ${credentials.password}`;
        }
      }
      console.log(
        'Credentials successfully loaded for user ' + credentials.username,
      );
    } else {
      console.log('No credentials stored');
    }
  } catch (error) {
    console.log("Keychain couldn't be accessed!", error);
  }
  await Keychain.resetGenericPassword();

  return config;
};
