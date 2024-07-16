import React from "react";

import { useState } from "react";

const UserEdit = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    const [formData, setFormData] = useState({
        name: '',
        info: ''
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

        fetch('http://127.0.0.1:8000/edit-user?id=' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.modified == 1) {
                alert('Se ha actualizado el perfil de usuario');
                setFormData({
                    name: '',
                    info: ''
                });
                window.location.href = '/user?id=' + id;
            } else {
                alert('No se ha podido actualizar el perfil de usuario. Comprueba que los valores son distintos a los anteriores.')
            }
        })
        .catch((error) => {
            alert(error);
        });
    }

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h3>Editar perfil</h3>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-3"></div>

                    <div class="col-6">
                        <div class="row">
                            <div class="col">
                                <img src='' class="rounded float-end" width="200" height="200"/>
                            </div>
                            
                            <div class="col">
                                <button class="mt-5 ms-3 p-1 rounded bg-dark text-white align-text-bottom float-start">Cambiar avatar</button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <label for="name" class="mt-5">Nombre de usuario</label>
                            <input type="text" class="form-control" name="name" value={formData.name} onChange={handleInputChange}/>

                            <label for="info" class="mt-3">Descripción</label>
                            <textarea name="info" class="form-control w-100" placeholder="Añade una descripción..." value={formData.info} onChange={handleInputChange}></textarea>
                            
                            <div class="row mt-5 mb-4">
                                <div class="col-6 text-start">
                                    <a class="btn w-50 border border-1 border-dark rounded boton-volver text-dark" href={"/user?id=" + id}>Volver</a>
                                </div>
                                <div class="col-6 text-end">
                                    <button type="submit" class="btn w-50 bg-dark text-white">Guardar cambios</button>
                                </div>                                
                            </div>
                        </form>
                    </div>

                    <div class="col-3"></div>
                </div>
            </main>
    );
};

export default UserEdit;