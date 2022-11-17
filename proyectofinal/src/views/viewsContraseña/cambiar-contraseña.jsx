import React from "react";
import{Link} from 'react-router-dom'
function CmabiarContraseña(){
    return(
        
        <div className="">
            <form action="#" class="sign-in-form">
                <h2 class="title">Usa una contraseña fuerte</h2>
                <img src={require('../../images/unlocked.gif')} className="infO" alt="" width="200px"/>
                
                <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Nueva contraseña" />
                </div>
                <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Confirmar contraseña" />
                </div>
                <Link to='/contraseña-cambiada'>
                    <button className="btnOlvide mt-4 ">
                        <span class="box rounded w-100" style={{backgroundColor:'#639bd050'}}>
                            Cambiar contraseña
                        </span>
                    </button>
                </Link>
                
                
            </form>
        </div>
    )                
}
export default CmabiarContraseña