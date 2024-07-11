import React from "react";

const AddItem = () => {

    const handleInputChange = (e) => {}

    return(
        <main class="m-5">
                <div class="row mb-3 text-center">
                    <div class="col-3"></div>

                    <div class="col-6">
                        <h3 class="mb-5 text-dark">Añadir un ítem nuevo</h3>

                        <form action="http://127.0.0.1:8000/add-item" method="post">
                            <div class="row mb-5 p-0 text-start">
                                <label for="name" class="mb-2 p-1">Nombre:</label>
                                <input name="name" type="text" class="form-control" onChange={handleInputChange} required/>
                            </div>

                            <div class="row mb-5 p-0 text-start">
                                <label for="info" class="mb-2 p-1">Descripción:</label>
                                <textarea name="info" class="form-control" onChange={handleInputChange}/>
                            </div>

                            <div class="row text-start">
                                <label for="scope" class="mb-2 p-1">Tipo de ítem:</label>
                            </div>

                            <div class="row mb-5 text-start">
                                <div class="col w-100 p-3 border rounded">
                                    <div class="form-check mb-1">
                                        <input name="type" type="radio" class="form-check-input" id="music" value="music" required/>
                                        <label for="music" class="form-check-label">Música</label>
                                    </div>
                                    <div class="form-check mb-1">
                                        <input name="type" type="radio" class="form-check-input" id="videogame" value="videogame" required/>
                                        <label for="videogame" class="form-check-label">Videojuego</label>
                                    </div>
                                    <div class="form-check mb-1">
                                        <input name="type" type="radio" class="form-check-input" id="movie" value="movie" required/>
                                        <label for="movie" class="form-check-label">Película</label>
                                    </div>
                                    <div class="form-check mb-1">
                                        <input name="type" type="radio" class="form-check-input" id="tv" value="tv" required/>
                                        <label for="tv" class="form-check-label">Serie de TV</label>
                                    </div>
                                    <div class="form-check mb-1">
                                        <input name="type" type="radio" class="form-check-input" id="book" value="book" required/>
                                        <label for="book" class="form-check-label">Libro</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-5 p-0 text-start">
                                <label for="genre" class="mb-2 p-1">Género:</label>
                                <input name="genre" type="text" class="form-control" onChange={handleInputChange} required/>
                            </div>

                            <div class="row mb-5 p-0 text-start">
                                <label for="year" class="mb-2 p-1">Año de publicación:</label>
                                <input name="year" type="number" class="form-control" required/>
                            </div>

                            <div class="row m-5"></div>

                            <div class="row p-0 mb-5">
                                <div class="col-6 p-0 text-start">
                                    <a class="btn w-50 border border-1 border-dark rounded boton-volver text-dark" href="/community">Volver</a>
                                </div>
                                <div class="col-6 p-0 text-end">
                                    <button type="submit" class="btn w-50 bg-dark text-white">Añadir ítem</button>
                                </div>                                
                            </div>
                        </form>

                        <br/><br/><br/>
                    </div>

                    <div class="col-3"></div>
                </div>
            </main>
    );
};

export default AddItem;