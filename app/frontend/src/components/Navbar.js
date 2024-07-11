import React from "react";

import logo from '../img/logo.png'
import search_icon from '../img/search.png'
import user_avatar from '../img/test-user-smiley.png'

const Navbar = () => {

  const validateSearch = () => {}

    return(
        <header>
                <div class="row">
                    <div class="navbar w-100 bg-dark">
                        <div class="col-1">
                            <a class="navbar-brand ms-3 me-3" href="/">
                                <img src={logo} width="50" height="50"/>
                            </a>
                        </div>
                        
                        <div class="col-lg-6 col-md-5 col-sm-1">
                            <div class="row">
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center me-3" href="/music">Música</a>
                              </div>
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center me-3" href="/games">Juegos</a>
                              </div>
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center me-3" href="/movies">Cine</a>
                              </div>
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center me-3" href="/tv">TV</a>
                              </div>
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center me-3" href="/books">Libros</a>
                              </div>
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center" href="/community">Comunidad</a>
                              </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-5 col-md-6 col-sm-10">
                            <div class="d-flex justify-content-end">
                                <form action="/search" onsubmit={validateSearch}>
                                    <div class="row">
                                      <div class="col-8 p-0 m-0">
                                        <input type="text" class="form-control me-1" placeholder="Buscar..." name="search"/>
                                      </div>
                                      <div class="col-4 p-0 m-0">
                                        <button type="submit" class="btn rounded bg-white pt-1">
                                            <img src={search_icon} width="15" height="15"/>
                                        </button>
                                      </div>
                                    </div>
                                </form>
                                
                                <a class="me-4" href="/user">
                                    <img src={user_avatar} class="rounded-circle" width="40" height="40"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    );
};

export default Navbar;