import React from "react";
import { Outlet } from "react-router-dom";
function VistaRedsocial({nombre}){
    return(
        <div className="container-fluid bg-redS">
            <div className="row">
                <div className="col-1">
                    <div className="perfil m-4">
                        <h1 className="fs-5"><span><img src={require('../images/logopagina.png')}alt="" /></span>CoffeeApp</h1>
                        <img  src={require('../images/perfil.png')} alt="" />
                        <h1 className="fs-6" style={{padding:'10px 36px'}}>{nombre}</h1>
                    </div>
                    <div className="aside m-4">
                        
                        <button><img src={require('../images/carrito.png')} alt="" /></button>
                        <button className="position-relative"><img src={require('../images/notificaciones.png')} alt="" />
                            <span class="position-absolute top-0 start translate-middle badge rounded-pill bg-danger">
                            99+
                            <span class="visually-hidden">unread messages</span>
                        </span></button>
                        <button><img src={require('../images/guardado.png')} alt="" /></button>
                        <button><img src={require('../images/configuracion.png')} alt="" /></button>
                    </div>
                </div>
                <div className="col">
                    <div className="noticasCafe d-flex justify-content-center">
                        <div className="noticasCafe1 m-4">
                            <h1 className="fs-5">Cafe</h1>
                            <div id="carouselExampleControls" class="carousel slide carouselPrecio" data-bs-ride="carousel">
                                <div class="carousel-inner text-center fs-3">
                                    <div class="carousel-item active">
                                        $ 199.999
                                    </div>
                                    <div class="carousel-item">
                                        $ 199.999
                                    </div>
                                    <div class="carousel-item">
                                        $ 199.999
                                    </div>
                                </div>
                                <button class="carousel-control-prev bg-dark rounded" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next bg-dark rounded" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="noticasCafe1 m-4">
                            <h1 className="fs-5">Cafe</h1>
                                <div id="carouselExampleControls" class="carousel slide carouselPrecio" data-bs-ride="carousel">
                                    <div class="carousel-inner text-center fs-3">
                                        <div class="carousel-item active">
                                            $ 199.999
                                        </div>
                                        <div class="carousel-item">
                                            $ 199.999
                                        </div>
                                        <div class="carousel-item">
                                            $ 199.999
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev bg-dark rounded" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next bg-dark rounded" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="contenidoRedsocial mx-auto rounded-4">
                        <div className="IniComTra d-flex justify-content-around ">
                            <p className="incomtra mt-3 text-light"><span><img src={require('../images/home.png')} alt="" /></span>Inicio</p>
                            <p className="incomtra mt-3 text-light"><span><img src={require('../images/comprar.png')} alt="" /></span>Comprar</p>
                            <p className="incomtra mt-3 text-light"><span><img src={require('../images/trabajo.png')} alt="" /></span>Trabajos</p>
                        </div>
                        <Outlet />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default VistaRedsocial