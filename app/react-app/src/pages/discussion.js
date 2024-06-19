import React from "react";

import Comment from "../components/Comment"

const Discussion = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-left text-dark">
                    <div class="col-12 pl-5 pr-5">
                        <h3>Why Skyrim is the best RPG ever</h3>
                    </div>
                </div>

                <div class="row mb-4 text-left text-dark">
                    <div class="col-12 pl-5 pr-5">
                        <p>Discusión de <a href="/group">RPGers International</a></p>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12 pl-5 pr-5">
                        <Comment />
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col">
                        <h5 class="m-3 pl-3 pr-5">Respuestas</h5>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col pl-5 pr-5">
                        <textarea name="nuevoComentario" class="form-control w-100" placeholder="Añade un comentario..."></textarea>
                    </div>
                </div>

                <div class="row mt-1 mb-3">
                    <div class="col pl-5 pr-5">
                        <button type="submit" class="rounded p-1 bg-dark text-white float-right">Publicar</button>
                    </div>
                </div>

                <div class="row mb-4 text-left text-dark">
                    <div class="col-12 pl-5 pr-5">
                        <div class="row align-items-center">
                            <p class="m-3">Ordenar por</p>
                            <select class="form-control w-auto p-1 border border-3 border-dark" id="selectlist">
                                <option value="new">Más recientes</option>
                                <option value="popular">Más populares</option>
                                <option value="controversial">Más controvertidas</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12 pl-5 pr-5">
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>
            </main>
    );
};

export default Discussion;