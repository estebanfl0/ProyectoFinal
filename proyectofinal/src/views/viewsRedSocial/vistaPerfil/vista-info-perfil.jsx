import React from "react";
import {motion} from 'framer-motion';
function VistaInfoPerfil(){
    return(
        <motion.div className="perfil-usuario-footer" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> Direccion de usuario: </li>
                    <li><i className="icono fas fa-phone-alt"></i> Telefono:</li>
                    <li><i className="icono fas fa-briefcase"></i> Trabaja en.</li>
                    <li><i className="icono fas fa-building"></i> Cargo</li>
                </ul>
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-marker-alt"></i> Ubicacion.</li>
                    <li><i className="icono fas fa-calendar-alt"></i> Fecha nacimiento.</li>
                    <li><i className="icono fas fa-user-check"></i> Registro.</li>
                    <li><i className="icono fas fa-share-alt"></i> Redes sociales.</li>
                </ul>
            </motion.div>
    );
}
export default VistaInfoPerfil