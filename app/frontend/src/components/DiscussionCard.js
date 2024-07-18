import React from "react";

import { useState, useEffect } from "react";

const DiscussionCard = (props) => {
    
    //EXTRAER DE LA BD
    const [myDiscussion, setMyDiscussion] = useState([]);
    const [myUser, setMyUser] = useState([]);
    const [date, setDate] = useState({
        year: '',
        month: '',
        day: ''
    })

    useEffect(() => {
        fetch('http://127.0.0.1:8000/discussion?id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMyDiscussion(data);

            fetch('http://127.0.0.1:8000/user?id=' + data.creator_id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setMyUser(data);
            });

            let yyyy = data.created_at.substring(0,4);
            let mm = data.created_at.substring(5,7);
            let dd = data.created_at.substring(8,10);
            setDate({
                year: yyyy,
                month: mm,
                day: dd
            });
          });
    }, ['http://127.0.0.1:8000/discussion?id=' + props.id])

    return(
                            <div class="scrollable-card my-card w-100 mb-2">
                                <div class="card">
                                    <div class="card-body d-flex flex-row text-start align-items-center">
                                        <div class="col-7">
                                            <div class="row align-items-center">
                                                <div class="col-4"><a class="me-3 mb-1" href={"/discussion?id=" + props.id}><h5 class="card-title m-0 p-0">{myDiscussion.title}</h5></a></div>
                                                <div class="col-1"><a class="p-1 me-1 mb-1 btn rounded border boton-tag" href={"/search?search=" + myDiscussion.tags}>{myDiscussion.tags}</a></div>
                                            </div>
                                        </div>

                                        <div class="col-1">
                                            <div class="row align-items-center">
                                                <p class="card-text m-0 mr-1 p-0">{myDiscussion.likes}</p>
                                                <div class="col"><img src='/img/like.png' width="15" height="15"/></div>
                                            </div>
                                        </div>

                                        <div class="col-1">
                                            <div class="row align-items-center">
                                                <p class="card-text m-0 mr-1 p-0">{myDiscussion.dislikes}</p>
                                                <div class="col"><img src='/img/dislike.png' width="15" height="15"/></div>
                                            </div>
                                        </div>

                                        <div class="col-3">
                                            <div class="row align-items-center">
                                                <p class="card-text m-0 ml-1 p-0">Comenzada el {date.day}/{date.month}/{date.year} por {myUser.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
};

export default DiscussionCard;