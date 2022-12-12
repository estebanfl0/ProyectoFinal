import React from 'react'
import axios from "axios";


const publicaciones = (url) => {
  const apiUrl = `${url}publication/`

  const getAllPublication = async()=>{
    try {
        const res = await axios.get(apiUrl)
        return res.data
    } catch (error) {
        return error.response.data        
    }
  }

  const  getOnePublication = async(id)=>{
    try {
        const res = await axios.get(apiUrl+id)
        return res.data
    } catch (error) {
        return error.response.data
    }
  }

  const createPublication = async(id,title,content, image, type_publication_id)=>{
    let request = {title,content,user_id:id, image, type_publication_id}
    try {
      const res = await axios.post(`${apiUrl}new`,request)
      return res.data
    } catch (error) {
      return error.response.data 
    }
  }

  const updatePublication = async(id,id_publication,title,content, image, type_publication_id)=>{
    let request = {title,content,user_id:id, image, type_publication_id}
    try {
      const res = await axios.put(`${apiUrl}update/${id_publication}`,request)
      return res.data
    } catch (error) {
      return error.response.data
    }
  }

  const deletePublication = async(id_publication)=>{
    try {
      const res = await axios.delete(`${apiUrl}delete/${id_publication}`)
      return res.data
    } catch (error) {
      return error.response.data
    }
  }

  return {
    getAllPublication,
    getOnePublication,
    createPublication,
    updatePublication,
    deletePublication,
  }
}

export default publicaciones