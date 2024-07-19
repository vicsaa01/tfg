import React from "react";

import { useState, useEffect } from "react";

import PollElement from "../components/PollElement";
import RankingElement from "../components/RankingElement";
import UnorderedElement from "../components/UnorderedElement";

const ListContent = (props) => {

    // EXTRAER ELEMENTOS DE LA BD

    const [elements, setElements] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/list-elements?id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setElements(data);
          });
    }, ['http://127.0.0.1:8000/list-elements?id=' + props.id])

    if (props.type == 'encuesta') {
        return(
            <div class="scrollable-card-group my-cards">
                <PollElement/>
            </div>
        )
    } else if (props.type == 'clasificación') {
        return(
            <div class="scrollable-card-group my-cards">
                <RankingElement/>
            </div>
        )
    } else {
        return(
            <div class="scrollable-card-group my-cards">
                <UnorderedElement/>
            </div>
        )
    }
}

export default ListContent;