import React from "react";
import {motion} from 'framer-motion'
function VistaPostPerfil(){
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
            Hola
        </motion.div>
    )
}
export default VistaPostPerfil