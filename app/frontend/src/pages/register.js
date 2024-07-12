import React from "react";
import { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: '',
        pass2: '',
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

        if (formData.pass == formData.pass2) {
            fetch('http://127.0.0.1:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then((response) => response.json())
            .then(() => {
                alert('Se ha registrado el usuario');
            })
            .catch((error) => {
                alert(error);
            });
        } else {
            alert('Se debe repetir la misma contraseña');
        }
    }

    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>Registro</h1>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-4"></div>

                    <div class="col-4">

                        <form onSubmit={handleSubmit}>
                            <label for="name" class="mt-3">Nombre de usuario:</label>
                            <input type="text" class="form-control" name="name" value={formData.name} onChange={handleInputChange} required/>
                            
                            <label for="email" class="mt-3">Correo electrónico:</label>
                            <input type="email" class="form-control" name="email" value={formData.email} onChange={handleInputChange} required/>

                            <label for="pass" class="mt-5">Contraseña:</label>
                            <input type="password" class="form-control" name="pass" value={formData.pass} onChange={handleInputChange} required/>

                            <label for="pass2" class="mt-3">Repetir contraseña:</label>
                            <input type="password" class="form-control" name="pass2" value={formData.pass2} onChange={handleInputChange} required/>

                            <label for="info" class="mt-5 mb-3">Añade una descripción personal (opcional):</label>
                            <textarea class="form-control" name="info" value={formData.info} onChange={handleInputChange}/>
                            
                            <div class="row mt-5 mb-3">
                                <div class="col-6 text-start">
                                    <a class="btn w-100 border border-1 border-dark rounded boton-volver text-dark" href="">Volver</a>
                                </div>
                                <div class="col text-end">
                                    <button type="submit" class="btn w-100 bg-dark text-white">Registrarse</button>
                                </div>                                
                            </div>

                            <div class="row mt-5 text-center">
                                <div class="col">
                                    <a href="/login">Ya tengo una cuenta</a>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-4"></div>
                </div>

                <br/><br/><br/><br/><br/>
            </main>
    );
};

export default Register;