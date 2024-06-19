import React from "react";

import UserAvatar from "../img/test-user.png";
import LikeButton from "../img/like.png";
import DislikeButton from "../img/dislike.png";

const Comment = () => {
    return(
                        <div class="scrollable-card-group my-cards">
                            <div class="scrollable-card my-card w-100">
                                <div class="card">
                                    <div class="card-body d-flex flex-row text-left">
                                        <div class="col-lg-1 col-md-2 col-sm-3">
                                            <div class="row align-items-center">
                                                <a class="btn m-0 p-0" href="/user"><img class="rounded-circle" src={UserAvatar} width="80" height="80"/></a>
                                            </div>
                                            
                                        </div>

                                        <div class="col-lg-10 col-md-9 col-sm-8">
                                            <div class="row ml-3">
                                                <a href="/user"><h5 class="mr-3">vic42</h5></a>
                                                <p>hace 1 año</p>
                                            </div>

                                            <div class="row ml-3 text-justify">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>

                                            <div class="row ml-3">
                                                <div class="col-lg-1 col-md-2 col-sm-3 col-xs-4">
                                                    <div class="row">
                                                        <p class="pt-1 mr-1">80</p>
                                                        <a href=""><img src={LikeButton} width="15" height="15"/></a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-1 col-md-2 col-sm-3 col-xs-4">
                                                    <div class="row">
                                                        <p class="pt-1 mr-1">20</p>
                                                        <a class="pt-1" href=""><img src={DislikeButton} width="15" height="15"/></a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-10 col-md-8 col-sm-6 col-xs-4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
};

export default Comment;