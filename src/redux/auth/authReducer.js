import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './authOperations';

const initialState = Object.freeze({
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => state)
      .addCase(register.rejected, (state) => state)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user.name = payload.data.user.name;
        state.user.email = payload.data.user.email;
        state.token = payload.data.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.pending, (state) => state)
      .addCase(login.rejected, (state) => state)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user.name = payload.data.user.name;
        state.user.email = payload.data.user.email;
        state.token = payload.data.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logout.pending, (state) => state)
      .addCase(logout.rejected, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        // state = initialState;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.data.user.name;
        state.user.email = payload.data.user.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;
