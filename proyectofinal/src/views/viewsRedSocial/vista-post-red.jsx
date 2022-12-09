import React from "react";
import { Link, Outlet } from "react-router-dom";
import CardJob from "../../componentes/comCardPostCardJobs/componenteCardJob";
import CardPost from "../../componentes/comCardPostCardJobs/componenteCardPost";
import{motion} from'framer-motion'
import { useState, useEffect } from "react";
import{useApiContext} from '../../hooks/context/ApiContext'



function VistaPostRed (){
  // const [posts, setPosts] = useState([]);
  // const [cargar, setCargar] = useState(true);
  // const [titulo, setTitulo] = useState("");
  // const [cuerpoMsj, setCuerpoMsj] = useState("");
  //   const [imagen, setImage] = useState('');
    const {getAllPublication,getComment,createComment,getAllComment,getOnePublication,createPublication,updatePublication,deletePublication} = useApiContext()
  //   const [data, setData] = useState(null);
  //   const [comments,setComments] = useState([]);

    
    // //   Traer comentarios
    // const AllComments = async ()=>{
    //     const res = await getComment('1')
    //     setComments(res.data)
    //     console.log(comments)
        
    // }
    // console.log(comments)
    // console.log(comments.id)

    // Crear un comentario
    // const [comentarioPost, setComentarioPost] = useState('');
    //   const ChangeComentario = event => {
    //     setComentarioPost(event.target.value);
    //     // console.log(comentarioPost)
    //   };
 

    



  // Obtener datos con fetch API
  

  // Borrar datos con fetch API
  // const borrarPost = async (id) => {
  //   let response = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${id}`,
  //     {
  //       method: "DELETE"
  //     }
  //   );
  //   if (response.status === 200) {
  //     setPosts(
  //       posts.filter((post) => {
  //         return post.id !== id;
  //       })
  //     );
  //   } else {
  //     return;
  //   }
  // };
  // Funcion para obtener una sola publicacion
  

  
  // Publicar datos con fetch API
  // const agregarPosts = async (titulo, mensaje) => {
  //   let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     content: JSON.stringify({
  //       title: titulo,
  //       content: mensaje,
  //       userId: Math.random().toString(36).slice(2)
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8"
  //     }
  //   });
  //   let data = await response.json();
  //   setPosts((posts) => [data, ...posts]);
  //   setTitulo("");
  //   setCuerpoMsj("");
  // };

  // // // Controlador que maneja el envio del formulario
  // const controladorDelEnvio = (e) => {
  //   e.preventDefault();
  //   agregarPosts(titulo, cuerpoMsj);
  // };

  // const [info,setInfo] = useState(false)
  // const infoCard = (id) =>{
  //   console.log(id)
  //   setInfo(true)
    
  // }
  
  
  // if(!info){
    
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

  // const getPost = async(id)=>{
  //   let response = await fetch(
  //     `https://projectapi-production.up.railway.app/api/publication/${id}`,
  //     {
  //       method: "GET"
  //     }
  
  //   );
  //   let data = await response.json()
  //   if (response.status === 200) {
  //     setPosts(data.data)
  //     console.log(data.data)
      
  //   } else {
  //     return;
  //   }
  // }
  const [posts, setPosts] = useState([]);
  const [cargar, setCargar] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [cuerpoMsj, setCuerpoMsj] = useState("");

  // Obtener datos con fetch API


const [comments,setComments] = useState('');

    useEffect(() => {
        AllPublication()
        AllComments()
      },[]);
    //   Traer publicaciones
      const AllPublication = async ()=>{
        const res = await getAllPublication()
        setPosts(res.data)
    }
    //   Traer comentarios
    const AllComments = async ()=>{
        const res = await getComment('1')
        setComments(res.data)
        
    }
    // console.log(comments)
    // console.log(comments.id)

    // Crear un comentario
    const [comentarioPost, setComentarioPost] = useState('');
      const ChangeComentario = event => {
        setComentarioPost(event.target.value);
        // console.log(comentarioPost)
      };
  // useEffect(() => {

  //   const cargarPost = async () => {
  //     const response = await fetch(
  //       "https://projectapi-production.up.railway.app/api/publication"
  //     );
  //     const data = await response.json();
  //     // const arrayData = []
  //     // data.data.forEach(element => {
  //     //   arrayData.push(element );
  //     // });
  //     setPosts(data.data)
  //     console.log(data.data)
      

      
  //   };
  //   if (cargar) {
  //     cargarPost();
  //     setCargar(false);
  //   }

  // }, [cargar]);
  // useEffect(() => {

  //   const cargarPost = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setPosts(data);
  //   };
  //   if (cargar) {
  //     cargarPost();
  //     setCargar(false);
  //   }

  // }, [cargar]);

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
  const agregarPosts = async (titulo, mensaje) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
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
  };

  // Controlador que maneja el envio del formulario
  const controladorDelEnvio = (e) => {
    e.preventDefault();
    agregarPosts(titulo, cuerpoMsj);
  };

 
    return(
        <motion.div className="contenidoPostNotiRed  d-flex" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}} >
            <div className="post p-4">
                    <form action="" onSubmit={controladorDelEnvio} > 
                        <div className="cuadroPublicar rounded-2 p-2 d-flex"> 
                                <div className="imagePost">
                                    <label for='file-input'>
                                        <img src={require('../../images/publicar.png')} width='50px' />
                                    </label>
                                    <input id="file-input" type="file"/>
                                </div>
                                <div className="escribirElegirPu mt-1 mx-3">
                                    <input className="inputPublicar rounded-5 border-0" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                                    <input className="inputPublicar rounded-5 mt-2 border-0" type='text'value={cuerpoMsj} onChange={(e) => setCuerpoMsj(e.target.value)}/> 
                                    <div className="mt-2 d-flex justify-content-between">
                                        <button type="submit" className="btnSB">Publicar</button>
                                    </div>
                                </div>
                        </div>
                    </form>
                <div className="seePost mt-1 p-2">
                {posts.map((post) => {
          return (
            <CardPost
                              key={post.id}
                              idPublicacion={post.id}
                              nombre={post.title}
                              imagenPerfil={require('../../images/imagenPerfil.png')}
                              clickEx={()=>getOnePublication(post.id)}
                              body={post.content}
                              fotoPerfilComenatrio={require('../../images/imagenPerfil.png')}
                              keyComent={post.id}
                              nombreComentario={comments.user_id}
                              comentario={comments.content}
                              ChangeComentario1={ChangeComentario}
                              crearComentario={()=> createComment('1','4',comentarioPost)}
                              onClick={()=>borrarPost(post.id)}
                          />
          );
        })}



               
          
            
                
            
                {/* {!data ? null : data.map((datas)=>{
                      return(
                        <CardPost
                              key={datas.id}
                              src={datas.image}
                              nombre={datas.title}
                              imagenPerfil={require('../../images/imagenPerfil.png')}
                              body={datas.content}
                              fotoPerfilComenatrio={require('../../images/imagenPerfil.png')}
                              keyComent={datas.id}
                              onClick={()=>borrarPost(datas.id)}
                              ChangeComentario1={ChangeComentario}
                              crearComentario={()=> createComment('1','4',comentarioPost)}
                          />
                      );
                  }) } */}
                  {/* {comments.map((comment)=>{
                    return(
                        <h1>{comment.id}</h1>
                    )
                  })} */}
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