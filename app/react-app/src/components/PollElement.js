import React from "react";

import ItemIcon from "../img/test-rpg.jpg";

const PollElement = () => {
    return(
                            <div class="scrollable-card my-card w-100">
                                <div class="card">
                                    <div class="card-body d-flex flex-row text-left align-items-center">
                                        <div class="col-lg-1 col-md-1">
                                            <h5 class="card-title m-0 p-0">1.</h5>
                                        </div>
                                        <div class="col-lg-2 col-md-2">
                                            <a class="btn m-0 p-0" href="/item"><img src={ItemIcon} width="80" height="80"/></a>
                                        </div>
                                        <div class="col-lg-6 col-md-4">
                                            <a href="/item"><h5 class="card-title m-0 p-0">The Elder Scrolls V: Skyrim</h5></a>
                                        </div>
                                        <div class="col-lg-2 col-md-3"><p class="card-text m-0 p-0">1000 votos</p></div>
                                        <div class="col-lg-1 col-md-2"><a class="btn bg-dark text-white">Votar</a></div>
                                    </div>
                                </div>
                            </div>
    );
};

export default PollElement;