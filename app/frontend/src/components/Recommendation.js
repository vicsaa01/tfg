import React from "react";

import { useState, useEffect } from "react";

const Recommendation = (props) => {
    
    // EXTRAER RECOMENDACIÓN DE LA BD

    const [recommendation, setRecommendation] = useState([]);
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/recommendation?id=' + props.id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setRecommendation(data);

                fetch('http://127.0.0.1:8000/item?id=' + data.recommended_item)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setItem(data);
                });
            });
    }, ['http://127.0.0.1:8000/recommendation?id=' + props.id])

    return(
                                <div class="scrollable-card my-card w-100">
                                    <div class="card mb-1">
                                        <div class="card-body d-flex flex-row text-start">
                                            <div class="col-lg-3 col-md-4">
                                                <a class="btn m-0 p-0" href={"/item?id=" + item._id}><img src={'/img/' + item.icon} width="80" height="80"/></a>
                                            </div>
                                            <div class="col-lg-9 col-md-8">
                                                <a href={"/item?id=" + item._id}><h5 class="card-title m-0 p-0">{item.name}</h5></a>

                                                <div class="row mt-3">
                                                    <div class="col-lg-2 col-md-4 col-sm-6">
                                                        <p class="pt-1 ml-3 mr-1">{recommendation.likes}</p>
                                                        <a class="mr-2" href=""><img src='/img/like.png' width="15" height="15"/></a>
                                                    </div>

                                                    <div class="col-lg-2 col-md-4 col-sm-6">
                                                        <p class="pt-1 mr-1">{recommendation.dislikes}</p>
                                                        <a class="pt-1" href=""><img src='/img/dislike.png' width="15" height="15"/></a>
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