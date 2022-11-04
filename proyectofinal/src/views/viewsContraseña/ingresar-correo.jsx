import React from "react";
import {Link} from 'react-router-dom'
function IngresarCorreo(){
    return(
        <div className="info">
                        <h1 className="infO fw-bold">Olvidaste tu contraseña</h1>
                        <img src={require('../../images/enviar-correo.gif')} className="infO" alt="" width="300px"/>
                        <p className="infO fs-2">Ingrese su correo</p>
                        <div div className="inputBox mx-auto" style={{width:'10px'}}>  
                            <input type="text" required="required" className="inputBox "  />
                            <span>Correo</span>
                        </div>
                        <div class="input-group inputCorreo mt-1  mx-auto ">
                            <Link to="/recibir-codigo"><button type="button" class="btn btnIngre p-2 fw-bold">Enviar</button></Link>
                        </div>
                    </div>
    )
}
export default IngresarCorreo