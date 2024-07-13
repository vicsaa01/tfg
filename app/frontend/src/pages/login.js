import React from "react";

import { useState } from "react";
import { useCookies } from 'react-cookie';
import { useLocation, Navigate } from "react-router-dom";

const Login = (props) => {

    props.setNav(false);

    const [cookies, setCookie] = useCookies(['session']);


    // FORMULARIO

    const [formData, setFormData] = useState({
        name: '',
        pass: ''
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

        fetch('http://127.0.0.1:8000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
                if (data.hasOwnProperty('access_token')) {
                    let session = {
                        user_id: data.user_id,
                        access_token: data.access_token
                    };
                    setCookie('session', session, {path: '/'});
                    // setCookie('session', session, {path: '/', expires});
                    props.setNav(false);
                    window.location.href = '/';
                } else {
                    alert(data.message);
                }
        })
        .catch((error) => {
                alert(error);
        });
    }


    // VOLVER ATRÁS

    const location = useLocation();
    console.log(location);

    const prevUrl = location.state.prevUrl;

    const has_id = location.state.has_id;
    var id = '';
    if (has_id) id = location.state.id;

    const has_search = location.state.has_search;
    var search = '';
    if (has_search) search = location.state.search;

    const [goBack, setGoBack] = useState(false);

    const handleGoBack = () => {
        setGoBack(true);
    }

    const GoBack = () => {
        if (goBack == true) {
            setGoBack(false);
            if (has_id)
                return <Navigate to={prevUrl + '?id=' + id} />;
            else
                if (has_search)
                    return <Navigate to={prevUrl + '?search=' + search} />;
                else
                    return <Navigate to={prevUrl} />;
        }
    }


    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>Inicio de sesión</h1>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-4"></div>

                    <div class="col-4">

                        <form onSubmit={handleSubmit}>
                            <label for="name" class="mt-3">Nombre de usuario</label>
                            <input type="text" class="form-control" name="name" value={formData.name} onChange={handleInputChange} required/>

                            <label for="pass" class="mt-3">Contraseña</label>
                            <input type="password" class="form-control" name="pass" value={formData.pass} onChange={handleInputChange} required/>
                            
                            <div class="row mt-5 mb-3">
                                <div class="col-6 text-start">
                                    <a class="btn w-100 border border-1 border-dark rounded boton-volver text-dark" href="" onClick={handleGoBack}>Volver</a>
                                    <GoBack/>
                                </div>
                                <div class="col text-end">
                                    <button type="submit" class="btn w-100 bg-dark text-white">Iniciar sesión</button>
                                </div>                                
                            </div>

                            <div class="row mt-5 text-center">
                                <div class="col">
                                    <a href="/forgot-pass">He olvidado mi contraseña</a>
                                </div>
                            </div>

                            <div class="row mt-3 text-center">
                                <div class="col">
                                    <a href="/register">Todavía no tengo una cuenta</a>
                                </div>
                            </div>

                            <div class="row mt-3 text-center">
                                <div class="col">
                                    <a href="/">Volver a la página principal</a>
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

export default Login;