/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import localStorage from '../../../utils/storageLocal';
import ApiUsers from '../../apis/users';

const initialState = {
  data: {
    token: '',
    health: null,
  },
  status: false,
  fecthStatus: 'idle',
  error: null,
};

export const Login = createAsyncThunk('login user', async data => {
  try {
    const res = await ApiUsers.Login(data.dataEmail, data.dataPassword);
    localStorage.saveToLocal('token', res.data.result);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const GetuserHealth = createAsyncThunk('get health', async () => {
  try {
    const res = await ApiUsers.GetHealth();
    return res;
  } catch (error) {
    throw new Error(error);
  }
});

const UserSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(Login.pending, state => {
        state.fecthStatus = 'loading';
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.fecthStatus = 'success';
        state.data.token = action.payload.result;
      })
      .addCase(Login.rejected, (state, action) => {
        state.fecthStatus = 'failed';
        state.error = action.error.message;
      })
      .addCase(GetuserHealth.pending, state => {
        state.fecthStatus = 'loading';
      })
      .addCase(GetuserHealth.fulfilled, (state, action) => {
        state.fecthStatus = 'success';
        state.data.health = action.payload.result;
      })
      .addCase(GetuserHealth.rejected, (state, action) => {
        state.fecthStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export default UserSlice.reducer;
