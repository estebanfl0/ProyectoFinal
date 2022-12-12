import React from "react";
import {motion} from 'framer-motion'
import { useState,useEffect } from "react";
import CardPost from "../../../componentes/comCardPostCardJobs/componenteCardPost";

function VistaPostPerfil(){
    
    const [posts, setPosts] = useState([]);
    const [cargar, setCargar] = useState(true);

  useEffect(() => {

    const cargarPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };
    if (cargar) {
      cargarPost();
      setCargar(false);
    }

  }, [cargar]);

    return(
        <motion.div className="perfil-usuario-footer" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
                <div className="PostPerfil">
                    
                {posts.map((post)=>{
                        return(
                            <CardPost
                                key={post.id}
                                src={post.image}
                                nombre='Barón'
                                imagenPerfil={require('../../../images/imagenPerfil.png')}
                                body={post.body}
                         
                            />
                        );
                    })}
                </div>
                   
                    
                    
                
        </motion.div>
    )
}
export default VistaPostPerfil