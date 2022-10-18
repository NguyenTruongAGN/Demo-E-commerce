import {configureStore} from '@reduxjs/toolkit';
import {productAPI} from '@src/services/products';
import {cartAPI} from '@src/services/cart';
export const store = configureStore({
  reducer: {
    [productAPI.reducerPath]: productAPI.reducer,
    [cartAPI.reducerPath]: cartAPI.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([productAPI.middleware, cartAPI.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
