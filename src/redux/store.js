import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // this is now global

import { app1Reducers } from '../app1/redux/app1Reducer';
import { app2Reducers } from '../app2/redux/app2Reducer';
import { app3Reducers } from '../app3/redux/app3Reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    ...app1Reducers,
    ...app2Reducers,
    ...app3Reducers,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
