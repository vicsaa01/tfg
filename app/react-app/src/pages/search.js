import React from "react";

import SearchCard from "../components/SearchCard";

const Search = () => {
    return(
            <main class="m-5">
                <div class="row mt-3 mb-4 text-left text-dark">
                    <div class="col-12">
                        <h3>Resultados de búsqueda para "El gran"</h3>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col">
                        <form>
                            <div class="row">
                                <div class="col-lg-2 col-md-3 col-sm-4"><p class="mt-3 ms-1">Ordenar por:</p></div>

                                <div class="col-2"></div>

                                <div class="col-lg-2 col-md-3 col-sm-4"><p class="mt-3 ms-1">Filtrar por:</p></div>
                            </div>

                            <div class="row">
                                <div class="col-lg-2 col-md-3">
                                            <select class="form-select p-1 border border-1 border-dark" id="selectlist">
                                                <option value="new">Más nuevos</option>
                                                <option value="popular">Más populares</option>
                                            </select>
                                </div>

                                <div class="col-2"></div>

                                <div class="col-lg-2 col-md-3 text-end">
                                            <select class="form-select p-1 border border-1 border-dark" id="selectlist">
                                                <option value="music">Música</option>
                                                <option value="games">Juegos</option>
                                                <option value="movies">Películas</option>
                                                <option value="tv">Series TV</option>
                                                <option value="books">Libros</option>
                                                <option value="groups">Grupos</option>
                                                <option value="lists">Listas</option>
                                                <option value="discussions">Discusiones</option>
                                            </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-12">
                        <div class="scrollable-card-group my-cards">
                            <SearchCard/>
                            <SearchCard/>
                            <SearchCard/>
                        </div>
                    </div>
                </div>
            </main>
    );
};

export default Search;