import React from "react";

import ItemCard from "../components/ItemCard"

const Home = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-left text-dark">
                    <div class="col-12">
                        <h3>Últimos lanzamientos</h3>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-12">
                        <div class="scrollable-card-group items-in-home">
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                        </div>
                    </div>
                </div>

                <div class="row m-5"></div>

                <div class="row mb-4 text-left text-dark">
                    <div class="col-12">
                        <h3>Películas más populares</h3>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-12">
                        <div class="scrollable-card-group items-in-home">
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                        </div>
                    </div>
                </div>
        </main>
    );
};

export default Home;