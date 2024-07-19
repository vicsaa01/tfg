import React from "react";

import { useState, useEffect } from "react";

const PollElement = (props) => {
    
    // EXTRAER ELEMENTO DE LA BD

    const [element, setElement] = useState();
    const [item, setItem] = useState();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/list-element?id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setElement(data);

            fetch('http://127.0.0.1:8000/item?id=' + data.item)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setItem(data);
                });
          });
    }, ['http://127.0.0.1:8000/list-element?id=' + props.id])

    // vote

    const [voted, setVoted] = useState(false);

    const handleVote = () => {
        if (!voted) {
            fetch('http://127.0.0.1:8000/vote-list-element?id=' + props.id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setElement(data);
            })
            .catch((error) => {
                alert(error);
            });

            setVoted(true);
        }
    }

    if (item != undefined && element != undefined) {
        if (voted) {
            return(
                <div class="scrollable-card my-card w-100 mb-2">
                    <div class="card">
                        <div class="card-body d-flex flex-row text-left align-items-center">
                            <div class="col-lg-1 col-md-1">
                                <h5 class="card-title m-0 p-0">{props.position}.</h5>
                            </div>
                            <div class="col-lg-2 col-md-2">
                                <a class="btn m-0 p-0" href={"/item?id=" + item._id}><img src={"/img/" + item.icon} width="80" height="80"/></a>
                            </div>
                            <div class="col-lg-6 col-md-4">
                                <a href={"/item?id=" + item._id}><h5 class="card-title m-0 p-0">{item.name}</h5></a>
                            </div>
                            <div class="col-lg-2 col-md-3">
                                <p class="card-text m-0 p-0">{element.votes} votos</p>
                            </div>
                            <div class="col-lg-1 col-md-2">
                                <p class="card-text m-0 p-0">¡Gracias por tu voto!</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div class="scrollable-card my-card w-100 mb-2">
                    <div class="card">
                        <div class="card-body d-flex flex-row text-left align-items-center">
                            <div class="col-lg-1 col-md-1">
                                <h5 class="card-title m-0 p-0">{props.position}.</h5>
                            </div>
                            <div class="col-lg-2 col-md-2">
                                <a class="btn m-0 p-0" href={"/item?id=" + item._id}><img src={"/img/" + item.icon} width="80" height="80"/></a>
                            </div>
                            <div class="col-lg-6 col-md-4">
                                <a href={"/item?id=" + item._id}><h5 class="card-title m-0 p-0">{item.name}</h5></a>
                            </div>
                            <div class="col-lg-2 col-md-3">
                                <p class="card-text m-0 p-0">{element.votes} votos</p>
                            </div>
                            <div class="col-lg-1 col-md-2">
                                <a class="btn bg-dark text-white" onClick={handleVote}>Votar</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    } else {
        return(
            <div class="scrollable-card my-card w-100">
                <div class="card">
                    <div class="card-body d-flex flex-row text-left align-items-center">
                        <div class="col-lg-1 col-md-1">
                            <h5 class="card-title m-0 p-0">X.</h5>
                        </div>
                        <div class="col-lg-2 col-md-2">
                        </div>
                        <div class="col-lg-6 col-md-4">
                            <h5 class="card-title m-0 p-0">Indefinido</h5>
                        </div>
                        <div class="col-lg-2 col-md-3">
                            <p class="card-text m-0 p-0">0 votos</p>
                        </div>
                        <div class="col-lg-1 col-md-2">
                            <a class="btn bg-dark text-white">Votar</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default PollElement;