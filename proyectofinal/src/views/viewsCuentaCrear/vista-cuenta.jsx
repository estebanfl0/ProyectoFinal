import React from "react";
import {Link} from 'react-router-dom';
function Cuenta(){
    return(
        <main className="infoLogin mt-2 p-4 bg-inf rounded d-flex flex-column justify-content-center ">
                            <h2 className="fs-4 fw-bold textIngre">Ingresar</h2>
                            {/* <div className="input-group">
                                <input type="text" name="text" autocomplete="off" className="input"/>
                                <label className="user-label">First Name</label>
                            </div> */}
                            <section>
                            <div div className="inputBox mt-4">
                                
                                                            <input type="text" required="required" />
                                                            <span>Correo</span>
                                                        </div>
                                                        <div div className="inputBox">
                                                            <input type="password" required="required"/>
                                                            <span>Contraseña</span>
                                                        </div>
                            </section>
                            <div class="input-group inputCorreo mt-4  mx-auto">
                                <Link to='/vistaPrincipal-red'><button type="button" class="btn btnIngre p-2 fw-bold">Entrar</button></Link>
                            </div>
                            <Link to='/vista-contraseña' class=" mt-4 fw-bold text-decoration-none">Olvidé mi contraseña</Link>
                        </main>
    )
}
export default Cuenta;