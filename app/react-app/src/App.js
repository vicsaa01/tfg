import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './img/logo.png'
import search_icon from './img/search.png'
import user_avatar from './img/test-user.png'
import item_icon from './img/test-rpg.jpg'
import item_icon_alt from './img/test-lebowski.jpg'

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Fetch data from the Express server
    axios.get('http://localhost:8000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);
  return (
    
    <body class="h-100">
        <div class="container-fluid h-100 d-flex flex-column">
            <header>
                <div class="row">
                    <div class="navbar w-100 bg-dark">
                        <div class="col-1">
                            <a class="navbar-brand ms-3 me-3" href="home.html">
                                <img src={logo} width="50" height="50"/>
                            </a>
                        </div>
                        
                        <div class="col-lg-6 col-md-5 col-sm-1">
                            <div class="row">
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center me-3">Música</a>
                              </div>
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center me-3" href="games.html">Juegos</a>
                              </div>
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center me-3">Cine</a>
                              </div>
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center me-3">TV</a>
                              </div>
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center me-3">Libros</a>
                              </div>
                              <div class="col">
                                <a class="boton-navbar btn d-none d-md-block pt-3 pb-3 rounded text-white text-center" href="community.html">Comunidad</a>
                              </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-5 col-md-6 col-sm-10">
                            <div class="d-flex justify-content-end">
                                <form action="../ext/search.php" onsubmit="return validateSearch(this, 'es')">
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
                                
                                <a class="me-4" href="myuser.html">
                                    <img src={user_avatar} class="rounded-circle" width="40" height="40"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main class="m-5">
                <div class="row mt-3 mb-4 text-left text-dark">
                    <div class="col-12">
                        <h3>Últimos lanzamientos</h3>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-12">
                        <div class="scrollable-card-group items-in-home">
                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">The Elder Scrolls V: Skyrim</h5>
                                            <p class="card-text scrollable-p">
                                                Tipo: videojuego<br/>
                                                Géneros: aventura, acción
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">90/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">The Elder Scrolls V: Skyrim</h5>
                                            <p class="card-text scrollable-p">
                                                Tipo: videojuego<br/>
                                                Géneros: aventura, acción
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">90/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">The Elder Scrolls V: Skyrim</h5>
                                            <p class="card-text scrollable-p">
                                                Tipo: videojuego<br/>
                                                Géneros: aventura, acción
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">90/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">The Elder Scrolls V: Skyrim</h5>
                                            <p class="card-text scrollable-p">
                                                Tipo: videojuego<br/>
                                                Géneros: aventura, acción
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">90/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">The Elder Scrolls V: Skyrim</h5>
                                            <p class="card-text scrollable-p">
                                                Tipo: videojuego<br/>
                                                Géneros: aventura, acción
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">90/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">The Elder Scrolls V: Skyrim</h5>
                                            <p class="card-text scrollable-p">
                                                Tipo: videojuego<br/>
                                                Géneros: aventura, acción
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">90/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">The Elder Scrolls V: Skyrim</h5>
                                            <p class="card-text scrollable-p">
                                                Tipo: videojuego<br/>
                                                Géneros: aventura, acción
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">90/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">The Elder Scrolls V: Skyrim</h5>
                                            <p class="card-text scrollable-p">
                                                Tipo: videojuego<br/>
                                                Géneros: aventura, acción
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">90/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">The Elder Scrolls V: Skyrim</h5>
                                            <p class="card-text scrollable-p">
                                                Tipo: videojuego<br/>
                                                Géneros: aventura, acción
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">90/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">The Elder Scrolls V: Skyrim</h5>
                                            <p class="card-text scrollable-p">
                                                Tipo: videojuego<br/>
                                                Géneros: aventura, acción
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">90/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row m-5"></div>

                <div class="row mb-4 text-left text-dark">
                    <div class="col-12">
                        <h3>Películas más populares</h3>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-12">
                        <div class="scrollable-card-group items-in-home">
                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon_alt} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">El Gran Lebowski</h5>
                                            <p class="card-text scrollable-p">
                                                Año: 1998<br/>
                                                Géneros: comedia, crimen
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">80/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon_alt} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">El Gran Lebowski</h5>
                                            <p class="card-text scrollable-p">
                                                Año: 1998<br/>
                                                Géneros: comedia, crimen
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">80/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon_alt} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">El Gran Lebowski</h5>
                                            <p class="card-text scrollable-p">
                                                Año: 1998<br/>
                                                Géneros: comedia, crimen
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">80/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon_alt} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">El Gran Lebowski</h5>
                                            <p class="card-text scrollable-p">
                                                Año: 1998<br/>
                                                Géneros: comedia, crimen
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">80/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon_alt} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">El Gran Lebowski</h5>
                                            <p class="card-text scrollable-p">
                                                Año: 1998<br/>
                                                Géneros: comedia, crimen
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">80/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon_alt} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">El Gran Lebowski</h5>
                                            <p class="card-text scrollable-p">
                                                Año: 1998<br/>
                                                Géneros: comedia, crimen
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">80/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon_alt} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">El Gran Lebowski</h5>
                                            <p class="card-text scrollable-p">
                                                Año: 1998<br/>
                                                Géneros: comedia, crimen
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">80/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon_alt} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">El Gran Lebowski</h5>
                                            <p class="card-text scrollable-p">
                                                Año: 1998<br/>
                                                Géneros: comedia, crimen
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">80/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon_alt} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">El Gran Lebowski</h5>
                                            <p class="card-text scrollable-p">
                                                Año: 1998<br/>
                                                Géneros: comedia, crimen
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">80/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="scrollable-card item-in-home">
                                <div class="card">
                                    <a class="btn m-0 p-0 text-left" href="item.html">
                                        <img src={item_icon_alt} class="card-img-top" alt="Item icon" height="300" width="200"/>
                                        <div class="card-body">
                                            <h5 class="card-title">El Gran Lebowski</h5>
                                            <p class="card-text scrollable-p">
                                                Año: 1998<br/>
                                                Géneros: comedia, crimen
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <h5>Puntuación: <span class="valoracion-positiva rounded p-1">80/100</span></h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div class="row mt-5 text-center">
                <div class="w-100 bg-dark text-white">
                    <p class="m-5">(c) 2024 Víctor Saakes</p>
                </div>
            </div>
        </div>
    </body>

  );
};

export default App;