import React from "react";

import ItemCardList from "../components/ItemCardList"

const Games = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>Juegos</h1>
                    </div>
                </div>

                <ItemCardList title="Últimos lanzamientos" type="games" criteria="newest"/>
                <ItemCardList title="Más populares en acción"/>
                <ItemCardList title="Más populares en aventura"/>
                <ItemCardList title="Más populares en deportes"/>
            </main>
    );
};

export default Games;