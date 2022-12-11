import React from "react";
import {motion} from 'framer-motion';
import CardJobTrabajo from "../../componentes/comCardPostCardJobs/componenteCardJobTrabajos";
function VistaTrabajoRed(){
    return(
        <motion.div className="contenidoPostNotiRed  d-flex" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}} >
            <div className="post p-4 d-flex flex-wrap">
                <div className="d-flex  flex-wrap gap-2 CardJobTrabajo" style={{height:'92vh',overflowY:'auto',width:'100%'}}>
                   <CardJobTrabajo/>
                </div>
            </div>
        </motion.div>
    );
}
export default VistaTrabajoRed