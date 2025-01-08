import { configureStore } from '@reduxjs/toolkit';
import inscriptionsReducer from './inscriptionsSlice';

export const store = configureStore({
  reducer: {
    inscriptions: inscriptionsReducer,
  },
});
