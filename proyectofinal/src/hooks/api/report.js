import React from 'react'
import axios from "axios";


const report = (url) => {
  let apiUrl = `${url}reports/`   

  const createReport= async(reasons, publication_id)=>{
    let request = {reasons, publication_id}
    try {
      const res = await axios.post(`${apiUrl}`,request)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  const getReport = async(id)=>{
    try {
      const res = await axios.get(`${apiUrl}${id}`)
      console.log(res.data)
      return res.data 
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const getAllReports = async()=>{
    try {
      const res = await axios.get(`${apiUrl}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      return error.response.data
    }
  }
  
  const updateReport = async(id, reasons, publication_id)=>{
    let request = {reasons, publication_id}
    try {
      const res = await axios.put(`${apiUrl}${id}`,request)
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  const deleteReport = async(id)=>{
    try {
      const res = await axios.delete(`${apiUrl}${id}`)
      console.log(res.data)
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }

  return {
    createReport,
    getReport,
    updateReport,
    deleteReport,
    getAllReports,
  }
}

export default report