import React from "react";
import {Link} from 'react-router-dom'
function ContraseñaCambiada(){
    return(
        
            <div className="">
            <form action="#" class="sign-in-form">
                <h2 class="title">Bienvenido de nuevo</h2>
                <img src={require('../../images/megusta.gif')} className="infO mt-1" alt="" width="200px"/>
                <Link to='/'>
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
export default ContraseñaCambiada