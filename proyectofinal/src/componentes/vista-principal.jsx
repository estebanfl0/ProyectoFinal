
import React ,{useState,useRef,useEffect}from "react";
import './css/login.css';
import{Link,useNavigate,useLocation, Route, Navigate} from'react-router-dom'
import{motion} from'framer-motion';
import { useContext } from "react";
import {useApiContext} from "../hooks/context/ApiContext";
import swal from 'sweetalert'
import VistaRedsocial from "./vistaPrincipal-red";


function VistaPrincipal({onclickLogin}) {
    // Funciones de registro y entrar
  const {LoginUser,register,data,getAllUsers,resul} = useApiContext()
//   funciones de tomar los valores de los inputs

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
const [birthday, setBirthday] = useState('');
const ChangeBirthday = event => {
    setBirthday(event.target.value);
    
    
};
// Cc
const [cc, setCc] = useState('');
const ChangeCc = event => {
    setCc(event.target.value);

    
};



  const AddClick = ()=>{
    document.querySelector('.containerRed').classList.add("sign-up-mode")
}
const RemoveClick = ()=>{
    document.querySelector('.containerRed').classList.remove("sign-up-mode")
}

const someOnclicks = ()=>{
    RemoveClick();
    register(name,email,password,birthday,cc);
    
}


const click = () => {
    swal({
        title:'Wait',
        text:'The credentials are incorrects',
        icon:'error',
        button:'Try',
    });
}
// Validacion
const DelayedLink = ({ delay, replace, state, to, ...props }) => {
    const navigate = useNavigate();
    const timerRef = useRef();
  
    useEffect(() => () => clearTimeout(timerRef.current), []);
  
    const clickHandler = (e) => {
        e.preventDefault()
      timerRef.current = setTimeout(navigate, delay, to, { replace, state });
    };
   
  
    return <Link to={to} {...props} onClick={clickHandler} />;
  };

const enviarDatos = () => {
    console.log('enviando datos...' + email+ ' ' + password)
    // if(email == data.email && password == data.password){
    //     return(
    //         <VistaRedsocial/>
    //     )
    // }else{
    //     return(
    //         <VistaPrincipal/>
    //     )
    // }
    
}
const ValidacionUrl = ()=>{
    let location = useLocation()
    
    location.href('/vistaPrincipal-red')
}

const ValidationUser = async(email,password)=>{
    let res = await LoginUser(email,password)

    if(res.res === true){
        
    }else{
        return(
            click()
        )

    }
}


 
      





return(
    
    <motion.div className="containerRed" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
        

        <div className="forms-container">
            <div className="signin-signup">
                
            <form action="#" className="sign-in-form" onSubmit={enviarDatos} >
                <h2 className="title">Ingresar</h2>
                
                <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="email" placeholder="Correo" onChange={ChangeEmail}  />
                </div>
                
                <div className="input-field">
                <i className="fas fa-lock"></i>
                <input id="password1" type="password" placeholder="Contraseña"  onChange={ChangePassword}  />
                </div>
                <div className="main_div my-5">
                  
                    
                    {/* <DelayedLink delay={3000} to='/vistaPrincipal-red' onClick={()=>LoginUser(email,password)} >hhh</DelayedLink>
                    {console.log(data)} */}
                    
                    <Link to={resul === true ? '/vistaPrincipal-red' : '/' }><button onClick={()=>ValidationUser(email,password)}>Clicxk</button></Link>
                     
                     
                    
                        
                   
                    
                    {/* <button type="submit" classNameName="fw-bold" onClick={()=>ValidationUser(email,password)}>Ingresar</button> */}
                    {/* {resul === false ? 
                        
                     : password !== '' && email !==   '' ?
                    <button type="submit" classNameName="fw-bold" onClick={()=>click()}>Ingresar</button> : ''
                 } */}
                
                
                {/* <h1>{password}</h1> */}
                {/* <Link to='/vistaPrincipal-red' type="submit">
                    <button type="submit" classNameName="fw-bold" onClick={()=>LoginUser(email,password)}>Ingresar</button>
                </Link> */}
                
                </div>
                <Link to='/vista-contraseña'><p className="social-text olv">Olvidé mi contraseña</p></Link>
              
                
            </form>
            

            <form action="#" className="sign-up-form">
                <h2 className="title">Crear</h2>
                <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Nombre" onChange={ChangeName}/>
                </div>
                <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Correo" onChange={ChangeEmail} />
                </div>
                <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña"  onChange={ChangePassword} />
                </div>
                <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="date" placeholder="Cumpleaños" onChange={ChangeBirthday} />
                </div>
                <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="number" placeholder="Identificacion" onChange={ChangeCc}/>
                </div>
                <div className="main_div my-5">
                    <button type="submit" className="fw-bold" onClick={()=>someOnclicks()} >Crear</button>
                </div>
            </form>
            </div>
        </div>

        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3>¿Eres nuevo?</h3>
                    <p>
                    Crea tu cuenta y haz parte de esta gran familia
                    </p>
                <button className="btn transparent w-50" id="sign-up-btn" onClick={AddClick}>
                    Crear cuenta
                </button>
                </div>
                <img src={require('../images/imageLogin.png')} className="image" alt="" />
            </div>
            <div className="panel right-panel">
            <div className="content">
                <h3>¿Ya eres uno de nosotros?</h3>
                <p>
                Ingresa a tu cuenta para que no te pierdas de todo lo que tenemos para ti
                </p>
                <button className="btn transparent w-50" id="sign-in-btn" onClick={RemoveClick}>
                Ingresar cuenta
                </button>
            </div>
            <img src={require('../images/imageCreate.png')} className="image" alt="" />
            </div>
        </div>
        
    </motion.div>

)
}

export default VistaPrincipal;
