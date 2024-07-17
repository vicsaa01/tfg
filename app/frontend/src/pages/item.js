import React from "react";

import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

import ItemDescription from "../components/ItemDescription";
import ItemRating from "../components/ItemRating";
import ItemComments from "../components/ItemComments";
import Recommendations from "../components/Recommendations";

const Item = () => {

    // get parameters and session

    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    const [cookies, setCookie, removeCookie] = useCookies(['session']);
    const session = cookies['session'];

    // write comment

    const [formData, setFormData] = useState({
        text: '',
        item: '',
        user: ''
    });

    const handleWriteComment = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmitComment = (e) => {
        e.preventDefault();

        formData.item = id;
        formData.user = session.user_id;

        console.log(formData);

        fetch('http://127.0.0.1:8000/add-item-comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
            setFormData({
                text: '',
                item: '',
                user: ''
            });
            window.location.href = '/item?id=' + id;
        })
        .catch((error) => {
            alert(error);
        });
    }

    // sort comments

    const [sort, setSort] = useState('popular')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSort(value);
    }

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

                        <form onSubmit={handleSubmitComment}>
                            <div class="row mt-3">
                                <div class="col">
                                    <textarea name="text" value={formData.text} onChange={handleWriteComment} class="form-control" placeholder="Añade un comentario..."></textarea>
                                </div>
                            </div>

                            <div class="row mt-1 mb-3">
                                <div class="col">
                                    <button type="submit" class="rounded p-1 bg-dark text-white float-end">Publicar</button>
                                </div>
                            </div>
                        </form>
                        
                            <div class="row align-items-center mt-3 mb-3">
                                <div class="col-lg-2 col-md-4 col-sm-6 text-start">
                                    <br/>
                                    <p class="mt-3">Ordenar por:</p>
                                </div>

                                <div class="col-lg-10 col-md-8 col-sm-6">
                                    <select class="form-select w-auto p-1 ml-3 border border-1 border-dark" name="sortby" onChange={handleInputChange}>
                                        <option value="popular">Más populares</option>
                                        <option value="old">Más antiguos</option>
                                        <option value="new">Más recientes</option>
                                        <option value="controversial">Más controvertidos</option>
                                    </select>
                                </div>
                            </div>

                        <ItemComments id={myItem._id} sortby={sort}/>
                    </div>

                    <div class="col-1"></div>

                    <div class="col text-center">
                        <h4>Recomendaciones</h4>

                        <div class="row mt-3 mb-3">
                                <div class="col">
                                    <a class="btn w-100 border border-1 border-dark rounded boton-volver text-dark" href={"/add-recommendation?item_id=" + myItem._id}>+ Añade una recomendación</a>
                                </div>
                        </div>

                        <Recommendations id={myItem._id}/>
                    </div>
                </div>
            </main>
    );
};

export default Item;