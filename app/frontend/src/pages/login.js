import React from "react";

const Login = () => {
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

                        <form action="http://127.0.0.1:8000/login" method="post">
                            <label for="name" class="mt-3">Nombre de usuario</label>
                            <input type="text" class="form-control" name="name" required/>

                            <label for="pass" class="mt-3">Contraseña</label>
                            <input type="password" class="form-control" name="pass" required/>
                            
                            <div class="row mt-5 mb-3">
                                <div class="col-6 text-start">
                                    <a class="btn w-100 border border-1 border-dark rounded boton-volver text-dark" href="">Volver</a>
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
                        </form>
                    </div>

                    <div class="col-4"></div>
                </div>

                <br/><br/><br/><br/><br/>
            </main>
    );
};

export default Login;