import React from "react";
import { useState, useEffect } from "react";

const SearchCard = (props) => {
    //EXTRAER DE LA BD
    const [myItem, setMyItem] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/item?id='+props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMyItem(data);
          });
    }, [])
    
    return(
                            <div class="scrollable-card my-card w-100">
                                <div class="card mb-1">
                                    <div class="card-body d-flex flex-row text-left">
                                        <div class="col-lg-2 col-md-3">
                                            <a class="btn m-0 p-0" href={"/item?id=" + props.id}><img src={"../img/" + myItem.icon} width="120" height="180"/></a>
                                        </div>
                                        <div class="col-lg-10 col-md-9">
                                            <a href={"/item?id=" + props.id}>
                                                <h5 class="card-title m-0 p-0">{myItem.name}</h5>
                                            </a>
                                            <p class="mt-4">Año: {myItem.year}</p>
                                            <p>Dirigida por: {myItem.directors}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
};

export default SearchCard;