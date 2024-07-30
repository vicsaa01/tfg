import React from "react";

import ItemCardList from "../components/ItemCardList";

const EnHome = (props) => {
    props.setLang('en')

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h2>Welcome to GameForum!</h2>
                        <p>A website to search for something new or chat with your friends</p>
                    </div>
                </div>

                <ItemCardList title="Latest releases" type="items" criteria="newest" genre="all" lang="en"/>
                <ItemCardList title="Most popular music" type="music" criteria="popular" genre="all" lang="en"/>
                <ItemCardList title="Most popular games" type="games" criteria="popular" genre="all" lang="en"/>
                <ItemCardList title="Most popular movies" type="movies" criteria="popular" genre="all" lang="en"/>
                <ItemCardList title="Most popular TV series" type="tv" criteria="popular" genre="all" lang="en"/>
                <ItemCardList title="Most popular books" type="books" criteria="popular" genre="all" lang="en"/>
        </main>
    );
};

export default EnHome;