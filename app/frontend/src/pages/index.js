import React from "react";

import ItemCardList from "../components/ItemCardList";

const Home = (props) => {
    props.setLang('es')

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h2>¡Bienvenido a GameForum!</h2>
                        <p>Una web para buscar algo nuevo, y una red social para conversar con tus amigos</p>
                    </div>
                </div>

                <ItemCardList title="Últimos lanzamientos" type="items" criteria="newest" genre="all" lang="es"/>
                <ItemCardList title="Más populares en música" type="music" criteria="popular" genre="all" lang="es"/>
                <ItemCardList title="Más populares en juegos" type="games" criteria="popular" genre="all" lang="es"/>
                <ItemCardList title="Más populares en películas" type="movies" criteria="popular" genre="all" lang="es"/>
                <ItemCardList title="Más populares en series de TV" type="tv" criteria="popular" genre="all" lang="es"/>
                <ItemCardList title="Más populares en libros" type="books" criteria="popular" genre="all" lang="es"/>
        </main>
    );
};

export default Home;