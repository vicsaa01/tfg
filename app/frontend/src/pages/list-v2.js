import React from "react";

import { useState, useEffect } from "react";

import ListMenu from "../components/ListMenu";
import ListContent from "../components/ListContent";

import baseUrl from "../url";

const List = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    //EXTRAER LISTA DE LA BD

    const [myList, setMyList] = useState([]);

    const [myUser, setMyUser] = useState([]);

    useEffect(() => {
        fetch(baseUrl + '/list?id=' + id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.hasOwnProperty('message')) {
                alert(data.message);
                window.location.href = '/';
            } else {
                console.log(data);
                setMyList(data);
    
                fetch(baseUrl + '/user?id=' + data.creator_id)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setMyUser(data);
                });
            }
          });
    }, [baseUrl + '/list?id=' + id])

    // view

    const [viewed, setViewed] = useState(false);

    const handleView = () => {
        if (!viewed) {
            fetch(baseUrl + '/view-list?id=' + id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log('Viewing ' + data.modified + ' list(s).');
            })
            .catch((error) => {
                alert(error);
            });

            setViewed(true);
        }
    }

    return(
            <main class="m-5" onLoad={handleView}>
                <div class="row mt-3 mb-4 text-left text-dark">
                    <div class="col-12">
                        <h3>{myList.name}</h3>
                    </div>
                </div>

                <div class="row mb-5 text-left text-dark">
                    <ListMenu id={id} username={myUser.name}/>
                </div>

                {(myList.type == 'lista') && (
                    <div class="row mb-4">
                    <div class="col-2">
                        <p class="m-3">Ordenar por:</p>
                    </div>
                    <div class="col-10">
                        <select class="form-select w-auto mt-2 p-1 border border-1 border-dark" name="sortby">
                            <option value="a-z">Nombre (A-Z)</option>
                            <option value="z-a">Nombre (Z-A)</option>
                            <option value="new">Más recientes</option>
                            <option value="old">Más antiguos</option>
                            <option value="popular">Mayor popularidad</option>
                            <option value="unpopular">Menor popularidad</option>
                        </select>
                    </div>
                    </div>
                )}

                <div class="row mb-5">
                    <div class="col-12">
                        <ListContent id={myList._id} type={myList.type} creator_id={myList.creator_id}/>
                    </div>
                </div>
            </main>
    );
};

export default List;