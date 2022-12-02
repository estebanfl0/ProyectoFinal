import React from "react";
import { Outlet } from "react-router-dom";
import CardJob from "../../componentes/comCardPostCardJobs/componenteCardJob";
import CardPost from "../../componentes/comCardPostCardJobs/componenteCardPost";
import{motion} from'framer-motion'
import { useState, useEffect } from "react";



function VistaPostRed (){
    const [posts, setPosts] = useState([]);
    const [cargar, setCargar] = useState(true);
    const [titulo, setTitulo] = useState("");
    const [content, setCuerpoMsj] = useState("");
    const [imagen, setImage] = useState('');

  // Obtener datos con fetch API
  useEffect(() => {

    const cargarPost = async () => {
      const response = await fetch(
        "https://projectapi-production.up.railway.app/api/publication"
      );
      const data = await response.json();
      // const arrayData = []
      // data.data.forEach(element => {
      //   arrayData.push(element );
      // });
      setPosts(data.data)
      console.log(data.data)
      

      
    };
    if (cargar) {
      cargarPost();
      setCargar(false);
    }

  }, [cargar]);

//   Borrar datos con fetch API
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
  // Funcion para obtener una sola publicacion
  const getPost = async(id)=>{
    let response = await fetch(
      `https://projectapi-production.up.railway.app/api/publication/${id}`,
      {
        method: "GET"
      }
  
    );
    let data = await response.json()
    if (response.status === 200) {
      setPosts(data.data)
      console.log(data.data)
      
    } else {
      return;
    }
  }
  
  // Publicar datos con fetch API
  const agregarPosts = async (titulo, mensaje,imagen) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        image:imagen,
        title: titulo,
        content: mensaje,
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
    setImage();
  };

  // Controlador que maneja el envio del formulario
  const controladorDelEnvio = (e) => {
    e.preventDefault();
    agregarPosts(titulo, content,imagen);
  };
  
  // const [info,setInfo] = useState(false)
  // const infoCard = (id) =>{
  //   console.log(id)
  //   setInfo(true)
    
  // }
  // 
  // 
  // if(!info){
  //   alert(9)
  //   {posts.map((post) => (
      
  //     <CardPost
  //     key={post.id}
  //     src={post.image}
  //     nombre={post.title}
  //     imagenPerfil={require('../../images/imagenPerfil.png')}
  //     body={post.content}
  //     onClick={() => borrarPost(post.id)}
  //     clickEx={()=>infoCard()}
  // />
  //   ))}
  // }
 
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
                                    <input className="inputPublicar rounded-5 border-0" type='text' value={content} onChange={(e) => setCuerpoMsj(e.target.value)}/>
                                    <div className="mt-2 d-flex justify-content-between">
                                        {/* <button className="btnSB">Social</button> */}
                                        <button type="submit" className="btnSB">Publicar</button>
                                    </div>
                                </div>
                        </div>
                    </form>
                <div className="seePost mt-1 p-2">
                  {!Array.isArray(posts) ? <CardPost key={posts.id}
                              src={posts.image}
                              nombre={posts.title}
                              imagenPerfil={require('../../images/imagenPerfil.png')}
                              body={posts.content} />
                    :
                    posts.map((post)=>{
                      return(
                          <CardPost
                              key={post.id}
                              src={post.image}
                              nombre={post.title}
                              imagenPerfil={require('../../images/imagenPerfil.png')}
                              body={post.content}
                              onClick={() => borrarPost(post.id)}
                              clickEx={()=>getPost(post.id)}
                          />
                      );
                  }) 
                    
                      
                   }
                  
                    
                   
                    
                    
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