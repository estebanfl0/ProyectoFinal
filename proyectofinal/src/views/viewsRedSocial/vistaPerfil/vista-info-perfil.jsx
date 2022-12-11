import React from "react";
import { useApiContext } from "../../../hooks/context/ApiContext";

import {motion} from 'framer-motion';
import { useState } from "react";
import { useEffect } from "react";
function VistaInfoPerfil(){
    
    const {data,isActive} = useApiContext()
    const[role,setRole] = useState()
    const[user,setUser] = useState({})
    useEffect(()=>{
        let res = DataValidate()
        setRole(res.role)
        setUser(res)
    },[])
    
    const DataValidate = () =>{
        if(Object.entries(data).length == 0){
            if(()=>isActive()){
                let dataUser = JSON.parse(localStorage.getItem('DataUser'))
                return dataUser
            }
        }
        return data
    }
    
    return(
        <motion.div className="perfil-usuario-footer " initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> Email: {user.email} </li>
                    <li><i className="icono fas fa-phone-alt"></i> Birthdate: {user.birthdate}</li>
                </ul>
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-marker-alt"></i> Cc: {user.cc} </li>
                    <li><i className="icono fas fa-calendar-alt"></i> Role: {role} </li>
                </ul>
            </motion.div>
    );
}
export default VistaInfoPerfil