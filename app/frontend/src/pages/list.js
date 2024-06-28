import React from "react";

import { useState, useEffect } from "react";

import PollElement from "../components/PollElement";

const List = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    //EXTRAER DE LA BD
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/list?id=' + id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMyList(data);
          });
    }, [])

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-left text-dark">
                    <div class="col-12">
                        <h3>{myList.name}</h3>
                    </div>
                </div>

                <div class="row mb-4 text-left text-dark">
                    <div class="col-12">
                        <p>Lista creada por <a href={"/user?id=" + myList.owner}>{myList.owner}</a> el 30/07/2022</p>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12">
                        <div class="scrollable-card-group my-cards">
                            <PollElement position="1"/>
                            <PollElement position="2"/>
                        </div>
                    </div>
                </div>
            </main>
    );
};

export default List;