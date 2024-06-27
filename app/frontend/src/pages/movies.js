import React from "react";

import ItemCardList from "../components/ItemCardList"

const Movies = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>Cine</h1>
                    </div>
                </div>

                <ItemCardList title="Últimos lanzamientos" type="movies" criteria="newest"/>
                <ItemCardList title="Más populares en acción"/>
                <ItemCardList title="Más populares en terror"/>
                <ItemCardList title="Más populares en romance"/>
            </main>
    );
};

export default Movies;