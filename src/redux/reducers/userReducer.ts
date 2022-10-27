import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user", //nome do slice
  initialState: {
    name: "",
    age: 0,
  }, //dados iniciais do slice
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  }, //actions disponíveis
}); //name, initialState e reducers são nomes orbigatórios, slice posso mudar.

export const { setName, setAge } = slice.actions; //exportando as actions

export default slice.reducer; //exportando o reducer
