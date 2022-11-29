import React from "react";
import { Outlet } from "react-router-dom";
import CardJob from "../../componentes/comCardPostCardJobs/componenteCardJob";
import CardPost from "../../componentes/comCardPostCardJobs/componenteCardPost";
import{motion} from'framer-motion'
import { useState, useEffect } from "react";
import { useContext } from "react";
import ExampleContext from "../../controllers/context/ExampleContext";



function VistaPostRed (){
    const [posts, setPosts] = useState([]);
    const [cargar, setCargar] = useState(true);
    const [titulo, setTitulo] = useState("");
    const [cuerpoMsj, setCuerpoMsj] = useState("");
    const [imagen, setImage] = useState('');

  // Obtener datos con fetch API
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

  // Borrar datos con fetch API
  const borrarPost = async (id) => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE"
      }
    );
    if (response.status === 200) {
      setPosts(
        posts.filter((post) => {
          return post.id !== id;
        })
      );
    } else {
      return;
    }
  };
  // Publicar datos con fetch API
  const agregarPosts = async (titulo, mensaje,imagen) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        image:imagen,
        title: titulo,
        body: mensaje,
        userId: Math.random().toString(36).slice(2)
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    let data = await response.json();
    setPosts((posts) => [data, ...posts]);
    setTitulo("");
    setCuerpoMsj("");
    setImage("");
  };

  // Controlador que maneja el envio del formulario
  const controladorDelEnvio = (e) => {
    e.preventDefault();
    agregarPosts(titulo, cuerpoMsj,imagen);
  };
    return(
        <motion.div className="contenidoPostNotiRed  d-flex" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}} >
            <div className="post p-4">
                    <form action="" onSubmit={controladorDelEnvio}>
                        <div className="cuadroPublicar rounded-2 p-2 d-flex"> 
                                <div className="imagePost">
                                    <label for='file-input'>
                                        <img src={require('../../images/publicar.png')} width='50px' />
                                    </label>
                                    <input id="file-input" type="file" value={imagen} onChange={(e) => setImage(e.target.value)}/>
                                </div>
                                <div className="escribirElegirPu mt-1 mx-3">
                                    <input className="inputPublicar rounded-5 border-0" type='text' value={cuerpoMsj} onChange={(e) => setCuerpoMsj(e.target.value)}/>
                                    <div className="mt-2 d-flex justify-content-between">
                                        {/* <button className="btnSB">Social</button> */}
                                        <button type="submit" className="btnSB">Publicar</button>
                                    </div>
                                </div>
                        </div>
                    </form>
                <div className="seePost mt-1 p-2">
                    {posts.map((post)=>{
                        return(
                            <CardPost
                                key={post.id}
                                src={post.image}
                                nombre='Barón'
                                imagenPerfil={require('../../images/imagenPerfil.png')}
                                body={post.body}
                                onClick={() => borrarPost(post.id)}
                            />
                        );
                    })}
                   
                    
                    
                </div>
            </div>
            <div className="noticias">
                <div className="Jobs">
                    
                </div>
               
            </div>
        </motion.div>
        
    )
}
export default VistaPostRed