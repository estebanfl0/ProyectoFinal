import React from "react";
import { Link,useParams } from "react-router-dom";
import { useApiContext } from "../../../hooks/context/ApiContext";
import { useState, useEffect } from "react";

import './crud.css'
function ShowUser(){
  const {getUser}=useApiContext()
  const [data, setData] = useState({
    name:'',
    email:'',
    birthdate:'',
    cc:'',
    role:''
  });
  const {id} = useParams()

  useEffect(() => {
      getDataUser()
    }, []);
    const getDataUser = async ()=>{
      const res = await getUser(id)
    //   console.log(res.data)
      setData(res.data)
    }
    
    return(
        <div> 
            
            <div>
            <div class="cardshow">
  <div class="cardshow-border-top">
  </div>
  <div class="img">
  </div>
  <span> Name: {data.name}</span>
  <p class="job"> # {id}</p>
  <p class="job"> Correo: {data.email}  </p>
  <p class="job"> Fecha: {data.birthdate} </p>
  <p class="job"> Cedula: {data.cc} </p>
  <p class="job"> Rol: {data.role} </p>
  <Link to='/vista-administrar-rol'><button>Back
  </button></Link>
</div>
        </div>
        </div>
        
    )
}
export default ShowUser