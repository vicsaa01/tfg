import React from "react";

import GroupCard from "../components/GroupCard"
import ListCard from "../components/ListCard"

const Community = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-left">
                    <div class="col-8"><h3>Explorar grupos</h3></div>

                    <div class="col-2"></div>

                    <div class="col-2">
                        <div class="d-flex flex-row justify-content-end">
                            <a class="btn m-0 r-0 bg-dark text-white" href="/create-group">
                                + Crear nuevo grupo
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12">
                        <div class="scrollable-card-group groups">
                            <GroupCard id="0"/>
                            <GroupCard id="1"/>
                        </div>
                    </div>
                </div>

                <div class="row m-5"></div>

                <div class="row mb-4 text-left">
                    <div class="col-8"><h3>Explorar listas y encuestas</h3></div>

                    <div class="col-2"></div>

                    <div class="col-2">
                        <div class="d-flex flex-row justify-content-end">
                            <a class="btn m-0 r-0 bg-dark text-white" href="/create-list">
                                + Crear nueva lista
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12">
                        <div class="d-flex flex-row w-100 p-3">
                            <div class="col-lg-6 col-md-3"><h5 class="card-title">Nombre</h5></div>
                            <div class="col-lg-2 col-md-3"><p class="card-text">Tipo</p></div>
                            <div class="col-lg-2 col-md-3"><p class="card-text">Creada por</p></div>
                            <div class="col-lg-2 col-md-3"><p class="card-text">Visitas</p></div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="scrollable-card-group my-cards">
                            <ListCard id="0"/>
                            <ListCard id="1"/>
                        </div>
                    </div>
                </div>
            </main>
    );
};

export default Community;