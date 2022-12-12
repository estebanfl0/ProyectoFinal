import React from "react";
import { Link, Outlet } from "react-router-dom";
import './cssPerfil.css'
import { useApiContext } from "../../../hooks/context/ApiContext";
function VistaPerfil(){
    const {data} = useApiContext()
    return(
        <section className="perfil-usuario">
            <div className="contenedor-perfil">
                <div className="portada-perfil" >
                    <div className="sombra"></div>
                    <div className="avatar-perfil">
                        <img src={require('../../../images/imagenPerfil.png')} className='imgPerfil' alt="img"/>
                    </div>
                    <div className="datos-perfil">
                        <h4 className="titulo-usuario">{data.name}</h4>
                    </div>
                    <div className="opcciones-perfil">
                        <Link to={`/vista-administrar-rol/editUser/${data.id}`} >
                            <button type=""><i className="fas fa-wrench"></i></button>
                        </Link>
                    </div>
                </div>
                <div className="menu-perfil">
                </div>
                <div className="p-5">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}
export default VistaPerfil