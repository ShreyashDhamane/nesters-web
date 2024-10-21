import { configureStore } from "@reduxjs/toolkit";
import { ThemeSlice } from "./features/themeSlice";
export const store = configureStore({
  reducer: {
    theme: ThemeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
