/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import {combineReducers} from '@reduxjs/toolkit';
import user from './users/UsersSlicer';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
