import React from "react";

const CreateDiscussion = () => {

    const handleInputChange = (e) => {}

    return(
        <main class="m-5">
                <div class="row mb-3 text-center">
                    <div class="col-3"></div>

                    <div class="col-6">
                        <h3 class="mb-5 text-dark">Iniciar una discusión</h3>

                        <form action="http://127.0.0.1:8000/create-discussion" method="post">
                            <div class="row mb-5 p-0 text-start">
                                <label for="title" class="mb-2 p-1">Título:</label>
                                <input name="title" type="text" class="form-control" onChange={handleInputChange} required/>
                            </div>

                            <div class="row mb-5 p-0 text-start">
                                <label for="text" class="mb-2 p-1">Texto:</label>
                                <textarea name="text" class="form-control" onChange={handleInputChange} required/>
                            </div>

                            <div class="row mb-5 p-0 text-start">
                                <label for="tags" class="mb-2 p-1">Etiquetas (separadas por comas):</label>
                                <input name="tags" type="text" class="form-control" onChange={handleInputChange} required/>
                            </div>

                            <div class="row m-5"></div>

                            <div class="row p-0 mb-5">
                                <div class="col-6 p-0 text-start">
                                    <a class="btn w-50 border border-1 border-dark rounded boton-volver text-dark" href="/community">Volver</a>
                                </div>
                                <div class="col-6 p-0 text-end">
                                    <button type="submit" class="btn w-50 bg-dark text-white">Iniciar discusión</button>
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

export default CreateDiscussion;