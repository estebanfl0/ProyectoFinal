import VistaPrincipal from "../componentes/vista-principal";

import { Routes, Route , useLocation} from "react-router-dom";
import CmabiarContraseña from "../views/viewsContraseña/cambiar-contraseña";
import VistaContraseña from "../componentes/vista-contraseña";
import IngresarCorreo from "../views/viewsContraseña/ingresar-correo";
import VistaRedsocial from "../componentes/vistaPrincipal-red";
import RecibirCodigo from "../views/viewsContraseña/recibir-codigo";
import ContraseñaCambiada from "../views/viewsContraseña/contraseña-cambiada";
import { AnimatePresence } from "framer-motion";
import VistaPostRed from "../views/viewsRedSocial/vista-post-red";

import'./css/App.css';
import '../componentes/css/login.css'
import '../componentes/css/buttons.css';
import'../componentes/css/input.css'
import'../componentes/css/cardEcommerce.css'
import'../componentes/css/card_job.css'
import'../componentes/css/editarP.css'
import'../componentes/css/notificaciones.css'
import VistaEcommerce from "../views/viewsRedSocial/vista-ecommerce-red";
import VistaTrabajoRed from "../views/viewsRedSocial/vista-trabajo-red";
import VistaConfigRed from "../views/viewsRedSocial/vista-config-red";
import VistaPerfil from "../views/viewsRedSocial/vistaPerfil/vista-perfil-red";
import VistaInfoPerfil from "../views/viewsRedSocial/vistaPerfil/vista-info-perfil";
import VistaPostPerfil from "../views/viewsRedSocial/vistaPerfil/vista-post-perfil";
import React, { useState , Suspense,lazy } from "react";





 export function App (){
  const [login,setLogin] = useState(false)
  
    return (
        <div className="App overflow-hidden">
          <AnimatePresence>
              <Routes>
                    <Route path="/" element={<VistaPrincipal />}>
                    </Route>
                    <Route path="/" element={<VistaRedsocial/>}>
                        <Route path="/vistaPrincipal-red" element={<VistaPostRed />}></Route>
                        <Route path="/vista-ecommerce-red" element={<VistaEcommerce />}></Route>
                        <Route path="/vista-trabajo-red" element={<VistaTrabajoRed />}></Route>
                        <Route path="/vista-config-red" element={<VistaConfigRed />}></Route>
                        <Route path="/vista-perfil-red" element={<VistaPerfil />}>
                          <Route path="/vista-perfil-red" element={<VistaInfoPerfil />}></Route>
                          <Route path="/vista-perfil-red/vista-post-perfil" element={<VistaPostPerfil />}></Route>
                        </Route>
                    </Route>
                    <Route path="/" element={<VistaContraseña />}>
                      <Route path="/vista-contraseña" exact  element={<IngresarCorreo />}></Route>
                      <Route path="/recibir-codigo"  element={<RecibirCodigo/>}></Route>
                      <Route path="/cambiar-contraseña"  element={<CmabiarContraseña/>}></Route>
                      <Route path="/contraseña-cambiada"  element={<ContraseñaCambiada />}></Route>
                    </Route>
                   
              </Routes>
              </AnimatePresence>
          
          
            
        </div>
    );
  }



