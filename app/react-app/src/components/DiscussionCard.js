import React from "react";

import LikeButton from "../img/like.png";

const DiscussionCard = () => {
    return(
                            <div class="scrollable-card my-card w-100 mb-2">
                                <div class="card">
                                    <div class="card-body d-flex flex-row text-start align-items-center">
                                        <div class="col-9">
                                            <div class="row align-items-center">
                                                <div class="col-4"><a class="me-3 mb-1" href="/discussion"><h5 class="card-title m-0 p-0">Why Skyrim is the best RPG ever</h5></a></div>
                                                <div class="col-1"><a class="p-1 me-1 mb-1 btn rounded border boton-tag" href="/search">Skyrim</a></div>
                                                <div class="col-1"><a class="p-1 me-1 mb-1 btn rounded border boton-tag" href="/search">Controversial</a></div>
                                            </div>
                                        </div>

                                        <div class="col-1">
                                            <div class="row align-items-center">
                                                <p class="card-text m-0 mr-1 p-0">100</p>
                                                <div class="col"><img src={LikeButton} width="15" height="15"/></div>
                                            </div>
                                        </div>

                                        <div class="col-2">
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