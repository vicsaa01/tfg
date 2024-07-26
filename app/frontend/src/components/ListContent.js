import React from "react";

import { useState, useEffect } from "react";

import PollElement from "../components/PollElement";
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

    // ranks

    var rank = 1;

    if (props.type == 'encuesta') {
        return(
            <div class="scrollable-card-group my-cards">
                {elements.map((element) => (
                    <PollElement id={element._id} position={rank++}/>
                ))}
            </div>
        )
    } else {
        return(
            <div class="scrollable-card-group my-cards">
                {elements.map((element) => (
                    <UnorderedElement id={element._id} position={rank++} list_id={props.id} creator_id={props.creator_id}/>
                ))}
            </div>
        )
    }
}

export default ListContent;