import React from "react";

import ItemIcon from "../img/test-item-lebowski.jpg";
import NotFoundIcon from "../img/item-not-found.png"

const SearchCard = (props) => {
    //DEPENDE DE LO QUE ESTÉ BUSCANDO
    var title = "Ítem no encontrado :(";
    var year = "?";
    var directors = "?";
    var icon = NotFoundIcon;

    //EXTRAER DE LA BD
    if (props.id == "2") {
        title = "El Gran Lebowski";
        year = "1998";
        directors = "Joel Coen, Ethan Coen";
        icon = ItemIcon;
    }

    var link = "/item?id=" + props.id;
    
    return(
                            <div class="scrollable-card my-card w-100">
                                <div class="card mb-1">
                                    <div class="card-body d-flex flex-row text-left">
                                        <div class="col-lg-2 col-md-3">
                                            <a class="btn m-0 p-0" href={link}><img src={icon} width="120" height="180"/></a>
                                        </div>
                                        <div class="col-lg-10 col-md-9">
                                            <a href={link}>
                                                <h5 class="card-title m-0 p-0">{title}</h5>
                                            </a>
                                            <p class="mt-4">Año: {year}</p>
                                            <p>Dirigida por: {directors}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
};

export default SearchCard;