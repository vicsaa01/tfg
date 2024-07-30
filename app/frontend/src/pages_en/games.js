import React from "react";

import ItemCardList from "../components/ItemCardList"

const Games = (props) => {
    props.setLang('en')

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>Juegos</h1>
                    </div>
                </div>

                <ItemCardList title="Latest releases" type="games" criteria="newest" genre="all" lang="en"/>
                <ItemCardList title="Most popular action games" type="games" criteria="popular" genre="acción" lang="en"/>
                <ItemCardList title="Most popular shooter games" type="games" criteria="popular" genre="shooter" lang="en"/>
                <ItemCardList title="Most popular adventure games" type="games" criteria="popular" genre="aventura" lang="en"/>
                <ItemCardList title="Most popular strategy games" type="games" criteria="popular" genre="estrategia" lang="en"/>
                <ItemCardList title="Most popular simulation games" type="games" criteria="popular" genre="simulador" lang="en"/>
        </main>
    );
};

export default Games;