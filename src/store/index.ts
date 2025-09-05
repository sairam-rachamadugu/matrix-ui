import { configureStore } from '@reduxjs/toolkit';
import brickReducer from './sale/brickSlice';

const store = configureStore({
  reducer: {
    bricks: brickReducer,
  },
});

export default store;