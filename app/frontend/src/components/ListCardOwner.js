import React from "react";

import { useState, useEffect } from "react";

const ListCardOwner = (props) => {
    //EXTRAER USUARIO PROPIETARIO DE LA BD
    const [owner, setOwner] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/user?id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setOwner(data);
          });
    }, [])

    return(
        <p class="card-text">{owner.name}</p>
    );
};

export default ListCardOwner;