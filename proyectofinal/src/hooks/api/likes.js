import React, { useEffect, useState } from 'react'
import axios from "axios";


const Like = (url) => {
  let apiUrl = `${url}like/`   

  const createlike= async(user_id, publication_id)=>{
    let request = {user_id, publication_id}
    try {
      const res = await axios.post(`${apiUrl}`,request)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }//YA

  const getlike = async(id)=>{
    try {
      const res = await axios.get(`${apiUrl}${id}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
    }
  }
  
  const getAlllikes = async()=>{
    try {
      const res = await axios.get(`${apiUrl}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      return error.response.data
    }
  }
  
  const updatelike = async(id, user_id, publication_id)=>{
    let request = {user_id, publication_id}
    try {
      const res = await axios.put(`${apiUrl}${id}`,request)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  const deletelike = async(id)=>{
    try {
      const res = await axios.delete(`${apiUrl}${id}`)
      console.log(res.data)
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  return {
    createlike,
    getlike,
    updatelike,
    deletelike,
    getAlllikes,
  }
}

export default Like