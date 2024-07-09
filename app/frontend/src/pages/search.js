import React from "react";
import { useState, useEffect } from "react";

import SearchCardList from "../components/SearchCardList";

const Search = (props) => {
    const queryParameters = new URLSearchParams(window.location.search)
    const search = queryParameters.get("search")
    const order = queryParameters.get("order")
    const filter = queryParameters.get("filter")

    const [filters, setFilters] = useState(["popular", "all"]);

    const handleOrderSelect = (e) => {
        setFilters([e.target.value, filters[1]])
    }

    const handleFilterSelect = (e) => {
        setFilters([filters[0], e.target.value])
    }

    return(
            <main class="m-5">
                <div class="row mt-3 mb-4 text-left text-dark">
                    <div class="col-12">
                        <h3>Resultados de búsqueda para "{search}"</h3>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col">
                        <form id="searchForm">
                            <div class="row">
                                <div class="col-lg-2 col-md-3 col-sm-4"><p class="mt-3 ms-1">Ordenar por:</p></div>

                                <div class="col-2"></div>

                                <div class="col-lg-2 col-md-3 col-sm-4"><p class="mt-3 ms-1">Filtrar por:</p></div>
                            </div>

                            <div class="row">
                                <div class="col-lg-2 col-md-3">
                                            <select class="form-select p-1 border border-1 border-dark" name="order_select" onChange={handleOrderSelect}>
                                                <option value="popular">Más populares</option>
                                                <option value="newest">Más nuevos</option>
                                            </select>
                                </div>

                                <div class="col-2"></div>

                                <div class="col-lg-2 col-md-3 text-end">
                                            <select class="form-select p-1 border border-1 border-dark" name="filter_select" onChange={handleFilterSelect}>
                                                <option value="all">Ítems (todos los tipos)</option>
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

                                <div class="col-1"></div>

                                <div class="col-lg-2 col-md-3 text-end">
                                    <a class="btn rounded bg-dark text-white mt-0 mb-3" href={'/search?search=' + search + '&order=' + filters[0] + '&filter=' + filters[1]}>Buscar</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-12">
                        <SearchCardList search={search} orderby={order} filterby={filter}/>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>
            </main>
    );
};

export default Search;