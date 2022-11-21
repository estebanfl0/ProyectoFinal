import React from "react";
import {motion} from 'framer-motion'
function VistaEcommerce(){
    return(
        <motion.div className="contenidoPostNotiRed  d-flex" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}} >
            <div className="post p-4">
                hola
            </div>
        </motion.div>
        
    );
}
export default VistaEcommerce