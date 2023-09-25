import { configureStore } from '@reduxjs/toolkit';
import fakeStoreSlice from '../features/fakestore/fakeStoreSlice';

export const store = configureStore({
  reducer: {
    fakeStore:fakeStoreSlice
  },
});
