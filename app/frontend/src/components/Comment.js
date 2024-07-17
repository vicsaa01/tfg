import React from "react";

import { useState, useEffect } from "react";

const Comment = (props) => {

    //EXTRAER COMENTARIO DE LA BD

    const [comment, setComment] = useState([]);
    const [myUser, setMyUser] = useState([]);

    const [dateTime, setDateTime] = useState({
        year: '',
        month: '',
        day: '',
        time: ''
    });

    useEffect(() => {
        fetch('http://127.0.0.1:8000/comment?id=' + props.id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setComment(data);

                let yyyy = data.created_at.substring(0,4);
                let mm = data.created_at.substring(5,7);
                let dd = data.created_at.substring(8,10);
                let t = data.created_at.substring(11,16);
                setDateTime({
                    year: yyyy,
                    month: mm,
                    day: dd,
                    time: t
                });

                fetch('http://127.0.0.1:8000/user?id=' + data.user)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setMyUser(data);
                });
            });
    }, ['http://127.0.0.1:8000/comment?id=' + props.id])

    return(
                        <div class="scrollable-card-group my-cards">
                            <div class="scrollable-card my-card w-100 mb-3">
                                <div class="card">
                                    <div class="card-body d-flex flex-row text-start">
                                        <div class="col-lg-1 col-md-2 col-sm-3">
                                            <div class="row align-items-center">
                                                <a class="btn m-0 p-0" href={"/user?id=" + myUser._id}><img class="rounded-circle" src={'/img/' + myUser.avatar} width="80" height="80"/></a>
                                            </div>
                                            
                                        </div>

                                        <div class="col-lg-10 col-md-9 col-sm-8">
                                            <div class="row ms-3">
                                                <a href={"/user?id=" + myUser._id}><h5 class="mr-3">{myUser.name}</h5></a>
                                                <p>{dateTime.day}/{dateTime.month}/{dateTime.year} {dateTime.time}</p>
                                            </div>

                                            <div class="row ms-3 text-justify">
                                                <p>{comment.text}</p>
                                            </div>

                                            <div class="row ms-3">
                                                <div class="col-lg-2 col-md-4 col-sm-6">
                                                    <div class="row">
                                                        <p class="pt-1 mr-1">{comment.likes}</p>
                                                        <a href=""><img src='/img/like.png' width="15" height="15"/></a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-2 col-md-4 col-sm-6">
                                                    <div class="row">
                                                        <p class="pt-1 me-1">{comment.dislikes}</p>
                                                        <a class="pt-1" href=""><img src='/img/dislike.png' width="15" height="15"/></a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-8 col-md-4 col-sm-0"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
};

export default Comment;