import React from "react";
function CardJobTrabajo(){
    return(
        <div class="card" style={{width: '18rem'}}>
            <img src={require('../../images/imageDefecto.png')}class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Título de la tarjeta</h5>
                <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
                
            </div>
        </div>
    );
}
export default CardJobTrabajo