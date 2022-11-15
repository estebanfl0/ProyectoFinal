import React from "react";
import { Link } from "react-router-dom";
function RecibirCodigo(){
    return(
        <div className="info">
                        <h1 className="infO fw-bold">Verificacion</h1>
                        <img src={require('../../images/recibirCodigo.gif')} className="infO" alt="" width="200px"/>
                        <p className="infO fs-2">Ingrese el codigo mandado a su correo</p>
                        <div className="inputBox mx-auto">
                                
                                                            <input type="text" required="required" />
                                                            <span>Correo</span>
                                                        </div>
                        <div class="input-group inputCorreo mt-1  mx-auto ">
                            <Link to="/cambiar-contraseña"><button type="button" class="btn btnIngre p-2 fw-bold">Enviar</button></Link>
                        </div>
                    </div>
    )
}
export default RecibirCodigo