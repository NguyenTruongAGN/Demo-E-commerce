import {configureStore} from '@reduxjs/toolkit';
import chatReducer from '@src/components/abc';
import {loginAPI} from '@src/services/login';

export const store = configureStore({
  reducer: {
    Chat: chatReducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([loginAPI.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
