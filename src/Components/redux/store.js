import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your other reducers here
  },
});

export default store;