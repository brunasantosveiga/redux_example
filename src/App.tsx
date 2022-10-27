import React from "react";
import { useDispatch } from "react-redux"; //hook para mudar os dados dos reducers
import { setName, setAge } from "./redux/reducers/userReducer";
import { setThemeStatus } from "./redux/reducers/themeReducer";
import { useAppSelector } from "./redux/hooks/useAppSelector";

function App() {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  //Para acessar o reducer que ta no store usando o useSelector personalizado do arquivo useAppSelector.ts
  const theme = useAppSelector((state) => state.theme);

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value)); //passo a minha action para o dispatch
  };
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(parseInt(e.target.value)));
  };
  const handleSwitchTheme = () => {
    dispatch(setThemeStatus(theme.status === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        backgroundColor: theme.status === "light" ? "#fff" : "#000",
        color: theme.status === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Insira seus dados:</h1>
      <hr />
      Nome:
      <input type="text" value={user.name} onChange={handleNameInput} />
      <br />
      Idade:
      <input
        type="text"
        value={user.age !== 0 ? user.age : ""}
        onChange={handleAgeInput}
      />
      {user.name && user.age !== 0 && (
        <p>
          Meu nome é: {user.name} e tenho {user.age} anos.
        </p>
      )}
      <hr />
      <span>Tema: {theme.status} </span>
      <button onClick={handleSwitchTheme}>Mudar Tema</button>
    </div>
  );
}

export default App;
