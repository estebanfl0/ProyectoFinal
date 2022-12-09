import React from "react";
import { useApiContext } from "../../../hooks/context/ApiContext";

import {motion} from 'framer-motion';
function VistaInfoPerfil(){
    const {data} = useApiContext()
    const rol = data.role
    return(
        <motion.div className="perfil-usuario-footer d-flex" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> Email: {data.email} </li>
                    <li><i className="icono fas fa-phone-alt"></i> Birthdate: {data.birthdate}</li>
                </ul>
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-marker-alt"></i> Cc: {data.cc} </li>
                    <li><i className="icono fas fa-calendar-alt"></i> Role: {rol } </li>
                </ul>
            </motion.div>
    );
}
export default VistaInfoPerfil