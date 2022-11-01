import React from "react";
import './css/login.css';
import{Link, Outlet} from 'react-router-dom';
function VistaPrincipal(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col right verde  d-flex flex-column justify-content-center ">
                    <div className="image ">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="https://cdn-icons-png.flaticon.com/512/3054/3054889.png" class="d-block " width="500px"/>
                                </div>
                                <div class="carousel-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/3054/3054889.png" class="d-block " width="500px"/>
                                </div>
                                <div class="carousel-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/3054/3054889.png" class="d-block " width="500px"/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                    </div>
                </div>
                <div className="col left">
                    <div className="content  mt-4 d-flex flex-column text-center">
                        <h1 className="fs-3 fw-bold tittle-login-name"><span><img src="https://cdn-icons-png.flaticon.com/512/3054/3054889.png" width="50px" /></span>CoffeApp</h1>
                        <nav className="ingresar-crear d-flex justify-content-around mt-5">
                            <Link to='/' className="cuentaLogin fs-4 fw-bold text-dark text-decoration-none">Cuenta</Link>
                            <Link to='/vista-crear' className="fs-4 text-muted text-decoration-none">Crear cuenta</Link>
                        </nav>
                        <Outlet />
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
export default VistaPrincipal;

