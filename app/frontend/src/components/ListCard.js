import React from "react";

import { useState, useEffect } from "react";

const ListCard = (props) => {
    //EXTRAER LISTA DE LA BD
    const [myList, setMyList] = useState([])

    const [myUser, setMyUser] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/list?id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMyList(data);

            fetch('http://127.0.0.1:8000/user?id=' + data.creator_id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setMyUser(data);
            });
          });
    }, [])

    var type = myList.type;
    if (myList.type == 'lista') { type = 'lista ordenada'; }

    return(
                            <div class="scrollable-card my-card w-100">
                                <div class="card">
                                    <a class="btn m-0 p-0" href={"/list?id=" + props.id}>
                                        <div class="card-body d-flex flex-row text-start">
                                            <div class="col-lg-6 col-md-3"><h5 class="card-title">{myList.name}</h5></div>
                                            <div class="col-lg-2 col-md-3"><p class="card-text">{type}</p></div>
                                            <div class="col-lg-2 col-md-3"><p class="card-text">{myUser.name}</p></div>
                                            <div class="col-lg-2 col-md-3"><p class="card-text">{myList.views}</p></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
    );
};

export default ListCard;