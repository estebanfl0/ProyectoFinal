
import React ,{useState}from "react";
import './css/login.css';
import{Link} from'react-router-dom'
import{motion} from'framer-motion';
import {useApiContext} from "../hooks/context/ApiContext";


function VistaPrincipal() {
    // Funciones de registro y entrar
    const {LoginUser,register,error} = useApiContext()
    //funciones de tomar los valores de los inputs
    // Constante para manejar el estado del input nombre
    const [name, setName] = useState('');
    // Constante para manejar el estado del input email
    const [email, setEmail] = useState('');
    // Constante para manejar el estado del input password
    const [password, setPassword] = useState('');
    // Constante para manejar el estado del input birthday
    const [birthday, setBirthday] = useState('');
    // Constante para manejar el estado del input cc
    const [cc, setCc] = useState('');


    // Funcion para obtener valor del input
    const ChangeName = event => {
        setName(event.target.value);
    };
    // Funcion para obtener valor del input
    
    const ChangeEmail = event => {
        setEmail(event.target.value);

    };
    // Funcion para obtener valor del input
    const ChangePassword = event => {
        setPassword(event.target.value);

        
    };
    // Funcion para obtener valor del input
    const ChangeBirthday = event => {
        setBirthday(event.target.value);
        
        
    };
    // Funcion para obtener valor del input
    const ChangeCc = event => {
        setCc(event.target.value);
    };
    // Funcion para cambiar a vista de registrarse
    const AddClick = ()=>{
        document.querySelector('.containerRed').classList.add("sign-up-mode")
    }
    // Funcion para cambiar a vista de ingresar
    const RemoveClick = ()=>{
        document.querySelector('.containerRed').classList.remove("sign-up-mode")
    }
    // Funcon para meter dos funciones necesarias
    const someOnclicks = ()=>{
        RemoveClick();
        register(name,email,password,birthday,cc);
        
    }
    return(
        <motion.div className="containerRed" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.2}}}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        {error &&
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong>Ups!</strong> Credenciales incorrectas
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        }
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
                            <Link to='/vistaPrincipal-red'><button onClick={()=>LoginUser(email,password)}>Ingresar</button></Link>
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
