import React from "react";

import DiscussionCard from "../components/DiscussionCard";
import UserMini from "../components/UserMini";
import ItemMini from "../components/ItemMini";

const Group = () => {
    return(
        <main class="m-5">
                <div class="row mt-3 mb-3 text-left text-dark">
                    <div class="col-12">
                        <h3>RPGers International</h3>
                    </div>
                </div>

                <div class="row mb-5 align-items-center">
                    <div class="col-6 text-left">
                        <p class="mt-3 mb-3 text-dark">Grupo creado por <a href="/user">vic42</a> el 10/10/2022</p>
                    </div>
                    <div class="col-6 text-right">
                        <a class="btn bg-dark text-white">Unirse a este grupo</a>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12 m-0 pl-3 pr-3">
                        <div class="row m-0 mb-3 p-0">
                            <div class="col-5 p-0">
                                <div class="row align-items-center">
                                    <h5 class="m-3">Miembros (100)</h5>
                                    <a href="">Ver todos</a>
                                </div>
                            </div>

                            <div class="col-2"></div>

                            <div class="col-5 p-0">
                                <div class="row align-items-center">
                                    <h5 class="m-3">Ítems (100)</h5>
                                    <a href="">Ver todos</a>
                                </div>
                            </div>
                        </div>

                        <div class="row m-0 p-0">
                            <div class="col-5 border border-3 rounded">
                                <div class="d-flex flex-row p-3 scrollable">
                                    <UserMini />
                                    <UserMini />
                                    <UserMini />
                                    <UserMini />
                                    <UserMini />
                                    <UserMini />
                                    <UserMini />
                                    <UserMini />
                                    <UserMini />
                                    <UserMini />
                                </div>
                            </div>

                            <div class="col-2"></div>

                            <div class="col-5 border border-3 rounded">
                                <div class="d-flex flex-row p-3 scrollable">
                                    <ItemMini />
                                    <ItemMini />
                                    <ItemMini />
                                    <ItemMini />
                                    <ItemMini />
                                    <ItemMini />
                                    <ItemMini />
                                    <ItemMini />
                                    <ItemMini />
                                    <ItemMini />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row m-5"></div>

                <div class="row mb-4 text-left text-dark">
                    <div class="col-12">
                        <form action="">
                            <div class="row align-items-center">
                                <h5 class="m-3 mr-5">Discusiones</h5>
                                <select class="form-control w-auto p-1 border border-3 border-dark" id="selectlist">
                                    <option value="new">Más recientes</option>
                                    <option value="popular">Más populares</option>
                                    <option value="controversial">Más controvertidas</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12">
                        <div class="scrollable-card-group my-cards">
                            <DiscussionCard />
                            <DiscussionCard />
                            <DiscussionCard />
                            <DiscussionCard />
                            <DiscussionCard />
                            <DiscussionCard />
                            <DiscussionCard />
                        </div>
                    </div>
                </div>
            </main>
    );
};

export default Group;