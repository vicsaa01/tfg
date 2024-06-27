import React from "react";

const CreateGroup = () => {
    return(
        <main class="m-5">
                <div class="row mb-3 text-center">
                    <div class="col-3"></div>

                    <div class="col-6">
                        <h3 class="mb-5 text-dark">Crear un grupo nuevo</h3>

                        <form action="">
                            <div class="row mb-5 p-0 text-start">
                                <label for="name" class="mb-2 p-1">Nombre:</label>
                                <input name="name" type="text" class="form-control" required/>
                            </div>

                            <div class="row text-start">
                                <label for="scope" class="mb-2 p-1">Elige el ámbito:</label>
                            </div>

                            <div class="row mb-5 text-start">
                                <div class="col w-100 p-3 border rounded">
                                    <div class="form-check mb-3">
                                        <input name="scope" type="radio" class="form-check-input" id="scope1" value="open" required/>
                                        <label for="scope1" class="form-check-label">Abierto (cualquiera se puede unir)</label>
                                    </div>
                                    <div class="form-check">
                                        <input name="scope" type="radio" class="form-check-input" id="scope2" value="closed" required/>
                                        <label for="scope2" class="form-check-label">Cerrado (solo por invitación o solicitud)</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row m-5"></div>

                            <div class="row p-0 mb-5">
                                <div class="col-6 p-0 text-start">
                                    <a class="btn w-50 border border-1 border-dark rounded boton-volver text-dark" href="/community">Volver</a>
                                </div>
                                <div class="col-6 p-0 text-end">
                                    <button type="submit" class="btn w-50 bg-dark text-white">Crear grupo</button>
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

export default CreateGroup;