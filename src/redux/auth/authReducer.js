import { createSlice } from '@reduxjs/toolkit';
import { registration, login, logout, refreshUser } from './authOperations';

const initialState = Object.freeze({
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registration.pending, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isRefreshing = initialState.isRefreshing;
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        state.token = payload.data.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(registration.rejected, (state) => state)

      .addCase(login.pending, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isRefreshing = initialState.isRefreshing;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        state.token = payload.data.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => state)

      .addCase(logout.pending, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isRefreshing = initialState.isRefreshing;
        state.isLoading = true;
      })
      .addCase(logout.rejected, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.data.user.name;
        state.user.email = payload.data.user.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      }),
});

export const authReducer = authSlice.reducer;
