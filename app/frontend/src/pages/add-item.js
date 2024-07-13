import React from "react";

import { useState } from "react";

const AddItem = () => {

    const [formData, setFormData] = useState({
        name: '',
        info: '',
        type: '',
        genres: '',
        creator: '',
        year: 0,
        country: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        fetch('http://127.0.0.1:8000/add-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
            alert('Se ha añadido el ítem');
            window.location.href = '/item?id=' + data._id;
        })
        .catch((error) => {
            alert(error);
        });
    }

    return(
        <main class="m-5">
                <div class="row mb-3 text-center">
                    <div class="col-3"></div>

                    <div class="col-6">
                        <h3 class="mb-5 text-dark">Añadir un ítem nuevo</h3>

                        <form onSubmit={handleSubmit}>
                            <div class="row mb-5 p-0 text-start">
                                <label for="name" class="mb-2 p-1">Nombre:</label>
                                <input name="name" type="text" class="form-control" value={formData.name} onChange={handleInputChange} required/>
                            </div>

                            <div class="row mb-5 p-0 text-start">
                                <label for="info" class="mb-2 p-1">Descripción:</label>
                                <textarea name="info" class="form-control" value={formData.info} onChange={handleInputChange}/>
                            </div>

                            <div class="row text-start">
                                <label for="type" class="mb-2 p-1">Tipo de ítem:</label>
                            </div>

                            <div class="row mb-5 text-start">
                                <div class="col w-100 p-3 border rounded">
                                    <div class="form-check mb-1">
                                        <input name="type" type="radio" class="form-check-input" id="music" value="música" onChange={handleInputChange} required/>
                                        <label for="music" class="form-check-label">Música</label>
                                    </div>
                                    <div class="form-check mb-1">
                                        <input name="type" type="radio" class="form-check-input" id="videogame" value="videojuego" onChange={handleInputChange} required/>
                                        <label for="videogame" class="form-check-label">Videojuego</label>
                                    </div>
                                    <div class="form-check mb-1">
                                        <input name="type" type="radio" class="form-check-input" id="movie" value="película" onChange={handleInputChange} required/>
                                        <label for="movie" class="form-check-label">Película</label>
                                    </div>
                                    <div class="form-check mb-1">
                                        <input name="type" type="radio" class="form-check-input" id="tv" value="serie" onChange={handleInputChange} required/>
                                        <label for="tv" class="form-check-label">Serie de TV</label>
                                    </div>
                                    <div class="form-check mb-1">
                                        <input name="type" type="radio" class="form-check-input" id="book" value="libro" onChange={handleInputChange} required/>
                                        <label for="book" class="form-check-label">Libro</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-5 p-0 text-start">
                                <label for="genres" class="mb-2 p-1">Género:</label>
                                <input name="genres" type="text" class="form-control" value={formData.genre} onChange={handleInputChange} required/>
                            </div>

                            <div class="row mb-5 p-0 text-start">
                                <label for="creator" class="mb-2 p-1">Creador (artista/estudio/director/escritor/autor):</label>
                                <input name="creator" type="text" class="form-control" value={formData.creator} onChange={handleInputChange} required/>
                            </div>

                            <div class="row mb-5 p-0 text-start">
                                <label for="year" class="mb-2 p-1">Año de publicación:</label>
                                <input name="year" type="number" class="form-control" value={formData.year} onChange={handleInputChange} required/>
                            </div>

                            <div class="row mb-5 p-0 text-start">
                                <label for="country" class="mb-2 p-1">País de origen:</label>
                                <input name="country" type="text" class="form-control" value={formData.country} onChange={handleInputChange} required/>
                            </div>

                            <div class="row m-5"></div>

                            <div class="row p-0 mb-5">
                                <div class="col-6 p-0 text-start">
                                    <a class="btn w-50 border border-1 border-dark rounded boton-volver text-dark" href="/">Volver</a>
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