import React,{useState,useEffect} from "react";
import {useApiContext} from '../../../hooks/context/ApiContext'
import { Link,useParams } from "react-router-dom";
function EditUser(){
    const {updateUser}=useApiContext()

    const {getUser}=useApiContext()
  const [data, setData] = useState({
    
    name:'',
    email:'',
    password:'',
    birthdate:'',
    cc:''
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
   
     // Name
const [name, setName] = useState('');
const ChangeName = event => {
    setName(event.target.value);
};

// Email
const [email, setEmail] = useState('');
const ChangeEmail = event => {
    setEmail(event.target.value);

};
// Password
const [password, setPassword] = useState('');
const ChangePassword = event => {
    setPassword(event.target.value);

    
};
// Birthday
const [birthdate, setBirthdate] = useState('');
const ChangeBirthdate = event => {
    setBirthdate(event.target.value);
    
    
};
// Cc
const [cc, setCc] = useState('');
const ChangeCc = event => {
    setCc(event.target.value);

    
};

    return(
        <div>
             <form action="#" className="">
                <h2 className="title">Editar Usuario</h2>
               
                <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" defaultValue={data.name} onChange={ChangeName}/>
                </div>
                <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" defaultValue={data.email}onChange={ChangeEmail} />
                </div>
                <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" defaultValue={data.password} onChange={ChangePassword} />
                </div>
                <div className="input-field">
                <i class="bi bi-calendar-date-fill"></i>
                <input type="date" defaultValue={data.birthdate}onChange={ChangeBirthdate} />
                </div>
                <div className="input-field">
                <i class="bi bi-card-text"></i>
                <input type="number" defaultValue={data.cc} onChange={ChangeCc}/>
                {/* <h1>{cc}</h1> */}
                </div>
                
                <div className="main_div my-5">
                    <Link to='/vista-administrar-rol'>
                        <button className="fw-bold mx-2" >Regresar</button>
                    </Link>
                    <Link to='/vista-administrar-rol'>
                        <button className="fw-bold" onClick={()=>updateUser(id,name,email,password,birthdate,cc)} >Editar</button>
                    </Link>
                    
                </div>
            </form>
        </div>
    )
}
export default EditUser