import React from "react";
import {motion} from 'framer-motion'
import CardEcommerce from "../../componentes/card-ecommerce";
function VistaEcommerce(){
    return(
        <motion.div className="contenidoPostNotiRed  d-flex" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}} >
            <div className="post p-4">
                <div className="postEcommerce">
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                    <CardEcommerce/>
                </div>
            </div>
        </motion.div>
        
    );
}
export default VistaEcommerce
