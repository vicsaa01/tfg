import React from "react";

import ItemIcon from "../img/test-rpg.jpg"

const ItemCard = () => {
    return(
                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="/item">
                                        <img src={ItemIcon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">The Elder Scrolls V: Skyrim</h5>
                                            <p class="card-text scrollable-p">
                                                Tipo: videojuego<br/>
                                                Géneros: aventura, acción
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">90/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
    );
};

export default ItemCard;