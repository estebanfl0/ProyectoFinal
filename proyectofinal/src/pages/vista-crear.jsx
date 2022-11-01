import React from "react";
function Crear(){
    return (
            <main className="infoLogin mt-2 p-4 bg-inf rounded d-flex flex-column justify-content-center ">
                 <h2 className="fs-4 fw-bold textIngre">Cree su cuenta</h2>
                            <section>
                                <div class="input-group mt-3 select ">
                                    <label class="input-group-text" for="inputGroupSelect01">Opciones</label>
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option selected>Sleccione su rol</option>
                                        <option value="1">Empleado</option>
                                        <option value="2">Empleador</option>
                                    </select>
                                </div>
                                <div className="nombreApellido d-flex inputCorreo">
                                   <input className="form-control  " type="text" placeholder="Nombre" />
                                   <input className="form-control " type="text" placeholder="Apellido" />
                                </div>
                                <div className="inputBox">
                                    <input type="text" required="required" />
                                    <span>Correo</span>
                                </div>
                                <div className="inputBox">
                                    <input type="password" required="required"/>
                                    <span>Contraseña</span>
                                </div>
                                <div className="inputBox">
                                    <input type="password" required="required"/>
                                    <span>Confirmar contraseña</span>
                                </div>
                                
                            </section>
                            <div class="input-group inputCorreo mt-4  mx-auto">
                                <button type="button" class="btn btnIngre p-2 fw-bold">Crear</button>
                            </div>
                           
                            
            </main>
    )
}
export default Crear