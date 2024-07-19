import React from "react";

import { useState, useEffect } from "react";

import JoinRequestCard from "../components/JoinRequestCard";

const JoinRequests = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const group_id = queryParameters.get("group_id")

    //EXTRAER DE LA BD
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/requests?group_id=' + group_id)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setRequests(data);
        });
    }, ['http://127.0.0.1:8000/requests?group_id=' + group_id]);

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-left text-dark">
                    <div class="col-12">
                        <h3>Solicitudes</h3>
                        <br/>
                        <p>Aquí puedes ver qué usuarios han solicitado unirse, mostrándose las solicitudes más recientes primero. Puedes aceptarlas o rechazarlas.</p>
                    </div>
                </div>

                <div class="row mb-4 text-left text-dark">
                </div>

                <div class="row mb-5">
                    <div class="col-12">
                        <div class="d-flex flex-row w-100 p-3">
                            <div class="col-5"><h5 class="card-title">Usuario</h5></div>
                            <div class="col-7"><p class="card-text">Enviada</p></div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="scrollable-card-group my-cards">
                            {requests.map((request) => (
                                <JoinRequestCard id={request._id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
    );
};

export default JoinRequests;