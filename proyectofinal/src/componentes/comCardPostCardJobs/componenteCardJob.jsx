import React from "react";
function CardJob(){
    return(
        <div className="card border-0 cardJob mb-3">
                                    <div className="row g-0 text-dark">
                                            <div className="col-md-4">
                                                <img src={require('../../images/imageDefecto.png')} className=" rounded-start img-fluid"/>
                                            </div>
                                            <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
    )
}
export default CardJob