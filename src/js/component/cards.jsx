import React from "react";

export const Cards = () => {
    return (
    <div className="col col-md-6 col-lg-3 pb-4">
        <div class="card ">
            <img src="http://via.placeholder.com/500x325" class="card-img-top" alt="..."/>
            <div class="card-body p-0">
                <h5 class="card-title pt-3">Card title</h5>
                    <p class="card-text px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur placeat optio pariatur maxime nesciunt magni vero temporibus.</p>
                <div class="card-footer">
                        <a href="#" class="btn btn-primary">Find out more!</a>
                </div>
            </div>
        </div>
    </div>
            
    )
}