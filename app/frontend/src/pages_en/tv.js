import React from "react";

import ItemCardList from "../components/ItemCardList"

const TV = (props) => {
    props.setLang('en')

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>TV</h1>
                    </div>
                </div>

                <ItemCardList title="Latest releases" type="tv" criteria="newest" genre="all" lang="en"/>
                <ItemCardList title="Most popular in action" type="tv" criteria="popular" genre="acción" lang="en"/>
                <ItemCardList title="Most popular in crime" type="tv" criteria="popular" genre="crimen" lang="en"/>
                <ItemCardList title="Most popular in comedy" type="tv" criteria="popular" genre="comedia" lang="en"/>
            </main>
    );
};

export default TV;