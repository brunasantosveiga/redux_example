import { useAppSelector } from "./redux/hooks/useAppSelector";

function App() {
  const user = useAppSelector((state) => state.user);
  //Para acessar o reducer que ta no store usando o useSelector personalizado do arquivo useAppSelector.ts

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos.
      <br />
      Tema: ...
      <hr />
      <input type="text" value={user.name} />
      <hr />
      <button>Mudar Tema</button>
    </div>
  );
}

export default App;
