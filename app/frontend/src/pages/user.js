import React from "react";

import { useState, useEffect } from "react";
import UserMenu from "../components/UserMenu";

const User = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    //EXTRAER DE LA BD
    const [myUser, setMyUser] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/user?id=' + id)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setMyUser(data);
        });
    }, [])
    
    return(
        <main class="m-5">
                <div class="row mt-3 mb-4 text-center text-dark">
                    <div class="col-12">
                        <h3>Perfil de usuario</h3>
                    </div>
                </div>
                
                <div class="row mb-5">
                    <div class="col-1"></div>

                    <div class="col-lg-3 col-md-4">
                        <img src={'/img/' + myUser.avatar} class="rounded border border-dark" width="200" height="200"/>
                    </div>

                    <div class="col-lg-5 col-md-4">
                        <h5 class="mt-3">{myUser.name}</h5>
                        <p>{myUser.info}</p>
                    </div>

                    <div class="col-2">
                        <div class="row text-end float-end">
                            <UserMenu id={id}/>
                        </div>
                    </div>

                    <div class="col-1"></div>
                </div>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </main>
    );
};

export default User;