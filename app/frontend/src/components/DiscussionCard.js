import React from "react";

import LikeButton from "../img/like.png";

const DiscussionCard = (props) => {
    var title;
    var tags = [];
    var likes;
    var date;
    var creator;

    if (props.id=="0"){
        title = "Why Skyrim is the best RPG ever";
        tags = ["Skyrim", "Controversial"];
        likes = 100;
        date = "01/01/2024"
        creator = "vic42";
    } else if (props.id=="1"){
        title = "What are some interesting GTA cheats?";
        tags = ["GTA", "Funny"];
        likes = 50;
        date = "01/04/2024"
        creator = "theDude";
    }

    var link = "/discussion?id=" + props.id;

    return(
                            <div class="scrollable-card my-card w-100 mb-2">
                                <div class="card">
                                    <div class="card-body d-flex flex-row text-start align-items-center">
                                        <div class="col-9">
                                            <div class="row align-items-center">
                                                <div class="col-4"><a class="me-3 mb-1" href={link}><h5 class="card-title m-0 p-0">{title}</h5></a></div>
                                                <div class="col-1"><a class="p-1 me-1 mb-1 btn rounded border boton-tag" href="/search">{tags[0]}</a></div>
                                                <div class="col-1"><a class="p-1 me-1 mb-1 btn rounded border boton-tag" href="/search">{tags[1]}</a></div>
                                            </div>
                                        </div>

                                        <div class="col-1">
                                            <div class="row align-items-center">
                                                <p class="card-text m-0 mr-1 p-0">{likes}</p>
                                                <div class="col"><img src={LikeButton} width="15" height="15"/></div>
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <div class="row align-items-center">
                                                <p class="card-text m-0 ml-1 p-0">Comenzada el {date} por {creator}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
};

export default DiscussionCard;