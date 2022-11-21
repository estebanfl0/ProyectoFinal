import React from "react";
import { Link, Outlet } from "react-router-dom";
import{motion} from 'framer-motion';


function VistaRedsocial({nombre}){
    return(
        <div class="container-fluid bg-redS" >
        <div class="row">
            <div class="col-12 col-sm-3 col-xl-2 p-2  d-flex sticky-top bg-green">
                <div class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white ">
                    <h1 className="fs-5  text-light fw-bold"><img className="logoApp"  src={require('../images/logopagina.png')}alt="" /><span className="textApp mx-3">CoffeeApp</span></h1>
                    <ul class="nav ul nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-around align-items-center align-items-sm-start" id="menu">
                        <li class="nav-item">
                            <Link to='/vistaPrincipal-red' class="nav-link px-sm-0 px-2">
                             <i className="fs-5 bi bi-house text-light"></i><span class="ms-1 d-none d-sm-inline text-light fw-bold fs-5 li">Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-sm-0 px-2">
                            <i class="fs-5 bi bi-bell-fill text-light fs-5"></i><span class="ms-1 d-none d-sm-inline text-light fw-bold fs-5 li">Notificaciones</span> </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-sm-0 px-2">
                            <i class="fs-5 bi bi-save-fill text-light fs-5"></i><span class="ms-1 d-none d-sm-inline text-light fw-bold fs-5 li">Guardado</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-sm-0 px-2">
                            <i class=" fs-5 bi bi-sliders text-light fs-5"></i><span class="ms-1 d-none d-sm-inline text-light fw-bold fs-5 li">Configuraciones</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-sm-0 px-2">
                            <i class=" fs-5 bi bi-briefcase-fill text-light fs-5"></i><span class="ms-1 d-none d-sm-inline text-light fw-bold fs-5 li">Trabajos</span> </a>
                        </li>
                        <li>
                            <Link to='/vista-ecommerce-red' class="nav-link px-sm-0 px-2">
                            <i class=" fs-5 bi bi-briefcase-fill text-light fs-5"></i><span class="ms-1 d-none d-sm-inline text-light fw-bold fs-5 li">Tienda</span> </Link>
                        </li>
                    </ul>
                    <div class="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={require('../images/imagenPerfil.png')} alt="hugenerd" width="28" height="28" class="rounded-circle"/>
                            <span class="d-none d-sm-inline fs-5 mx-1">Joe</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><Link class="dropdown-item" to='/'>Salir</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col p-0 bg-inf h-sm-100">
                <div className="contenido d-flex flex-column ">
                    {/* <div className="noticiasCafe d-flex justify-content-evenly flex-wrap ">
                        <div className="precioCafe rounded-4 justify-content-center ">
                            <h1 className="text-center fs-5">cafe</h1>
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    100
                                    </div>
                                    <div class="carousel-item">
                                    100
                                    </div>
                                    <div class="carousel-item">
                                    100
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="precioCafe rounded-4 d-flex justify-content-center flex-column">
                            <h1 className="text-center fs-5">cafe</h1>
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    100
                                    </div>
                                    <div class="carousel-item">
                                    100
                                    </div>
                                    <div class="carousel-item">
                                    100
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div> */}
                    <div className="contenidoRed p-4">
                        <div className="subContenidoRed rounded-4">
                            <Outlet/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}
export default VistaRedsocial