import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer, //coloco todos os reducers que eu tiver
  },
}); //tem outras coisas que posso configurar no store

export type RootState = ReturnType<typeof store.getState>; //type de todos os reducers
// A documentação recomenda chamar de RootState
