import React from "react";

import ItemCardList from "../components/ItemCardList"

const Music = (props) => {
    props.setLang('en')

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>Música</h1>
                    </div>
                </div>

                <ItemCardList title="Latest releases" type="music" criteria="newest" genre="all" lang="en"/>
                <ItemCardList title="Most popular electronic music" type="music" criteria="popular" genre="electrónica" lang="en"/>
                <ItemCardList title="Most popular rap music" type="music" criteria="popular" genre="rap" lang="en"/>
                <ItemCardList title="Most popular jazz music" type="music" criteria="popular" genre="jazz" lang="en"/>
            </main>
    );
};

export default Music;