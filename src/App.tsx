import React from "react";
import { useDispatch } from "react-redux"; //hook para mudar os dados dos reducers
import { setName, setAge } from "./redux/reducers/userReducer";
import { useAppSelector } from "./redux/hooks/useAppSelector";

function App() {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  //Para acessar o reducer que ta no store usando o useSelector personalizado do arquivo useAppSelector.ts

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value)); //passo a minha action para o dispatch
  };
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(parseInt(e.target.value)));
  };

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos.
      <br />
      Tema: ...
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="text" value={user.age} onChange={handleAgeInput} />
      <hr />
      <button>Mudar Tema</button>
    </div>
  );
}

export default App;
