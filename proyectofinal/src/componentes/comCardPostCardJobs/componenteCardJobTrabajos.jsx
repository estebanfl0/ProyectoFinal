import React from "react";
function CardJobTrabajo(){
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={require('../../images/imageDefecto.png')}className="card-img-top" alt="..."/>
            <div className="card-body trb">
                <h5 className="card-title">Título de la tarjeta</h5>
                <p className="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
                
            </div>
        </div>
    );
}
export default CardJobTrabajo