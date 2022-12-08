import React from "react";
import {useApiContext} from '../../../hooks/context/ApiContext'
import { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";

function ShowAllUsers(){
    const {getUser,getAllUsers,updateUser,deleteUser,createUser}=useApiContext()
    const [data, setData] = useState(null);
    // const [deleted,setDeleted] = useState(null)
    const [cargar, setCargar] = useState(false);

    useEffect(() => {
        getAlldata()
        // deleteDataUser()
      }, []);
    //   const {id} = useParams()
      const getAlldata = async ()=>{
        setCargar(true)
        const res = await getAllUsers()
        setData(res.data)
        setCargar(false)
      }
    //   const deleteDataUser = async id =>{
    //     const res = await userDelete(id)
    //     setDeleted(res.data)
    // }
    

      
  
    
    return(
        
        <div class="table-responsive">
            <Link className="btn bg-warning" to='/vista-administrar-rol/addUsers'>Add Users <i class="bi bi-person-plus-fill fs-5 lgo mx-1"></i></Link>
             <table class="table table-dark table-hover">
                <thead class="bg-dark text-light">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th className="d-none d-sm-table-cell">Correo</th>
                        <th className="d-none d-sm-table-cell">Fecha</th>
                        <th className="d-none d-sm-table-cell">Cedula</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
            {!data ? null :data.map((datas)=>{
                      return(
                        <tbody>
                            <tr>
                                <td>{datas.id}</td>
                                <td>{datas.name}</td>
                                <td className="d-none d-sm-table-cell">{datas.email}</td>
                                <td className="d-none d-sm-table-cell">{datas.birthdate}</td>
                                <td className="d-none d-sm-table-cell">{datas.cc}</td>
                                <td>{datas.role}</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-dark bg-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{width:'70px'}}>
                                            <i class="fa fa-cog"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-dark">
                                            <li><Link to={`/vista-administrar-rol/showUser/${datas.id}`} class="dropdown-item" ><i class="fa fa-search"></i> Show</Link></li>
                                            <li><Link to= {`/vista-administrar-rol/editUser/${datas.id}`} class="dropdown-item"><i class="fa fa-pen"></i> Edit</Link></li>
                                            <li><button class="dropdown-item bg-danger btn-delete" onClick={()=>deleteUser(datas.id)}><i class="fa fa-trash"></i> Delete</button></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                      );
                  }) }
            </table> 
        </div>
    )
}
export default ShowAllUsers