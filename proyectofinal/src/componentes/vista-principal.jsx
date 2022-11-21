import React from "react";
import './css/login.css';
import{Link} from'react-router-dom'
import{motion} from'framer-motion';

function VistaPrincipal() {
  const AddClick = ()=>{
    document.querySelector('.containerRed').classList.add("sign-up-mode")
}
const RemoveClick = ()=>{
    document.querySelector('.containerRed').classList.remove("sign-up-mode")
}
return(
    <motion.div class="containerRed" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
        <div class="forms-container">
            <div class="signin-signup">
            <form action="#" class="sign-in-form">
                <h2 class="title">Ingresar</h2>
                
                <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="email" placeholder="Correo" />
                </div>
                <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" />
                </div>
                
                <div class="main_div my-5">
                <Link to='/vistaPrincipal-red'>
                    <button className="fw-bold">Ingresar</button>
                </Link>
                </div>
                <Link to='/vista-contraseña'><p class="social-text olv">Olvidé mi contraseña</p></Link>
              
                
            </form>
            <form action="#" class="sign-up-form">
                <h2 class="title">Crear</h2>
                <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Nombre" />
                </div>
                <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Correo" />
                </div>
                <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" />
                </div>
                <div class="main_div my-5">
                
                    <button className="fw-bold">Crear</button>
                
                </div>
                
            </form>
            </div>
        </div>

        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>¿Eres nuevo?</h3>
                    <p>
                    Crea tu cuenta y haz parte de esta gran familia
                    </p>
                <button class="btn transparent w-50" id="sign-up-btn" onClick={AddClick}>
                    Crear cuenta
                </button>
                </div>
                <img src={require('../images/imageLogin.png')} class="image" alt="" />
            </div>
            <div class="panel right-panel">
            <div class="content">
                <h3>¿Ya eres uno de nosotros?</h3>
                <p>
                Ingresa a tu cuenta para que no te pierdas de todo lo que tenemos para ti
                </p>
                <button class="btn transparent w-50" id="sign-in-btn" onClick={RemoveClick}>
                Ingresar cuenta
                </button>
            </div>
            <img src={require('../images/imageCreate.png')} class="image" alt="" />
            </div>
        </div>
    </motion.div>

)
}

export default VistaPrincipal;
