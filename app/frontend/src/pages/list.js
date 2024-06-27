import React from "react";
import PollElement from "../components/PollElement";

const List = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-left text-dark">
                    <div class="col-12">
                        <h3>Los mejores juegos RPG</h3>
                    </div>
                </div>

                <div class="row mb-4 text-left text-dark">
                    <div class="col-12">
                        <p>Lista creada por <a href="user.html">vic42</a> el 30/07/2022</p>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12">
                        <div class="scrollable-card-group my-cards">
                            <PollElement position="1"/>
                            <PollElement position="2"/>
                        </div>
                    </div>
                </div>
            </main>
    );
};

export default List;