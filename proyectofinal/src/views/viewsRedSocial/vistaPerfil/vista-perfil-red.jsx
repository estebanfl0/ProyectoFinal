import React from "react";
import { Link, Outlet } from "react-router-dom";
import './cssPerfil.css'
function VistaPerfil(){
    return(
        <section className="perfil-usuario">
            <div className="contenedor-perfil">
                <div className="portada-perfil" >
                    <div className="sombra"></div>
                    <div className="avatar-perfil">
                        <img src={require('../../../images/imagenPerfil.png')} alt="img"/>
                    </div>
                    <div className="datos-perfil">
                        <h4 className="titulo-usuario">Joe Ramirez</h4>
                        <p className="bio-usuario">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    </div>
                    <div className="opcciones-perfil">
                        <button type=""><i className="fas fa-wrench"></i></button>
                    </div>
                </div>
                <div className="menu-perfil">
                    <ul>
                        <li><Link to='/vista-perfil-red' title=""><i className="icono-perfil fas fa-info-circle"></i> Informacion</Link></li>
                        <li><Link to='/vista-perfil-red/vista-post-perfil'><i className="icono-perfil fas fa-bullhorn"></i> Publicaciones</Link></li>
                        <li><a href="#" title=""><i className="icono-perfil fas fa-grin"></i> Amigos 43</a></li>
                        <li><a href="#" title=""><i className="icono-perfil fas fa-camera"></i> Fotos</a></li>
                    </ul>
                </div>
                <Outlet />
                
                
        
            </div>
        </section>
    )
}
export default VistaPerfil