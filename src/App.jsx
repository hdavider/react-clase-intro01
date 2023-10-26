import ButtonSubmit from "./components/ButtonSubmit";
import { ButtonNamed, ButtonNamed02 } from "./components/ButtonNamed";
import { Header } from "./components/Header";
import { Ejercicio } from "./components/Ejercicio"; 
import { Condicional } from "./components/Condicional";
import { ListStore } from "./components/ListStore";
function App() {
  return (
    <>
      
      
      <Header titulo = "React Components"
              contenido= " En esta clase veremos el tema de react components condicionales"
      />
      <Header titulo = "Clase de React02"/>
      <ButtonSubmit />
{/*       <Condicional valor={false} />
      <Condicional valor={true} />
      <Ejercicio /> */}
      <ListStore />
    </>
  );
}

export default App;
