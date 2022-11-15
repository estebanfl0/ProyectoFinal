import React from "react";
import{Link} from 'react-router-dom'
function CmabiarContraseña(){
    return(
        <div className="info">
                        <h1 className="infO fw-bold">Usa una contraseña fuerte</h1>
                        <img src={require('../../images/unlocked.gif')} className="infO" alt="" width="200px"/>
                        
                        <div className="inputBox mx-auto">
                                
                                                            <input type="text" required="required" />
                                                            <span>Nueva contraseña</span>
                                                        </div>
                                                        <div className="inputBox mx-auto">
                                
                                                            <input type="text" required="required" />
                                                            <span>Confirmar contraseña</span>
                                                        </div>
                        <div class="input-group inputCorreo mt-1  mx-auto ">
                            <Link to="/contraseña-cambiada"><button type="button" class="btn btnIngre p-2 fw-bold">Cambiar contraseña</button></Link>
                        </div>
                    </div>
    )
}
export default CmabiarContraseña