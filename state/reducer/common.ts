import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type commonType = {
  settings: {
    secret_key_available?: number;
  };
  theme: string;
};

const initialState: any = {
  settings: {
    secret_key_available: undefined,
  },
  theme: "",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<commonType>) => {
      state.settings = action.payload;
    },
    setThemeColor: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setSecretKeySettings: (state, action: PayloadAction<number>) => {
      state.settings.secret_key_available = action.payload;
    },
  },
});

export const { setSettings, setThemeColor, setSecretKeySettings } = commonSlice.actions;
export default commonSlice.reducer;
