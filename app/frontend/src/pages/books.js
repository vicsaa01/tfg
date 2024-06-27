import React from "react";

import ItemCardList from "../components/ItemCardList"

const Books = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>Libros</h1>
                    </div>
                </div>

                <ItemCardList title="Últimos lanzamientos"/>
                <ItemCardList title="Más populares en filosofía"/>
                <ItemCardList title="Más populares en novelas"/>
                <ItemCardList title="Más populares en cómics"/>
            </main>
    );
};

export default Books;