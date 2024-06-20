import React from "react";

import ItemIcon from "../img/test-lebowski.jpg";

const SearchCard = () => {
    return(
                            <div class="scrollable-card my-card w-100">
                                <div class="card mb-1">
                                    <div class="card-body d-flex flex-row text-left">
                                        <div class="col-lg-2 col-md-3">
                                            <a class="btn m-0 p-0" href="/item"><img src={ItemIcon} width="120" height="180"/></a>
                                        </div>
                                        <div class="col-lg-10 col-md-9">
                                            <a href="/item">
                                                <h5 class="card-title m-0 p-0">El Gran Lebowski</h5>
                                            </a>
                                            <p class="mt-4">Año: 1998</p>
                                            <p>Dirigida por: Joel Coen, Ethan Coen</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
};

export default SearchCard;