
import VistaPrincipal from "../componentes/vista-principal";
import Crear from "../views/vista-crear";
import Cuenta from "../views/vista-cuenta";
import { Routes, Route} from "react-router-dom";

import VistaContraseña from "../componentes/vista-contraseña";
import IngresarCorreo from "../views/viewsContraseña/ingresar-correo";
import EnviarCorreo from "../views/viewsContraseña/enviar-correo";
import RecibirCodigo from "../views/viewsContraseña/recibir-codigo";

function App() {
  return (
      <div className="App">
          <Routes>
                <Route path="/" element={<VistaPrincipal />}>
                  <Route path="/" element={<Cuenta />}></Route>
                  <Route path="/vista-crear" element={<Crear />}></Route>
                </Route>  
                <Route path="/" element={<VistaContraseña />}>
                  <Route path="/vista-contraseña" exact  element={<IngresarCorreo />}></Route>
                  <Route path="/enviar-correo"  element={<EnviarCorreo />}></Route>
                  <Route path="/recibir-codigo" element={<RecibirCodigo />}></Route>
                </Route>
                
          </Routes>
          
          

          
      </div>
  );
}

export default App;
