import React from "react";
import { Outlet } from "react-router-dom";
import CardJob from "../../componentes/comCardPostCardJobs/componenteCardJob";
import CardPost from "../../componentes/comCardPostCardJobs/componenteCardPost";


function VistaPostRed (){
    return(
        <div className="contenidoPostNotiRed  d-flex  ">
            <div className="post p-4">
                    <form action="">
                        <div className="cuadroPublicar rounded-2 p-2 d-flex"> 
                                <div className="imagePost">
                                    <label for='file-input'>
                                        <img src={require('../../images/publicar.png')} width='50px' />
                                    </label>
                                    <input id="file-input" type="file"/>
                                </div>
                                <div className="escribirElegirPu mt-1 mx-3">
                                    <input className="inputPublicar rounded-5 border-0"></input>
                                    <div className="mt-2 d-flex justify-content-between">
                                        {/* <button className="btnSB">Social</button> */}
                                        <button type="submit" className="btnSB">Publicar</button>
                                    </div>
                                </div>
                        </div>
                    </form>
                <div className="seePost mt-1">
                    <CardPost
                        imagenPublicacion={require('../../images/imageDefecto.png')}
                        imagenPerfil={require('../../images/imagenPerfil.png')}
                        nombre = 'Julian'
                        descripcion = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, eveniet tempore, id voluptatibus maiores officia odit nulla voluptas eum perferendis, incidunt quasi? Dolorum possimus consectetur placeat libero sapiente, neque mollitia.'
                    ></CardPost>
                </div>
            </div>
            <div className="noticias">
                <div className="Jobs">
                    <div id="carouselExampleIndicators" className="carousel slide p-5" data-bs-ride="true">
                        <div className="carousel-inner text-light">
                            <div className="carousel-item active">
                                <CardJob></CardJob>
                            </div>
                            <div className="carousel-item">
                                <CardJob></CardJob>
                            </div>
                            <div className="carousel-item">
                                <CardJob></CardJob>
                            </div>
                        </div>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-secondary p-1 rounded-circle" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" className="active bg-secondary p-1 rounded-circle" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" className="active bg-secondary p-1 rounded-circle" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        
    )
}
export default VistaPostRed