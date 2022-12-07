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
import Recargar from "../componentes/componenteCargar/componenteCargar";
import React, { useState } from "react";

import { ApiProvider,useApiContext } from "./context/ApiContext";





 export default ()=> <ApiProvider><App/></ApiProvider>
  function App (){
  const [loading,setLoading] = useState(false);

  // se importan las funciones de autenticacion 
  const {login,logout,register} = useApiContext()
  // se importan las funciones de usuario
  const {getUser,getAllUsers,updateUser,userDelete,createUser}=useApiContext() 
  // se importan las fucniones de dataUser
  const {userDatacreate,userGetData,userUpdatedata} = useApiContext()
  // se importan las funciones de publication
  const {getAllPublication,getOnePublication,createPublication,updatePublication,deletePublication} = useApiContext() 
  // se importan las funciones de comment
  const {createComment,getComment,getAllComment,updateComment,deleteComment} = useApiContext()
  // se importan las funciones de report
  const {getAllReports,createReport,getReport,updateReport,deleteReport} = useApiContext()

  const cambiarEstado = () =>{
    

    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },3000)
  }
  
  if(loading){
    return(
      <Recargar/>
    )
  }
  
    return (
      // name,email,password,birthdate,cc
        <div className="App overflow-hidden">
          <AnimatePresence>
        {/* funciones de autenticacion */}
            {/* <button onClick={()=>logout()}>logout</button> */}
            {/* <button onClick={()=>login('mimail1@mail.com','12345')}>login</button> */}
            {/* <button onClick={()=>register('desde react','mimail1@mail.com','12345','1999-10-16','122313456789')}>Register</button> */}

        {/* funciones de usuario */}
            {/* <button onClick={()=>getUser('1')}>get one</button> */}
            {/* <button onClick={()=>getAllUsers()}>get all</button> */}
            {/* <button onClick={()=>userDelete('')}>delete</button> */}
            {/* <button onClick={()=>createUser("si se logro con axios","selogro@gmail.com","12345","200-05-02","12775172333","3")}>crear usuario</button> */}
            {/* <button onClick={()=>updateUser()}>update</button> */}

        {/* funciones de data user */}
            {/* <button onClick={()=>userDatacreate('','campo,fotografia,cafe','masculino')}>create data user</button> */}
            {/* <button onClick={()=>userGetData('15')}>ver data</button> */}
            {/* <button onClick={()=>userUpdatedata('11','nuevas preferencias','mi-foto.jpg','masculino','mi nueva descripcion','nueva localizacion')}>actualizar data</button> */}

        {/* funciones de publicaciones*/}
            {/* <button onClick={()=>getAllPublication()}>todas las publicaciones</button> */}
            {/* <button onClick={()=>getOnePublication('1')}>ver una publicacion</button> */}
            {/* <button onClick={()=>createPublication('1','esta es mi publicacion de prueba','aqui va mi publi')}>crear publ</button> */}
            {/* <button onClick={()=>updatePublication('1','5','nuevo titulo','mi nuevo contenido')}>actualizar </button> */}
            {/* <button onClick={()=>deletePublication('6')}>delete</button> */}

        {/* funciones de comentarios */}
            {/* <button onClick={()=>getComment('6')}>obtener un comentario</button> */}
            {/* <button onClick={()=>createComment('1','3','este es mi comentario desde react')}>crear comment</button> */}
            {/* <button onClick={()=>updateComment('1','1','3','este es el segundo comentario')}>actualizar</button> */}
            {/* <button onClick={()=>deleteComment('3')}>eliminar</button> */}
            {/* <button onClick={()=>getAllComment('3')}>obtener todos</button> */}

        {/* funciones de report */}
            {/* <button onClick={()=>getAllReports()}>todos los reportes</button> */}
            {/* <button onClick={()=>createReport('una publicacion con informacion falsa','3')}>crear report</button> */}
            {/* <button onClick={()=>getReport('2')}>ver un reporte</button> */}
            {/* <button onClick={()=>updateReport('2','enrelaidad me caen mal','3')}>actualizar report</button> */}
            {/* <button onClick={()=>deleteReport('2')}>eliminar report</button> */}
            
              <Routes>
                    <Route path="/" element={<VistaPrincipal onClick={()=>cambiarEstado()} />}>
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



