import React from "react";
import { useState, useEffect } from "react";

import ItemCard from "../components/ItemCard";

const ItemCardList = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/' + props.criteria + '-' + props.type + '?genre=' + props.genre)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setItems(data);
          });
    }, [])

    return(
                <>
                <div class="row mt-3 mb-4 text-left text-dark">
                    <div class="col-12">
                        <h3>{props.title}</h3>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12">
                        <div class="scrollable-card-group items-in-home">

                            {items.map((item) => (
                                <ItemCard id={item._id}/>
                            ))}

                        </div>
                    </div>
                </div>

                <br/>
                </>
    );
};

export default ItemCardList;