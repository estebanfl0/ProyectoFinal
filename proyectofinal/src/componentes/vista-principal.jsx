import React from "react";

import './css/login.css';
import{Link} from'react-router-dom'
import{motion} from'framer-motion';
import { useContext } from "react";
import {useApiContext} from "../controllers/context/ApiContext";


function VistaPrincipal({onClick}) {
  const AddClick = ()=>{
    document.querySelector('.containerRed').classList.add("sign-up-mode")
}
const RemoveClick = ()=>{
    document.querySelector('.containerRed').classList.remove("sign-up-mode")
}
return(
    <motion.div className="containerRed" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
        

        <div className="forms-container">
            <div className="signin-signup">
                
            <form action="#" className="sign-in-form">
                <h2 className="title">Ingresar</h2>
                
                <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="email" placeholder="Correo"  />
                </div>
                <div className="input-field">
                <i className="fas fa-lock"></i>
                <input id="password1" type="password" placeholder="Contraseña"/>
                </div>
                <div className="main_div my-5">
                    
                <Link to='/vistaPrincipal-red'>
                    <button type="submit" classNameName="fw-bold" onClick={onClick}>Ingresar</button>
                </Link>
                </div>
                <Link to='/vista-contraseña'><p className="social-text olv">Olvidé mi contraseña</p></Link>
              
                
            </form>
            <form action="#" className="sign-up-form">
                <h2 className="title">Crear</h2>
                <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Nombre" />
                </div>
                <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Correo" />
                </div>
                <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" />
                </div>
                <div className="main_div my-5">
                
                    <button className="fw-bold">Crear</button>
                
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
