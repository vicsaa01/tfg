import React from "react";

const ForgotPass = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h1>Restablecer contraseña</h1>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-4"></div>

                    <div class="col-4">

                        <form action="http://127.0.0.1:8000/forgot-pass" method="post">
                            <label for="email" class="mt-3">Correo electrónico</label>
                            <input type="email" class="form-control" name="email" required/>
                            
                            <div class="row mt-5 mb-3">
                                <div class="col-6 text-start">
                                    <a class="btn w-100 border border-1 border-dark rounded boton-volver text-dark" href="">Volver</a>
                                </div>
                                <div class="col text-end">
                                    <button type="submit" class="btn w-100 bg-dark text-white">Enviar correo</button>
                                </div>                                
                            </div>

                            <div class="row mt-5 text-center">
                                <div class="col">
                                    <a href="/login">Iniciar sesión</a>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-4"></div>
                </div>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </main>
    );
};

export default ForgotPass;