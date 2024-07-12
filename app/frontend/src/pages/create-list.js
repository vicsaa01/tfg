import React from "react";
import { useState } from "react";

const CreateList = () => {

    const [formData, setFormData] = useState({
        name: '',
        type: '',
        scope: '',
        creator_id: 420
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

        fetch('http://127.0.0.1:8000/create-list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then(() => {
            alert('Se ha creado la lista');
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
                        <h3 class="mb-5 text-dark">Crear una lista nueva</h3>

                        <form onSubmit={handleSubmit}>
                            <div class="row mb-5 text-start">
                                <label for="name" class="mb-2 p-1">Nombre:</label>
                                <input name="name" type="text" class="form-control" value={formData.name} onChange={handleInputChange} required/>
                            </div>

                            <div class="row text-start">
                                <label for="scope" class="mb-2 p-1">Elige el ámbito:</label>
                            </div>

                            <div class="row mb-5 text-start">
                                <div class="col w-100 p-3 border rounded">
                                    <div class="form-check mb-3">
                                        <input name="scope" type="radio" class="form-check-input" id="scope1" value="public" onChange={handleInputChange} required/>
                                        <label for="scope1" class="form-check-label">Pública</label>
                                    </div>
                                    <div class="form-check">
                                        <input name="scope" type="radio" class="form-check-input" id="scope2" value="private" onChange={handleInputChange} required/>
                                        <label for="scope2" class="form-check-label">Privada</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row text-start">
                                <label for="scope" class="mb-2 p-1">Elige el tipo:</label>
                            </div>

                            <div class="row mb-5 text-start">
                                <div class="col w-100 p-3 border rounded">
                                    <div class="form-check mb-3">
                                        <input name="type" type="radio" class="form-check-input" id="type1" value="unordered" onChange={handleInputChange} required/>
                                        <label for="type1" class="form-check-label">Lista sin orden</label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input name="type" type="radio" class="form-check-input" id="type2" value="ordered" onChange={handleInputChange} required/>
                                        <label for="type2" class="form-check-label">Clasificación</label>
                                    </div>
                                    <div class="form-check">
                                        <input name="type" type="radio" class="form-check-input" id="type3" value="poll" onChange={handleInputChange} required/>
                                        <label for="type3" class="form-check-label">Encuesta</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row m-5"></div>

                            <div class="row p-0 mb-5">
                                <div class="col-6 p-0 text-start">
                                    <a class="btn w-50 border border-1 border-dark rounded boton-volver text-dark" href="/community">Volver</a>
                                </div>
                                <div class="col-6 p-0 text-end">
                                    <button type="submit" class="btn w-50 bg-dark text-white">Crear lista</button>
                                </div>                                
                            </div>
                        </form>
                    </div>

                    <div class="col-3"></div>
                </div>
            </main>
    );
};

export default CreateList;