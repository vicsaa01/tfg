import React from "react";

import { useState, useEffect } from "react";

import ItemDescription from "../components/ItemDescription";
import ItemRating from "../components/ItemRating"
import Comment from "../components/Comment";
import Recommendation from "../components/Recommendation";

const Item = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    //EXTRAER DE LA BD
    const [myItem, setMyItem] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/item?id=' + id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMyItem(data);
          });
    }, [])

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h3>{myItem.name}</h3>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col pt-3 pb-3 border border-dark rounded">
                        <div class="row">
                            <div class="col-lg-3 col-md-4">
                                <img src={"../img/" + myItem.icon} class="rounded" width="200" height="200"/>
                            </div>
                            <div class="col-lg-6 col-md-4">
                                <div class="row">
                                    <ItemDescription
                                        type={myItem.type}
                                        creators={myItem.creators}
                                        producers={myItem.producers}
                                        country={myItem.country}
                                        year={myItem.year}
                                        length={myItem.length}
                                        platforms={myItem.platforms}
                                        genres={myItem.genres}
                                        info={myItem.info}
                                    />
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4">
                                <div class="row">
                                    <div class="col">
                                        <a class="btn rounded w-100 bg-dark text-white float-right">+ Añadir a lista</a>
                                        <a class="btn rounded w-100 bg-dark text-white float-right mt-3">+ Añadir a grupo</a>
                                    </div>
                                </div>

                                <div class="row mt-5">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="row font-weight-bold">
                            <div class="col-lg-4 col-md-5 mt-5">
                                <h4>Valoración media:</h4>
                                <ItemRating points={myItem.points} ratings={myItem.ratings}/>
                            </div>

                            <div class="border border-dark mt-5"></div>

                            <div class="col-lg-7 col-md-6 mt-5">
                                <h4>Puntúa este ítem: </h4>
                                    <div class="rate m-0 p-0">
                                        <input type="radio" id="star5" name="rate" value="5" />
                                        <label for="star5" title="text">5 stars</label>
                                        <input type="radio" id="star4" name="rate" value="4" />
                                        <label for="star4" title="text">4 stars</label>
                                        <input type="radio" id="star3" name="rate" value="3" />
                                        <label for="star3" title="text">3 stars</label>
                                        <input type="radio" id="star2" name="rate" value="2" />
                                        <label for="star2" title="text">2 stars</label>
                                        <input type="radio" id="star1" name="rate" value="1" />
                                        <label for="star1" title="text">1 star</label>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col mb-5 text-center">
                        <h4>Comentarios</h4>

                        <div class="row mt-3">
                            <div class="col">
                                <textarea name="nuevoComentario" class="form-control" placeholder="Añade un comentario..."></textarea>
                            </div>
                        </div>

                        <div class="row mt-1 mb-3">
                            <div class="col">
                                <button type="submit" class="rounded p-1 bg-dark text-white float-end">Publicar</button>
                            </div>
                        </div>
                        
                            <div class="row align-items-center mt-3 mb-3">
                                <div class="col-lg-2 col-md-4 col-sm-6 text-start"><p class="mt-3">Ordenar por:</p></div>
                                <div class="col-lg-10 col-md-8 col-sm-6">
                                    <select class="form-select w-auto p-1 ml-3 border border-1 border-dark" id="selectlist">
                                        <option value="new">Más recientes</option>
                                        <option value="popular">Más populares</option>
                                        <option value="controversial">Más controvertidos</option>
                                    </select>
                                </div>
                            </div>

                        {/* EXTRAER DE LA BD -> NUEVOS COMPONENTES? */}
                        <div class="scrollable-card-group my-cards">
                            <Comment/>
                        </div>
                    </div>

                    <div class="col-1"></div>

                    <div class="col text-center">
                        <h4>Recomendaciones</h4>

                        <div class="row mt-3 mb-3">
                            <div class="col">
                                <a class="btn w-100 border border-1 border-dark rounded boton-volver text-dark">+ Añade una recomendación</a>
                            </div>
                        </div>

                            {/* EXTRAER DE LA BD -> NUEVOS COMPONENTES? */}
                            <div class="scrollable-card-group my-cards">
                                <Recommendation id="0"/>
                                <Recommendation id="1"/>
                            </div>
                    </div>
                </div>
            </main>
    );
};

export default Item;