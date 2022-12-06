import React,{ useState,useEffect } from "react";
import axios from "axios";


const Authentication =(url)=>{

    // login (aqui se valida las credenciales con las almacenadas en la base de datos)
    const login =async(email,password)=>{
        try {
            const res = await axios.post(`${url}login`,
            {
                email:email,
                password:password,
            })
            let token = res.data.token
            localStorage.setItem('token',token)
            return res.data            
        } catch (error) {
            return error.response.data
        }
    }
    // funcion para eliminar le token y cerrar la sesion
    const logout =async()=>{
        let token = localStorage.getItem('token')
        const headers = {
            Authorization:`Bearer ${token}`
        }

        try {
            const res = await axios.post(`${url}logout`,{},
            {headers:headers})
            localStorage.removeItem('token')
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    // funcion en donde se registra un nuevo ususario
    const register = async(name,email,password,birthdate,cc)=>{
        try {
            const res = await axios.post(`${url}register`,{
                name:name,
                email:email,
                password:password,
                birthdate:birthdate,
                cc:cc
            })
            return res.data
        } catch (error) {
            console.log(error.response.data.message)
            return error.response.data
        }
    }

    return {
        login,
        logout,
        register,
    }
}
export default Authentication 