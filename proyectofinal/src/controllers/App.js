import VistaPrincipal from "../componentes/vista-principal";
import Crear from "../views/viewsCuentaCrear/vista-crear";
import Cuenta from "../views/viewsCuentaCrear/vista-cuenta";
import { Routes, Route} from "react-router-dom";
import CmabiarContraseña from "../views/viewsContraseña/cambiar-contraseña";
import VistaContraseña from "../componentes/vista-contraseña";
import IngresarCorreo from "../views/viewsContraseña/ingresar-correo";
import RecibirCodigo from "../views/viewsContraseña/recibir-codigo";
import ContraseñaCambiada from "../views/viewsContraseña/contraseña-cambiada";
import CuentaCreada from "../views/viewsCuentaCrear/cuenta-creada";
import VistaRedsocial from "../views/viewsRedsocial/vistaPrincipal-red";


function App() {
  return (
      <div className="App">
          <Routes>
                <Route path="/" element={<VistaPrincipal />}>
                  <Route path="/" element={<Cuenta />}></Route>
                  <Route path="/vista-crear" element={<Crear />}></Route>
                  <Route path="/cuenta-creada" element={<CuentaCreada />}></Route>
                </Route>  
                <Route path="/" element={<VistaContraseña />}>
                  <Route path="/vista-contraseña" exact  element={<IngresarCorreo />}></Route>
                  <Route path="/recibir-codigo"  element={<RecibirCodigo/>}></Route>
                  <Route path="/cambiar-contraseña"  element={<CmabiarContraseña/>}></Route>
                  <Route path="/contraseña-cambiada"  element={<ContraseñaCambiada />}></Route>
                </Route>
                <Route path="/vistaPrincipal-red" element={<VistaRedsocial nombre='kkulian'/>}>

                </Route>
                
          </Routes>
          
          

          
      </div>
  );
}

export default App;
