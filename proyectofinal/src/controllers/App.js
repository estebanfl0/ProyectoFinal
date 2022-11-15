import VistaPrincipal from "../componentes/vista-principal";
import Crear from "../views/viewsCuentaCrear/vista-crear";
import Cuenta from "../views/viewsCuentaCrear/vista-cuenta";
import { Routes, Route , useLocation} from "react-router-dom";
import CmabiarContraseña from "../views/viewsContraseña/cambiar-contraseña";
import VistaContraseña from "../componentes/vista-contraseña";
import IngresarCorreo from "../views/viewsContraseña/ingresar-correo";
import RecibirCodigo from "../views/viewsContraseña/recibir-codigo";
import ContraseñaCambiada from "../views/viewsContraseña/contraseña-cambiada";
import CuentaCreada from "../views/viewsCuentaCrear/cuenta-creada";
import VistaRedsocial from "../componentes/vistaPrincipal-red";
import VistaPostRed from "../views/viewsRedSocial/vista-post-red";
import {CSSTransition} from 'react-transition-group'; 
import{TransitionGroup} from'react-transition-group';
import'./css/App.css';
import CardPost from "../componentes/componenteCardPost/componenteCardPost";
function App() {
  const location = useLocation()
  return (
      <div className="App overflow-hidden">
        <TransitionGroup>
          <CSSTransition
            timeout={1000}
            classNames='fade'
            key={location.key}
          >
            <Routes location={location}>
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
                  <Route path="/" element={<VistaRedsocial/>}>
                      <Route path="vistaPrincipal-red" element={<VistaPostRed />}></Route>
                  </Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
  );
}

export default App;
