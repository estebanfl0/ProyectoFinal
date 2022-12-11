import React from "react";
import { Link, Outlet } from "react-router-dom";
import CardJob from "../../componentes/comCardPostCardJobs/componenteCardJob";
import CardPost from "../../componentes/comCardPostCardJobs/componenteCardPost";
import{motion} from'framer-motion'
import { useState, useEffect } from "react";
import{useApiContext} from '../../hooks/context/ApiContext'



function VistaPostRed (){

  const {getAllPublication,getComment,createComment,getAllComment,getOnePublication,createPublication,updatePublication,deletePublication} = useApiContext()

  const {data,isActive} = useApiContext()
  const [user,setUser] = useState({})
  const [posts, setPosts] = useState([]);
  const [cargar, setCargar] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [cuerpoMsj, setCuerpoMsj] = useState("");

  // Obtener datos con fetch API


  const [comments,setComments] = useState('');

    useEffect(() => {
        AllPublication()
      },[]);

      useEffect(() => {
        if(posts.length != 0){

          // AllComments()
        }
      },[posts]);

    //   Traer publicaciones
      const AllPublication = async ()=>{
        const res = await getAllPublication()
        setPosts(res.data)
    }
    //   Traer comentarios
    
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
    let res = await deletePublication(id)
    if(res.res == true){
      // AllComments()
      AllPublication()
    }
  };
  // Publicar datos con fetch API
    
    useEffect(()=>{
      
      if(Object.entries(data).length == 0){
          if(()=>isActive()){

              let dataUser = JSON.parse(localStorage.getItem('DataUser'))
              setUser(dataUser)
          }
      }else{

          setUser(data)
      }
      console.log(user)
      
  },[])

    const[error,setError] = useState(false)
  const agregarPosts = async  (titulo, mensaje) => {
    let data = await createPublication(user.id,titulo,mensaje)
    if(data.res == true){
      AllPublication()
      // AllComments()
      
    }else{
      setError(true)
    }
    setTitulo("");
    setCuerpoMsj("");
  };

  // Controlador que maneja el envio del formulario
  const controladorDelEnvio = (e) => {
    e.preventDefault();
    
    // let res = createPublication(user.id,titulo,cuerpoMsj)
    // if(res.res == true){

    // }
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
                        {error &&
                          <p>Error al publicar</p>
                          }
                    </form>
                    
                <div className="seePost mt-1 p-2">
                {posts.map((post) => {
          return (
            <CardPost
                              key={post.id}
                              idPublicacion={post.id}
                              nombre={post.title}
                              imagenPerfil={require('../../images/imagenPerfil.png')}
                              body={post.content}
                              fotoPerfilComenatrio={require('../../images/imagenPerfil.png')}
                              
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