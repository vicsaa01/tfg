import React from "react";

import ItemCardList from "../components/ItemCardList"

const Music = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>Música</h1>
                    </div>
                </div>

                <ItemCardList title="Últimos lanzamientos"/>
                <ItemCardList title="Más populares en rock"/>
                <ItemCardList title="Más populares en electrónica"/>
                <ItemCardList title="Más populares en jazz"/>
            </main>
    );
};

export default Music;