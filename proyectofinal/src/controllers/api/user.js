import axios from "axios";
import React,{useState, useEffect} from "react";

const User = (url) => {
    // constantes
    const apiurl = url+'user/'

    // variables para el manejo de estados
     const [data, setData] = useState(null)
     const [error,setError]=useState('')
     const [loading,setLoading]=useState(true)

    // se programa el useEffect
    useEffect(()=>{
      // createUser()
      // getUser(1)
      // getAllUsers()
      // updateUser(1)
      // deleteUser(11)
    },[])

    // funciones de llamado async
    // CREAR USUARIO <<<<name,email,password,birthdate,cc>>>
    const createUser = async()=>{
      /*aqui se utiliza fetch para guardar el usuario en la base de datos atraves de la API*/ 
      // const res = await fetch(`${apiurl}new`, {
      //           method: "POST",
      //           credentials: "same-origin",
      //           headers: {
      //             "Content-Type": "application/json",
      //           },
      //           body: JSON.stringify({
      //             name:"desde el front",
      //             email:"teste00@gmail.com",
      //             password:"12345",
      //             birthdate:"200-05-02",
      //             cc:"12775142"
      //           }),
      //         });
      //   const response = await res.json()

        const res = await axios.post(`${apiurl}new`,
        {
            name:"si se logro con axios",
            email:"selogro@gmail.com",
            password:"12345",
            birthdate:"200-05-02",
            cc:"12775172333"
        })
        console.log(res)
     }
    // VER UN USUARIO
    const getUser = async(id)=>{
      const res = await axios.get(`${apiurl}mostrar/${id}`)
      console.log(res)
    }
    // VER TODOS LOS USARIOS
    const getAllUsers = async()=>{
      const res = await axios.get(`${apiurl}all`)
      console.log(res)
    }
    //ACTUALIZAR USER 
    const updateUser = async(id)=>{
      const res = await axios.put(`${apiurl}update/${id}`,{
          name:"new url desde front",
          email:"juanito@gmail.co",
          password:"54321",
          birthdate:"1999-10-16",
          cc:"123456790"
      })
      console.log(res)
    }
    // ELIMINAR USUARIO
    const deleteUser = async(id)=>{
      const res = await axios.delete(`${apiurl}delete/${id}`)
      console.log(res)
    }

    return {
        response:data,
        error,
        loading,
        createUser, 
        getUser,
        getAllUsers,
        updateUser,
        deleteUser
     }
}

export default User 