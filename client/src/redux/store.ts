import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tarotReducer from './tarotSlice';

export const store = configureStore({
  reducer: {
    tarot: tarotReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
