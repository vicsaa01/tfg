import React from "react";

import UserAvatar0 from "../img/test-user-knight.png";
import UserAvatar1 from "../img/test-user-smiley.png";
import LikeButton from "../img/like.png";
import DislikeButton from "../img/dislike.png";

const Comment = (props) => {
    var useravatar;
    var username;
    var date;
    var text;
    var likes;
    var dislikes;
    var userlink = "/user?id="

    if (props.id=="0") {
        useravatar = UserAvatar0
        username = "vic42"
        date = "hace 1 año"
        text = "Argumento argumento argumento argumento argumento"
        likes = 100
        dislikes = 50
        userlink += "0"
    } else if (props.id=="1") {
        useravatar = UserAvatar1
        username = "theDude"
        date = "hace 1 año"
        text = "Contraargumento contraargumento contraargumento contraargumento contraargumento"
        likes = 50
        dislikes = 10
        userlink += "1"
    } else if (props.id=="2") {
        useravatar = UserAvatar0
        username = "vic42"
        date = "hace 1 año"
        text = "Argumento argumento argumento"
        likes = 50
        dislikes = 10
        userlink += "0"
    } else if (props.id=="3") {
        useravatar = UserAvatar1
        username = "theDude"
        date = "hace 1 año"
        text = "Contraargumento contraargumento contraargumento"
        likes = 25
        dislikes = 5
        userlink += "1"
    }
    
    return(
                        <div class="scrollable-card-group my-cards">
                            <div class="scrollable-card my-card w-100 mb-3">
                                <div class="card">
                                    <div class="card-body d-flex flex-row text-start">
                                        <div class="col-lg-1 col-md-2 col-sm-3">
                                            <div class="row align-items-center">
                                                <a class="btn m-0 p-0" href={userlink}><img class="rounded-circle" src={useravatar} width="80" height="80"/></a>
                                            </div>
                                            
                                        </div>

                                        <div class="col-lg-10 col-md-9 col-sm-8">
                                            <div class="row ms-3">
                                                <a href={userlink}><h5 class="mr-3">{username}</h5></a>
                                                <p>{date}</p>
                                            </div>

                                            <div class="row ms-3 text-justify">
                                                <p>{text}</p>
                                            </div>

                                            <div class="row ms-3">
                                                <div class="col-lg-2 col-md-4 col-sm-6">
                                                    <div class="row">
                                                        <p class="pt-1 mr-1">{likes}</p>
                                                        <a href=""><img src={LikeButton} width="15" height="15"/></a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-2 col-md-4 col-sm-6">
                                                    <div class="row">
                                                        <p class="pt-1 me-1">{dislikes}</p>
                                                        <a class="pt-1" href=""><img src={DislikeButton} width="15" height="15"/></a>
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