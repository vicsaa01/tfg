import React from "react";

import { useState, useEffect } from "react";

const ItemMini = (props) => {
    
    //EXTRAER DE LA BD

    const [item, setItem] = useState([]);
    const [myItem, setMyItem] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/favorite-item?id=' + props.favorite_item_id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setItem(data);

            fetch('http://127.0.0.1:8000/item?id=' + data.item_id)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
              setMyItem(data);
            });
          });
    }, ['http://127.0.0.1:8000/favorite-item?id=' + props.favorite_item_id])

    return(
        <a class="btn m-0 mr-3 p-0 scrolled" href={'/item=id=' + myItem._id}><img src={'/img/' + myItem.icon} width="80" height="80"/></a>
    );
};

export default ItemMini;