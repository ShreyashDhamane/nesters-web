import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: localStorage.getItem("currentTheme") || "light",
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setTheme } = ThemeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;
export default ThemeSlice.reducer;
