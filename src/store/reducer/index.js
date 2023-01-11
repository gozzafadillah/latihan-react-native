/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './Reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
