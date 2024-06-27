import React from "react";

import UserAvatar from "../img/test-user-smiley.png";

const UserEdit = () => {
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
                                <img src={UserAvatar} class="rounded float-end" width="200" height="200"/>
                            </div>
                            
                            <div class="col">
                                <button class="mt-5 ms-3 p-1 rounded bg-dark text-white align-text-bottom float-start">Cambiar avatar</button>
                            </div>
                        </div>

                        <form action="">
                            <label for="nombre" class="mt-5">Nombre de usuario</label>
                            <input type="text" class="form-control" name="nombre"/>

                            <label for="descripcion" class="mt-3">Descripción</label>
                            <textarea name="descripcion" class="form-control w-100" placeholder="Añade una descripción..."></textarea>
                            
                            <div class="row mt-5 mb-4">
                                <div class="col-6 text-start">
                                    <a class="btn w-50 border border-1 border-dark rounded boton-volver text-dark" href="/user">Volver</a>
                                </div>
                                <div class="col-6 text-end">
                                    <button type="submit" class="btn w-50 bg-dark text-white">Guardar</button>
                                </div>                                
                            </div>
                        </form>
                    </div>

                    <div class="col-3"></div>
                </div>

                <br/><br/><br/><br/><br/>
            </main>
    );
};

export default UserEdit;