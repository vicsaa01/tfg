import React from "react";

import ItemCardList from "../components/ItemCardList";

const Home = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h2>¡Bienvenido a GameForum!</h2>
                        <p>Una web para buscar algo nuevo, y una red social para conversar con tus amigos</p>
                    </div>
                </div>

                <ItemCardList title="Últimos lanzamientos" type="items" criteria="newest"/>
                <ItemCardList title="Más populares en música" type="music" criteria="popular"/>
                <ItemCardList title="Más populares en juegos" type="games" criteria="popular"/>
                <ItemCardList title="Más populares en películas" type="movies" criteria="popular"/>
                <ItemCardList title="Más populares en series de TV" type="tv" criteria="popular"/>
                <ItemCardList title="Más populares en libros" type="books" criteria="popular"/>
        </main>
    );
};

export default Home;