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
    <motion.div class="containerRed" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:1}}}>
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
                <Link to='/vistaPrincipal-red'><input type="submit" value="Ingresar" class="btn solid" /></Link>
                <Link to='/vista-contraseña'><p class="social-text">Olvidé mi contraseña</p></Link>
                <p class="social-text">O ingresa con alguna de tus plataformas</p>
                <div class="social-media">
                <a href="#" class="social-icon">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                    <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                </div>
                
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
                <input type="submit" class="btn" value="Crear" />
                <p class="social-text">O crea tu cuenta con alguna de tus plataformas</p>
                <div class="social-media">
                <a href="#" class="social-icon">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                    <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                    <i class="fab fa-linkedin-in"></i>
                </a>
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
                <button class="btn transparent" id="sign-up-btn" onClick={AddClick}>
                Crear cuenta
                </button>
            </div>
            <img src="img/log.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
            <div class="content">
                <h3>¿Ya eres uno de nosotros?</h3>
                <p>
                Ingresa a tu cuenta para que no te pierdas de todo lo que tenemos para ti
                </p>
                <button class="btn transparent" id="sign-in-btn" onClick={RemoveClick}>
                Ingresar cuenta
                </button>
            </div>
            <img src="img/register.svg" class="image" alt="" />
            </div>
        </div>
    </motion.div>

)
}

export default VistaPrincipal;
