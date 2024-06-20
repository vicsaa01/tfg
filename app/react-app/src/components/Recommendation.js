import React from "react";

import ItemIcon from "../img/test-gatsby.jpg";
import LikeButton from "../img/like.png";
import DislikeButton from "../img/dislike.png";

const Recommendation = () => {
    return(
                                <div class="scrollable-card my-card w-100">
                                    <div class="card mb-1">
                                        <div class="card-body d-flex flex-row text-start">
                                            <div class="col-lg-3 col-md-4">
                                                <a class="btn m-0 p-0" href="/item"><img src={ItemIcon} width="80" height="120"/></a>
                                            </div>
                                            <div class="col-lg-9 col-md-8">
                                                <a href="/item"><h5 class="card-title m-0 p-0">El Gran Gatsby</h5></a>

                                                <div class="row mt-3">
                                                    <div class="col-lg-2 col-md-4 col-sm-6">
                                                        <p class="pt-1 ml-3 mr-1">80</p>
                                                        <a class="mr-2" href=""><img src={LikeButton} width="15" height="15"/></a>
                                                    </div>

                                                    <div class="col-lg-2 col-md-4 col-sm-6">
                                                        <p class="pt-1 mr-1">20</p>
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