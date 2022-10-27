import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "theme", //nome do slice
  initialState: {
    status: "light",
  }, //dados iniciais do slice
  reducers: {
    setThemeStatus: (state, action) => {
      state.status = action.payload;
    }, //actions desse slice
  },
});

export const { setThemeStatus } = slice.actions; //exportando as actiosns
export default slice.reducer; //exportando o reducer
