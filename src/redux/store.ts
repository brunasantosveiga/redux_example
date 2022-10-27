import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import themeReducer from "./reducers/themeReducer";

export const store = configureStore({
  reducer: {
    user: userReducer, //coloco todos os reducers que eu tiver
    theme: themeReducer,
  },
}); //tem outras coisas que posso configurar no store

export type RootState = ReturnType<typeof store.getState>; //type de todos os reducers
// A documentação recomenda chamar de RootState
