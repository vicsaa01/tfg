import React from "react";

import ItemIcon from "../img/test-rpg.jpg"

const ListCard = () => {
    return(
                            <div class="scrollable-card my-card w-100">
                                <div class="card">
                                    <a class="btn m-0 p-0" href="/list">
                                        <div class="card-body d-flex flex-row text-left">
                                            <div class="col-lg-6 col-md-3"><h5 class="card-title">Los mejores juegos RPG</h5></div>
                                            <div class="col-lg-2 col-md-3"><p class="card-text">Encuesta</p></div>
                                            <div class="col-lg-2 col-md-3"><p class="card-text">vic42</p></div>
                                            <div class="col-lg-2 col-md-3"><p class="card-text">2000000</p></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
    );
};

export default ListCard;