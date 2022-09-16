import { configureStore } from '@reduxjs/toolkit';
import { sideMenuReducer } from './sideMenuSlice';

const store = configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
  },
});

export default store;
