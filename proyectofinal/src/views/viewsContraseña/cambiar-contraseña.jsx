import React from "react";
import{Link} from 'react-router-dom'
function CmabiarContraseña(){
    return(
        <div className="info">
                        <h1 className="infO fw-bold">Usa una contraseña fuerte</h1>
                        <img src={require('../../images/unlocked.gif')} className="infO" alt="" width="300px"/>
                        
                        <div div className="inputBox mx-auto" style={{width:'10px'}}>  
                            <input type="text" required="required" className="inputBox "  />
                            <span>Nueva contraseña</span>
                        </div>
                        <div div className="inputBox mx-auto" style={{width:'10px'}}>  
                            <input type="text" required="required" className="inputBox "  />
                            <span>Confirmar contraseña</span>
                        </div>
                        <div class="input-group inputCorreo mt-1  mx-auto ">
                            <Link to="/contraseña-cambiada"><button type="button" class="btn btnIngre p-2 fw-bold">Cambiar contraseña</button></Link>
                        </div>
                    </div>
    )
}
export default CmabiarContraseña