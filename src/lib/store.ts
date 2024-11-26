import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../lib/slices/counter/counterSlice';  // Import the counter slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,  // Add the counter reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
