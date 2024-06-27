import React from "react";

const ListCard = (props) => {
    var name = "List not found";
    var type;
    var creator;
    var views = 0;

    //EXTRAER DE LA BD
    if (props.id == "0") {
        name = "Los mejores juegos RPG";
        type = "Encuesta";
        creator = "vic42";
        views = 5000;
    } else if (props.id == "1") {
        name = "My favorite movies of all time";
        type = "Clasificación";
        creator = "theDude";
        views = 1000;
    }

    var link = "/list?id=" + props.id;

    return(
                            <div class="scrollable-card my-card w-100">
                                <div class="card">
                                    <a class="btn m-0 p-0" href={link}>
                                        <div class="card-body d-flex flex-row text-start">
                                            <div class="col-lg-6 col-md-3"><h5 class="card-title">{name}</h5></div>
                                            <div class="col-lg-2 col-md-3"><p class="card-text">{type}</p></div>
                                            <div class="col-lg-2 col-md-3"><p class="card-text">{creator}</p></div>
                                            <div class="col-lg-2 col-md-3"><p class="card-text">{views}</p></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
    );
};

export default ListCard;