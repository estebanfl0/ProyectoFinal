import React from "react";
import './css/login.css';
import{Link, Outlet} from'react-router-dom'


function VistaContraseña() {
return(
    <div class="containerRed containerRedOlvide" >
        <div class="forms-container">
            <div class="signin-signup">
            <Outlet/>
            </div>
        </div>
        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                   <h3>Ni tú, ni yo ni nadie golpea tan fuerte como la vida. Pero no importa qué tan duro lo hagas. Importa lo duro que resistas.</h3>
                </div>
                <img className="image" src={require('../images/muñeco.png')}  style={{width:'400px'}}/>
            </div>
            
        </div>
       

        

        
    </div>

)
}

export default VistaContraseña;
