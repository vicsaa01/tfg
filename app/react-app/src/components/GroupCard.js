import React from "react";

import ItemIcon from "../img/test-rpg.jpg"

const GroupCard = () => {
    return(
                            <div class="scrollable-card group">
                                <div class="card">
                                    <a class="btn m-0 p-0" href="/group">
                                        <img src={ItemIcon} class="card-img-top" alt="Hollywood Sign on The Hill" height="200" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">RPGers International</h5>
                                        </div>
                                        <div class="card-footer">
                                            <p>100 miembros</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
    );
};

export default GroupCard;