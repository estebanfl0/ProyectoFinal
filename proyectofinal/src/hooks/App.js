import VistaPrincipal from "../componentes/vista-principal";
import swal from 'sweetalert'

import { Routes, Route , BrowserRouter as Router, useLocation} from "react-router-dom";
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
import React, { useState , useLayoutEffect } from "react";
import { ApiProvider,useApiContext } from "./context/ApiContext";
import AdministrarUsers from "../views/viewsRedSocial/vista-administrar-rol";
import ShowAllUsers from "../views/viewsRedSocial/crud/showAllUsers";
import ShowUser from "../views/viewsRedSocial/crud/showUser";
import AddUsers from "../views/viewsRedSocial/crud/addUsers";
import EditUser from "../views/viewsRedSocial/crud/editUser";
import VistaUnaPubli from "../views/viewsRedSocial/vistaUnaPubli";





 export default ()=> <ApiProvider><App/></ApiProvider>
  function App (){
  const [loading,setLoading] = useState(false);

  // se importan las funciones de autenticacion 
  const {LoginUser,logout,register,resul,resHandler,isActive} = useApiContext()
  
  // se importan las funciones de usuario
  const {getUser,getAllUsers,updateUser,deleteUser,createUser}=useApiContext()
  // se importan las fucniones de dataUser
  const {userDatacreate,userGetData,userUpdatedata} = useApiContext()
  // se importan las funciones de publication
  const {getAllPublication,getOnePublication,createPublication,updatePublication,deletePublication} = useApiContext()
  // se importan las funciones de comment
  const {createComment,getComment,getAllComment,updateComment,deleteComment} = useApiContext()
  // se importan las funciones de report
  const {getAllReports,createReport,getReport,updateReport,deleteReport} = useApiContext()

  //ESTEBAN
// se importan las funciones de role
  const {getRole, createRole, updateRole, deleteRole} = useApiContext()
  //se importan las funciones de report
//se importan las funciones de notification
const {getNotification, createNotification, updateNotification, deleteNotification, getAllNotifications} = useApiContext()
//se importan las funciones de typenotification
const {getTypeNotification, createTypeNotification, updateTypeNotification, deleteTypeNotification, getAllTypeNotifications} = useApiContext()
//se importan las funciones de typePublication
const {createtypespublication, gettypespublication, updatetypespublication, deletetypespublication, getAlltypespublications} = useApiContext()
//se importan las funciones de like
const {createlike, getlike, updatelike, deletelike, getAlllikes} = useApiContext()



  // const userGetcomment = async(id)=>{
  //   setLoading(true)
  //   const res = await getComment(id)
  //   setLoading(false)
  // }

  useLayoutEffect(()=>{
    let active = isActive()
    if(active){
      resHandler()
    }
  },[])

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
  const click = () => {
    swal({
        title:'Wait',
        text:'The credentials are incorrects',
        icon:'error',
        button:'Try',
    });
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
            {/* <button onClick={()=>deleteUser('6')}>delete</button> */}
            {/* <button onClick={()=>createUser("Admin","admin@gmail.com","admin","2000-05-02","1234512345","1")}>crear usuario</button> */}
            {/* <button onClick={()=>updateUser('2','Juan','email','12345','1999-01-01','123456789886')}>update</button> */}

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
            {/* <button onClick={()=>getComment('1')}>obtener un comentario</button> */}
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
            
            {/* <button onClick={()=>userGetcomment('6')}>obtener un comentario</button> */}
            {/* <button onClick={()=>createComment('1','1','este es mi comentario desde react')}>crear comment</button> */}
            {/* <button onClick={()=>updateComment('1','1','3','este es el segundo comentario')}>actualizar</button> */}
            {/* <button onClick={()=>deleteComment('3')}>eliminar</button> */}

    {/*Funciones añadidas por Esteban */}

      {/*Funciones Rol */}
          {/*<button onClick={()=>getRole('3')}>obtener un rol</button> */} 
          {/*<button onClick={()=>createRole('friend')}>crear Role</button> */}
          { /*<button onClick={()=>updateRole('1','Friend Actualizado')}>actualizar</button>*/}
          {/*<button onClick={()=>deleteRole('1')}>eliminar Role</button>*/ }

      {/*Funciones Notification */}
          {/*<button onClick={()=>getNotification('1')}>obtener un Notification</button>*/} 
          {/*<button onClick={()=>createNotification('content','3','5','7')}>crear Notification</button> */}
          {/*<button onClick={()=>deleteNotification('3')}>eliminar Notification</button> */}

        {/*Funciones TypeNotification */}
          {/*<button onClick={()=>createTypeNotification('Ensayito', 'Primer ensayo')}>Craer un tipo Notification</button>*/} 
          {/*FALTA <button onClick={()=>getTypeNotification('2')}>obtener un ti´po de Notification</button>*/} 
          {/*<button onClick={()=>getAllTypeNotifications()}>obtener todos los tipos Notification</button>*/} 
          {/*<button onClick={()=>updateTypeNotification('4','Ensayito 2 update','este es el segundo ensayo')}>Actualizar un tipo de Notification</button> */}
          {/*<button onClick={()=>deleteTypeNotification('4')}>eliminar Notification</button> */}

        {/*Funciones Images Publication //////////ZZZZZZ FALTA todo*/}
          {/*<button onClick={()=>createimages_publication('Ensayito', 'Primer ensayo')}>Craer un tipo Notification</button>*/} 
          {/*<button onClick={()=>getimages_publication('2')}>obtener un ti´po de Notification</button>*/} 
          {/*<button onClick={()=>updateimages_publication('4','Ensayito 2 update','este es el segundo ensayo')}>Actualizar un tipo de Notification</button> */}
          {/*<button onClick={()=>deleteimages_publication('4')}>eliminar Notification</button> */}

        {/*Funciones Type Publication*/}
          {/*<button onClick={()=>createtypespublication('Ensayito', 'Primer ensayo')}>Crear un tipo </button>*/} 
          { /*<button onClick={()=>gettypespublication('2')}>obtener un tipo de </button>*/} 
          {/*<button onClick={()=>getAlltypespublications()}>obtener todos los tipos </button>*/} 
          {/*<button onClick={()=>updatetypespublication('9','Ensayito 2 update','este es el segundo ensayo')}>Actualizar un tipo de </button> */}
          {/*<button onClick={()=>deletetypespublication('9')}>eliminar </button> */}
        
        {/*Funciones Likes*/}
          {/*<button onClick={()=>createlike('1', '2')}>Crear un like </button>*/} 
          { /*<button onClick={()=>getlike('2')}>obtener un like</button>*/} 
          {/*<button onClick={()=>getAlllikes()}>obtener todos likes </button>*/} 
          {/*<button onClick={()=>updatelike('10','2','2')}>Actualizar like </button>*/}
          {/*<button onClick={()=>deletelike('10')}>eliminar </button> */}

                
                <Routes>
                  
                  <Route path="/" element={resul ? <VistaRedsocial/> :<VistaPrincipal/>}>
                        <Route path="/vistaPrincipal-red" element={<VistaPostRed />}></Route>
                        <Route path="/vista-ecommerce-red" element={<VistaEcommerce />}></Route>
                        <Route path="/vistaUnaPubli/:id" element={<VistaUnaPubli/>}></Route>
                        <Route path="/vista-trabajo-red" element={<VistaTrabajoRed />}></Route>
                        <Route path="/vista-config-red" element={<VistaConfigRed />}></Route>
                        <Route path="/vista-administrar-rol" element={<AdministrarUsers/>}>
                          <Route path="/vista-administrar-rol" element={<ShowAllUsers/>}></Route>
                          <Route path="/vista-administrar-rol/addUsers" element={<AddUsers/>}></Route>
                          <Route path="/vista-administrar-rol/showUser/:id" element={<ShowUser/>}></Route>
                          <Route path="/vista-administrar-rol/editUser/:id" element={<EditUser/>}></Route>
                        </Route>
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



