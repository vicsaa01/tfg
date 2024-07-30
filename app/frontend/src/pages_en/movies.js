import React from "react";

import ItemCardList from "../components/ItemCardList"

const Movies = (props) => {
    props.setLang('en')

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>Cine</h1>
                    </div>
                </div>

                <ItemCardList title="Latest releases" type="movies" criteria="newest" genre="all" lang="en"/>
                <ItemCardList title="Most popular action movies" type="movies" criteria="popular" genre="acción" lang="en"/>
                <ItemCardList title="Most popular adventure movies" type="movies" criteria="popular" genre="aventura" lang="en"/>
                <ItemCardList title="Most popular comedy movies" type="movies" criteria="popular" genre="comedia" lang="en"/>
                <ItemCardList title="Most popular romantic movies" type="movies" criteria="popular" genre="romance" lang="en"/>
            </main>
    );
};

export default Movies;