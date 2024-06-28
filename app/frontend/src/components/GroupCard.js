import React from "react";

import { useState, useEffect } from "react";

import GroupIcon0 from "../img/test-group-white.png";
import GroupIcon1 from "../img/test-group-black.png";
import NotFoundIcon from "../img/item-not-found.png"

const GroupCard = (props) => {
    //EXTRAER DE LA BD
    const [myGroup, setMyGroup] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/group?id='+props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMyGroup(data);
          });
    }, [])

    return(
                            <div class="scrollable-card group">
                                <div class="card">
                                    <a class="btn m-0 p-0" href={"/group?id=" + props.id}>
                                        <img src={"../img/" + myGroup.logo} class="card-img-top" alt="Hollywood Sign on The Hill" height="200" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">{myGroup.name}</h5>
                                        </div>
                                        <div class="card-footer">
                                            <p>{myGroup.members} miembros</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
    );
};

export default GroupCard;