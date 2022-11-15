import React from "react";
import {Link} from 'react-router-dom'
function ContraseñaCambiada(){
    return(
        <div className="info">
                        <img src={require('../../images/megusta.gif')} className="infO" alt="" width="200px"/>
                        <h1 className="infO fw-bold">Bienvenido de nuevo</h1>
                        <div class="input-group inputCorreo mt-1  mx-auto ">
                            <Link to="/"><button type="button" class="btn btnIngre p-2 fw-bold">Enviar</button></Link>
                        </div>
                    </div>
    )
}
export default ContraseñaCambiada