import React from "react";

const Comment = () => {

    return(
                        <div class="scrollable-card-group my-cards">
                            <div class="scrollable-card my-card w-100 mb-3">
                                <div class="card">
                                    <div class="card-body d-flex flex-row text-start">
                                        <div class="col-lg-1 col-md-2 col-sm-3">
                                            <div class="row align-items-center">
                                                <a class="btn m-0 p-0" href={"/user?id="}><img class="rounded-circle" src={'/img/' + ''} width="80" height="80"/></a>
                                            </div>
                                            
                                        </div>

                                        <div class="col-lg-10 col-md-9 col-sm-8">
                                            <div class="row ms-3">
                                                <a href={"/user?id="}><h5 class="mr-3">{}</h5></a>
                                                <p>{}</p>
                                            </div>

                                            <div class="row ms-3 text-justify">
                                                <p>{}</p>
                                            </div>

                                            <div class="row ms-3">
                                                <div class="col-lg-2 col-md-4 col-sm-6">
                                                    <div class="row">
                                                        <p class="pt-1 mr-1">{}</p>
                                                        <a href=""><img src='/img/like.png' width="15" height="15"/></a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-2 col-md-4 col-sm-6">
                                                    <div class="row">
                                                        <p class="pt-1 me-1">{}</p>
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