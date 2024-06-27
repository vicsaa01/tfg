import React from "react";

import ItemIcon0 from "../img/test-item-skyrim.png"
import ItemIcon1 from "../img/test-item-gta-v.png"
import NotFoundIcon from "../img/item-not-found.png"

import LikeButton from "../img/like.png";
import DislikeButton from "../img/dislike.png";

const Recommendation = (props) => {
    var item_id;
    var likes;
    var dislikes;

    if (props.id == "0") {
        item_id = "0"
        likes = 0
        dislikes = 0
    } else if (props.id == "1") {
        item_id = "1"
        likes = 0
        dislikes = 0
    }

    var title = "Ítem no encontrado :(";
    var type = "?";
    var genres = "?";
    var icon = NotFoundIcon;
    var link = "/item?id=" + item_id;

    //EXTRAER DE LA BD
    if (item_id == "0") {
        title = "The Elder Scrolls V: Skyrim";
        type = "videojuego";
        genres = "aventura, acción";
        icon = ItemIcon0;
    } else if (item_id == "1") {
        title = "Grand Theft Auto V";
        type = "videojuego";
        genres = "acción, crimen";
        icon = ItemIcon1;
    }

    return(
                                <div class="scrollable-card my-card w-100">
                                    <div class="card mb-1">
                                        <div class="card-body d-flex flex-row text-start">
                                            <div class="col-lg-3 col-md-4">
                                                <a class="btn m-0 p-0" href="/item"><img src={icon} width="80" height="80"/></a>
                                            </div>
                                            <div class="col-lg-9 col-md-8">
                                                <a href="/item"><h5 class="card-title m-0 p-0">{title}</h5></a>

                                                <div class="row mt-3">
                                                    <div class="col-lg-2 col-md-4 col-sm-6">
                                                        <p class="pt-1 ml-3 mr-1">{likes}</p>
                                                        <a class="mr-2" href=""><img src={LikeButton} width="15" height="15"/></a>
                                                    </div>

                                                    <div class="col-lg-2 col-md-4 col-sm-6">
                                                        <p class="pt-1 mr-1">{dislikes}</p>
                                                        <a class="pt-1" href=""><img src={DislikeButton} width="15" height="15"/></a>
                                                    </div>

                                                    <div class="col-lg-8 col-md-4 col-sm-0"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    );
};

export default Recommendation;