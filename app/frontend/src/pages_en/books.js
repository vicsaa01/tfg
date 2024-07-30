import React from "react";

import ItemCardList from "../components/ItemCardList"

const Books = (props) => {
    props.setLang('en')

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>Books</h1>
                    </div>
                </div>

                <ItemCardList title="Latest releases" type="books" criteria="newest" genre="all" lang="en"/>
                <ItemCardList title="Most popular fantasy novels" type="books" criteria="popular" genre="fantasía" lang="en"/>
                <ItemCardList title="Most popular non-fiction books" type="books" criteria="popular" genre="no ficción" lang="en"/>
                <ItemCardList title="Most popular horror novels" type="books" criteria="popular" genre="terror" lang="en"/>
            </main>
    );
};

export default Books;