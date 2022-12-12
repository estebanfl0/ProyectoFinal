import React from "react";
import {motion} from 'framer-motion'
import { useState,useEffect } from "react";
import CardPost from "../../../componentes/comCardPostCardJobs/componenteCardPost";
import { useApiContext } from "../../../hooks/context/ApiContext";
import { useParams } from "react-router-dom";

function VistaPostPerfil(){
  const{getAllPublication,deletePublication,getOnePublication} = useApiContext()
  const [posts, setPosts] = useState([]);
  const {data,isActive} = useApiContext()
    const[role,setRole] = useState()



      useEffect(() => {
        AllPublications()
        },[]);
  
        useEffect(() => {
          if(posts.length != 0){
  
            // AllComments()
          }
        },[posts]);
  
      //   Traer publicaciones
        const AllPublications = async ()=>{
          const res = await getAllPublication()
          console.log(res.data)
          setPosts(res.data)
      }
      const borrarPost = async (id) => {
        let res = await deletePublication(id)
        if(res.res == true){
          AllPublications()
        }
      };

      

    return(
        <motion.div className="perfil-usuario-footer" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
                <div className="PostPerfil">
                  {posts.map((post)=>{
                          return(
                              <CardPost
                              key={post.id}
                              idPublicacion={post.id}
                              nombre={post.title}
                              imagenPerfil={require('../../../images/imagenPerfil.png')}
                              body={post.content}
                              fotoPerfilComenatrio={require('../../../images/imagenPerfil.png')}
                              onClick={()=>borrarPost(post.id)}
                              />
                          );
                      })}
                </div>
        </motion.div>
    )
}
export default VistaPostPerfil