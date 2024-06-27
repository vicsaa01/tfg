import React from "react";

import ItemCardList from "../components/ItemCardList"

const TV = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>TV</h1>
                    </div>
                </div>

                <ItemCardList title="Últimos lanzamientos"/>
                <ItemCardList title="Más populares en acción"/>
                <ItemCardList title="Más populares en comedia"/>
                <ItemCardList title="Más populares en crimen"/>
            </main>
    );
};

export default TV;