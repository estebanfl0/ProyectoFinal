import React from "react";
import {Link} from 'react-router-dom'
function IngresarCorreo(){
    return(
        <div className="">
            <form action="#" class="sign-in-form">
                <h2 class="title">Olvidaste tu contraseña</h2>
                <img src={require('../../images/enviar-correo.gif')} className="infO" alt="" width="200px"/>
                <p className="fw-bold fs-4">Ingresa tu correo</p>
                <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Correo" />
                </div>
                <Link to='/recibir-codigo'>
                    <button className="btnOlvide mt-4">
                        <span class="box rounded" style={{backgroundColor:'#639bd050'}}>
                            Continuar
                        </span>
                    </button>
                </Link>
                
            </form>
        </div>
    )
}
export default IngresarCorreo