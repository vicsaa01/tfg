import React from "react";

const Register = () => {
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

                        <form action="http://127.0.0.1:8000/register" method="post">
                            <label for="name" class="mt-3">Nombre de usuario:</label>
                            <input type="text" class="form-control" name="name" required/>
                            
                            <label for="email" class="mt-3">Correo electrónico:</label>
                            <input type="email" class="form-control" name="email" required/>

                            <label for="pass" class="mt-5">Contraseña:</label>
                            <input type="password" class="form-control" name="pass" required/>

                            <label for="pass2" class="mt-3">Repetir contraseña:</label>
                            <input type="password" class="form-control" name="pass2" required/>

                            <label for="info" class="mt-5 mb-3">Añade una descripción personal (opcional):</label>
                            <textarea class="form-control" name="info"/>
                            
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