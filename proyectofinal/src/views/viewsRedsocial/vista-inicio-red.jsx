import React from "react";
function VistaInicioRed(){
    return(
        <div className="contenidoRedNoticias d-flex">
                            <div className="posts p-4 d-flex flex-column">
                                <div className="publicar rounded-4 p-4">
                                    <img src={require('../../images/publicar.png')}alt='' width='50px' />
                                </div>
                                <div className="cardsPost rounded-4 mt-2 p-5">
                                    <div class="card mb-5">
                                        <img src={require('../../images/imageDefecto.png')} class="card-img-top"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div class="card mb-5">
                                        <img src={require('../../images/imageDefecto.png')} class="card-img-top"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div class="card mb-5">
                                        <img src={require('../../images/imageDefecto.png')} class="card-img-top"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div class="card mb-5">
                                        <img src={require('../../images/imageDefecto.png')} class="card-img-top"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div class="card mb-5">
                                        <img src={require('../../images/imageDefecto.png')} class="card-img-top"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="noticasEmpleoNoti">
                                <div className="noticiasEmpleo m-2 rounded-4">
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="noticias m-2 rounded-4">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
    )
}
export default VistaInicioRed