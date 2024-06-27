import React from "react";

import GroupIcon0 from "../img/test-group-white.png";
import GroupIcon1 from "../img/test-group-black.png";
import NotFoundIcon from "../img/item-not-found.png"

const GroupCard = (props) => {
    var name = "Group not found";
    var members = 0;
    var icon = NotFoundIcon;

    //EXTRAER DE LA BD
    if (props.id == "0") {
        name = "RPGers International"
        members = 100;
        icon = GroupIcon1;
    } else if (props.id == "1") {
        name = "Dudes, dudettes and duderinos"
        members = 33;
        icon = GroupIcon0;
    }

    var link = "/group?id=" + props.id;

    return(
                            <div class="scrollable-card group">
                                <div class="card">
                                    <a class="btn m-0 p-0" href={link}>
                                        <img src={icon} class="card-img-top" alt="Hollywood Sign on The Hill" height="200" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">{name}</h5>
                                        </div>
                                        <div class="card-footer">
                                            <p>{members} miembros</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
    );
};

export default GroupCard;