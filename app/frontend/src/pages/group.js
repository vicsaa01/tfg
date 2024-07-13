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

                <div class="row mb-3 align-items-center">
                    <GroupMenu id={myGroup._id} creator_id={myGroup.creator_id} created_at={myGroup.created_at}/>
                </div>

                <br/><br/><br/>

                <div class="row mb-5">

                    <div class="col-7 m-0 border border-dark border-1 rounded pt-3 pb-3">
                        <div class="row mb-4 text-left text-dark">
                            <div class="col-6">
                                <form action="">
                                    <div class="row align-items-center">
                                        <div class="col-lg-4 col-md-5 col-sm-6"><h5 class="me-5">Discusiones</h5></div>
                                        <div class="col-lg-8 col-md-7 col-sm-6">
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
                    </div>

                    <div class="col-1"></div>

                    <div class="col-4 m-0 pe-3 border border-dark border-1 rounded pt-3 pb-3">
                        <div class="row m-0 p-0">
                            <div class="col m-0 p-0">
                                <div class="row align-items-center">
                                    <div class="col-3"><h5 class="mb-1">Miembros ({myGroup.members})</h5></div>
                                    <div class="col-3"><a class="btn border border-dark border-1 boton-volver p-1" href="">Ver todos</a></div>
                                </div>

                                <br/>

                                <div class="d-flex flex-row border border-1 rounded p-1 scrollable">
                                    <UserMini id={myGroup.creator_id}/>
                                </div>

                                <br/><br/><br/>

                                <div class="row align-items-center">
                                    <div class="col-3"><h5 class="mb-1">Ítems ({myGroup.items})</h5></div>
                                    <div class="col-3"><a class="btn border border-dark border-1 boton-volver p-1" href="">Ver todos</a></div>
                                </div>

                                <br/>

                                <div class="d-flex flex-row border border-1 rounded p-1 scrollable">
                                    <ItemMini id="0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    );
};

export default Group;