import VistaPrincipal from "../componentes/vista-principal";

import { Routes, Route , useLocation} from "react-router-dom";
import CmabiarContraseña from "../views/viewsContraseña/cambiar-contraseña";
import VistaContraseña from "../componentes/vista-contraseña";
import IngresarCorreo from "../views/viewsContraseña/ingresar-correo";
import RecibirCodigo from "../views/viewsContraseña/recibir-codigo";
import ContraseñaCambiada from "../views/viewsContraseña/contraseña-cambiada";
import { AnimatePresence } from "framer-motion";
import VistaRedsocial from "../componentes/vistaPrincipal-red";
import VistaPostRed from "../views/viewsRedSocial/vista-post-red";

import'./css/App.css';
import '../componentes/css/buttons.css';
import'../componentes/css/input.css'

function App() {
  const location = useLocation()
  return (
      <div className="App overflow-hidden">
        <AnimatePresence>
        
            <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<VistaPrincipal />}>
                  </Route>  
                  <Route path="/" element={<VistaContraseña />}>
                    <Route path="/vista-contraseña" exact  element={<IngresarCorreo />}></Route>
                    <Route path="/recibir-codigo"  element={<RecibirCodigo/>}></Route>
                    <Route path="/cambiar-contraseña"  element={<CmabiarContraseña/>}></Route>
                    <Route path="/contraseña-cambiada"  element={<ContraseñaCambiada />}></Route>
                  </Route>
                  <Route path="/" element={<VistaRedsocial/>}>
                      <Route path="vistaPrincipal-red" element={<VistaPostRed />}></Route>
                  </Route>
            </Routes>
            </AnimatePresence>
          
      </div>
  );
}

export default App;
