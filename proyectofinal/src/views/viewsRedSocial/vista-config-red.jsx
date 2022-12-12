import React from "react";
import {motion} from 'framer-motion'
import { Link, Outlet } from "react-router-dom";
function VistaConfigRed (){
    
    return(
        <motion.div className="contenidoPostNotiRed  d-flex" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}} >
            
            <div className="container">
                <h2>Notificaciones</h2>

            <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong strong>1 Julian </strong> Le ha gustado su ultima publicacion.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            </div>
        </motion.div>

        










    );
}
export default VistaConfigRed