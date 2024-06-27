import React from "react";
import { useState, useEffect } from "react";

const ItemCard = (props) => {
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

    //FIJAR EL COLOR DEPENDIENDO DE LA VALORACIÓN
    /*
    var score_text = <span class="rounded p-1">{score}/100</span>;
    if (score<50) {
        score_text = <span class="valoracion-negativa rounded p-1">{score}/100</span>;
    } else if (score<70) {
        score_text = <span class="valoracion-mixta rounded p-1">{score}/100</span>;
    } else if (score<90) {
        score_text = <span class="valoracion-positiva rounded p-1">{score}/100</span>;
    } else {
        score_text = <span class="valoracion-muy-positiva rounded p-1">{score}/100</span>;
    }
        */

    return(
                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                        <a class="btn m-0 p-0 text-start" href={"/item?id=" + props.id}>
                                            <img src={"../img/" + myItem.icon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                            <div class="card-body">
                                                <h5 class="card-title">{myItem.name}</h5>
                                                <p class="card-text scrollable-p">
                                                    Tipo: {myItem.type}<br/>
                                                    Géneros: {myItem.genres}
                                                </p>
                                            </div>
                                            <div class="card-footer">
                                                <h5>Puntuación: {myItem.points*10/myItem.ratings + "/100"}</h5>
                                            </div>
                                        </a>
                                </div>
                            </div>
    );
};

export default ItemCard;