import React from "react";
import {Link} from 'react-router-dom'
function CuentaCreada(){
    return (
            <main className="infoLogin  bg-inf rounded d-flex flex-column justify-content-center ">
                 <img src={require('../../images/creada.png')} className="infO" alt="" width="100px"/>
                        <h1 className="infO fw-bold fs-4">Su cuenta a sido creada con exito</h1>
                        <div class="input-group inputCorreo   mx-auto ">
                            <Link to="/"><button type="submit" class="btn btnIngre p-2 fw-bold">Volver</button></Link>
                        </div>
                           
                            
            </main>
    )
}
export default CuentaCreada