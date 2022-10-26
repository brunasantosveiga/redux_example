import { useSelector, TypedUseSelectorHook } from "react-redux"; //useSelector é um hook do react redux
import { RootState } from "../store"; //type geral dos reducers

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//criando um hook useSelector personalizado para já usar ele no App.tsx tipado
