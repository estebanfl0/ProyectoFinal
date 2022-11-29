import React from "react";
import {motion} from 'framer-motion'
import { useState,useEffect } from "react";
function VistaPostPerfil(){
    const [cargar, setCargar] = useState(true);
    // Obtener datos con fetch API
  useEffect(() => {

    const cargarPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      console.log(data);
      
    };
    if (cargar) {
      cargarPost();
      setCargar(false);
    }

  }, [cargar]);
    return(
        <motion.div className="" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
                Publicaciones
        </motion.div>
    )
}
export default VistaPostPerfil