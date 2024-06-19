import React from "react";

import LikeButton from "../img/like.png";

const DiscussionCard = () => {
    return(
                            <div class="scrollable-card my-card w-100 mb-2">
                                <div class="card">
                                    <div class="card-body d-flex flex-row text-left align-items-center">
                                        <div class="col-lg-8 col-md-9">
                                            <div class="row align-items-center">
                                                <a class="mr-3 mb-1" href="/discussion"><h5 class="card-title m-0 p-0">Why Skyrim is the best RPG ever</h5></a>
                                                <a class="p-1 mr-1 mb-1 rounded boton-tag" href="search.html">Skyrim</a>
                                                <a class="p-1 mr-1 mb-1 rounded boton-tag" href="search.html">Controversial</a>
                                            </div>
                                        </div>

                                        <div class="col-lg-1 col-md-1">
                                            <div class="row align-items-center">
                                                <p class="card-text m-0 mr-1 p-0">100</p>
                                                <img src={LikeButton} width="15" height="15"/>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-2">
                                            <div class="row align-items-center">
                                                <p class="card-text m-0 ml-1 p-0">Comenzada el 01/01/2023 por vic42</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
};

export default DiscussionCard;