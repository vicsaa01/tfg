import React from "react";

import { useState, useEffect } from "react";

import DiscussionCard from "../components/DiscussionCard";
import UserMini from "../components/UserMini";
import ItemMini from "../components/ItemMini";
import GroupMenu from "../components/GroupMenu";

const Group = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    //EXTRAER DE LA BD
    const [myGroup, setMyGroup] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/group?id=' + id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMyGroup(data);
          });
    }, [])

    //EXTRAER DE LA BD
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/discussions?group_id=' + id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setDiscussions(data);
          });
    }, [])

    return(
        <main class="m-5">
                <div class="row mt-3 mb-3 text-start text-dark">
                    <div class="col-12">
                        <h3>{myGroup.name}</h3>
                    </div>
                </div>

                <div class="row mb-5 align-items-center">
                    <GroupMenu id={myGroup._id} creator_id={myGroup.creator_id} created_at={myGroup.created_at}/>
                </div>

                <br/><br/><br/>

                <div class="row mb-5">
                    <div class="col-12 m-0 ps-3 pe-3">
                        <div class="row m-0 p-0">
                            <div class="col-5 m-0 p-0">
                                <div class="row align-items-center">
                                    <div class="col"><h5 class="mt-3 mb-3">Miembros ({myGroup.members})</h5></div>
                                    <div class="col text-end"><a class="btn rounded border border-1 border-dark boton-volver p-1 mt-3 mb-3" href="">Ver todos los miembros</a></div>
                                </div>
                            </div>

                            <div class="col-2"></div>

                            <div class="col-5 m-0 p-0">
                                <div class="row align-items-center">
                                    <div class="col"><h5 class="mt-3 mb-3">Ítems ({myGroup.items})</h5></div>
                                    <div class="col text-end"><a class="btn rounded border border-1 border-dark boton-volver p-1 mt-3 mb-3" href="">Ver todos los ítems</a></div>
                                </div>
                            </div>
                        </div>

                        {/* EXTRAER DE LA BD -> NUEVOS COMPONENTES? */}
                        <div class="row m-0 p-0">
                            <div class="col-5 border border-1 rounded">
                                <div class="d-flex flex-row p-3 scrollable">
                                    <UserMini id={myGroup.creator_id}/>
                                </div>
                            </div>

                            <div class="col-2"></div>

                            <div class="col-5 border border-1 rounded">
                                <div class="d-flex flex-row p-3 scrollable">
                                    <ItemMini id="0"/>
                                    <ItemMini id="1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/><br/><br/><br/><br/>

                <div class="row mb-4 text-left text-dark">
                    <div class="col-6">
                        <form action="">
                            <div class="row align-items-center">
                                <div class="col-lg-2 col-md-3 col-sm-4"><h5 class="m-3 me-5">Discusiones</h5></div>
                                <div class="col-lg-10 col-md-9 col-sm-8">
                                    <select class="form-select w-auto p-1 border border-1 border-dark" name="orderby" id="selectlist">
                                        <option value="new">Más recientes</option>
                                        <option value="popular">Más populares</option>
                                        <option value="controversial">Más controvertidas</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-6 text-end">
                        <a class="btn bg-dark text-white" href={"/create-discussion?group_id=" + myGroup._id}>+ Iniciar una discusión</a>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-12">
                        <div class="scrollable-card-group my-cards">
                            {discussions.map((discussion) => (
                                <DiscussionCard id={discussion._id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
    );
};

export default Group;