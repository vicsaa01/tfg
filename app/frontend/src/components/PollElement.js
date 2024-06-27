import React from "react";

import ItemIcon0 from "../img/test-item-skyrim.png"
import ItemIcon1 from "../img/test-item-gta-v.png"
import NotFoundIcon from "../img/item-not-found.png"

const PollElement = (props) => {
    var item_id;
    var votes;

    if (props.position == "1") {
        item_id = "0"
        votes = 1000
    } else if (props.position == "2") {
        item_id = "1"
        votes = 500
    }

    var title = "Ítem no encontrado :(";
    var type = "?";
    var genres = "?";
    var icon = NotFoundIcon;
    var score = 0;
    var link = "/item?id=" + item_id;

    //EXTRAER DE LA BD
    if (item_id == "0") {
        title = "The Elder Scrolls V: Skyrim";
        type = "videojuego";
        genres = "aventura, acción";
        icon = ItemIcon0;
        score = 65;
    } else if (item_id == "1") {
        title = "Grand Theft Auto V";
        type = "videojuego";
        genres = "acción, crimen";
        icon = ItemIcon1;
        score = 80;
    }

    return(
                            <div class="scrollable-card my-card w-100">
                                <div class="card">
                                    <div class="card-body d-flex flex-row text-left align-items-center">
                                        <div class="col-lg-1 col-md-1">
                                            <h5 class="card-title m-0 p-0">{props.position}.</h5>
                                        </div>
                                        <div class="col-lg-2 col-md-2">
                                            <a class="btn m-0 p-0" href={link}><img src={icon} width="80" height="80"/></a>
                                        </div>
                                        <div class="col-lg-6 col-md-4">
                                            <a href={link}><h5 class="card-title m-0 p-0">{title}</h5></a>
                                        </div>
                                        <div class="col-lg-2 col-md-3"><p class="card-text m-0 p-0">{votes} votos</p></div>
                                        <div class="col-lg-1 col-md-2"><a class="btn bg-dark text-white">Votar</a></div>
                                    </div>
                                </div>
                            </div>
    );
};

export default PollElement;