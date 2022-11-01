import "./App.css";
import VistaPrincipal from "./componentes/vista-principal";
import Crear from "./pages/vista-crear";
import Cuenta from "./pages/vista-cuenta";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
   
      <div className="App">
          <Routes>
                <Route element={<VistaPrincipal/>}>
                  <Route path="/" element={<Cuenta/>}></Route>
                  <Route path="/vista-crear" element={<Crear/>}></Route>
                </Route>
              
          </Routes>
      </div>
  );
}

export default App;
