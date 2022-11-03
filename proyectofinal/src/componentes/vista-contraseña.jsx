import React from "react";
import './css/login.css';

import{Link, Outlet} from 'react-router-dom';
function VistaContraseña(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col gris justify-content-center items-center self-center d-flex">
                    <h1 className=" text-tittle text-white "><span><img src="https://cdn-icons-png.flaticon.com/512/3054/3054889.png" width="100px" /> </span>CofeeApp</h1>
                </div>
                <div className="col d-flex flex-column justify-content-center text-center">
                    <Outlet />
                </div>
            </div>
            
        </div>
        
    )
}
export default VistaContraseña;

