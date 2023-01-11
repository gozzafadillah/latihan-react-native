/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import * as Keychain from 'react-native-keychain';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import ApiUsers from '../../apis/users';

const initialState = {
  data: {
    token: '',
  },
  status: false,
  fecthStatus: 'idle',
  error: null,
};

export const Login = createAsyncThunk('login user', async data => {
  try {
    const res = await ApiUsers.Login(data.dataEmail, data.dataPassword);
    await Keychain.setGenericPassword(data.dataEmail, res.data);
    return res.data;
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
      });
  },
});

export default UserSlice.reducer;
