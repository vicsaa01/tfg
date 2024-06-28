import React from "react";

import { useState, useEffect } from "react";

import Comment from "../components/Comment"

const Discussion = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    //EXTRAER DE LA BD
    const [myDiscussion, setMyDiscussion] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/discussion?id=' + id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMyDiscussion(data);
          });
    }, [])

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-left text-dark">
                    <div class="col-12 ps-5 pe-5">
                        <h3>{myDiscussion.title}</h3>
                    </div>
                </div>

                <div class="row mb-4 text-left text-dark">
                    <div class="col-12 ps-5 pe-5">
                        <p>Discusión de <a href={"/group?id=" + myDiscussion.group}>{myDiscussion.group}</a></p>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-11 ps-5 pe-5">
                        <Comment id="0"/>
                    </div>

                    <div class="col-1"></div>
                </div>

                <div class="row mt-3">
                    <div class="col-1"></div>

                    <div class="col-11">
                        <h5 class="m-3 ps-4 pe-5">Respuestas</h5>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-1"></div>

                    <div class="col-11 ps-5 pe-5">
                        <textarea name="nuevoComentario" class="form-control w-100" placeholder="Añade un comentario..."></textarea>
                    </div>
                </div>

                <div class="row mt-1 mb-3">
                    <div class="col ps-5 pe-5">
                        <button type="submit" class="rounded p-1 bg-dark text-white float-end">Publicar</button>
                    </div>
                </div>

                <div class="row mb-4 text-left text-dark">
                    <div class="col-1"></div>

                    <div class="col-11 ps-5 pe-5">
                        <div class="row align-items-center">
                            <div class="col-2"><p class="m-3">Ordenar por</p></div>
                            <div class="col-10">
                                <select class="form-select w-auto p-1 border border-1 border-dark" id="selectlist">
                                    <option value="new">Más recientes</option>
                                    <option value="popular">Más populares</option>
                                    <option value="controversial">Más controvertidas</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-1"></div>

                    <div class="col-11 ps-5 pe-5">
                        <Comment id="1"/>
                        <Comment id="2"/>
                        <Comment id="3"/>
                    </div>
                </div>
            </main>
    );
};

export default Discussion;