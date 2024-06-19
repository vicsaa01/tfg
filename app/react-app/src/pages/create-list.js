import React from "react";

const CreateList = () => {
    return(
        <main class="m-5">
                <div class="row mb-3 text-center">
                    <div class="col-3"></div>

                    <div class="col-6">
                        <h3 class="mb-4 text-dark">Crear una lista nueva</h3>

                        <form action="">
                            <div class="row mb-4 text-left">
                                <label for="name" class="mr-3">Nombre:</label>
                                <input name="name" type="text" class="form-control" required/>
                            </div>

                            <div class="row text-left">
                                <label for="scope" class="mr-3">Elige el ámbito:</label>
                            </div>

                            <div class="row mb-4 text-left">
                                <div class="col w-100 p-3 border rounded">
                                    <div class="form-check mb-3">
                                        <input name="scope" type="radio" class="form-check-input" id="scope1" required/>
                                        <label for="scope1" class="form-check-label">Pública</label>
                                    </div>
                                    <div class="form-check">
                                        <input name="scope" type="radio" class="form-check-input" id="scope2" required/>
                                        <label for="scope2" class="form-check-label">Privada</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row text-left">
                                <label for="scope" class="mr-3">Elige el tipo:</label>
                            </div>

                            <div class="row mb-4 text-left">
                                <div class="col w-100 p-3 border rounded">
                                    <div class="form-check mb-3">
                                        <input name="type" type="radio" class="form-check-input" id="type1" required/>
                                        <label for="type1" class="form-check-label">Lista sin orden</label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input name="type" type="radio" class="form-check-input" id="type2" required/>
                                        <label for="type2" class="form-check-label">Clasificación</label>
                                    </div>
                                    <div class="form-check">
                                        <input name="type" type="radio" class="form-check-input" id="type3" required/>
                                        <label for="type3" class="form-check-label">Encuesta</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row m-5"></div>

                            <div class="row p-0 mb-4">
                                <div class="col-6 p-0 text-left">
                                    <a class="btn w-50 border border-3 border-dark rounded boton-volver text-dark" href="/community">Volver</a>
                                </div>
                                <div class="col-6 p-0 text-right">
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