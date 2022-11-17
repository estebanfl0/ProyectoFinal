import React from "react";
import './css/login.css';
import{Link, Outlet} from'react-router-dom'
import{motion} from'framer-motion';

function VistaContraseña() {
return(
    <motion.div class="containerRed containerRedOlvide" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
        <div class="forms-container">
            <div class="signin-signup">
            <Outlet/>
            </div>
        </div>

        
    </motion.div>

)
}

export default VistaContraseña;
