import React from "react";
import { useState, useEffect } from "react";

const ItemCard = (props) => {

    //EXTRAER ÍTEM DE LA BD

    const [myItem, setMyItem] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/item?id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMyItem(data);
          });
    }, [])

    // set rating color

    var color = ""
    if (myItem.ratings < 1) { color = " valoracion-inexistente" }

    var rating = Math.round(myItem.points*10/myItem.ratings);
    console.log(rating);
    
    if (rating < 50) { color = " valoracion-negativa" }
    else if (rating < 70) { color = " valoracion-mixta" }
    else if (rating < 90) { color = " valoracion-positiva" }
    else if (rating <= 100) { color = "valoracion-muy-positiva" }
    else { color = " valoracion-inexistente" }

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
                                                <h5>Puntuación: <span class={"p-1 rounded " + color}>{Math.round(myItem.points*10/myItem.ratings) + "/100"}</span></h5>
                                            </div>
                                        </a>
                                </div>
                            </div>
    );
};

export default ItemCard;