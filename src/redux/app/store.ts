import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cakeReducer } from "../features/cakeSlice";
import { postsApi } from "../features/query";
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
