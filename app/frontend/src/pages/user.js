import React from "react";

import { useState, useEffect } from "react";
import UserMenu from "../components/UserMenu";

const User = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")

    //EXTRAER DE LA BD
    const [myUser, setMyUser] = useState([]);

    const [date, setDate] = useState({
        year: '',
        month: '',
        day: ''
    })

    useEffect(() => {
        fetch('http://127.0.0.1:8000/user?id=' + id)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setMyUser(data);

            let yyyy = data.created_at.substring(0,4);
            let mm = data.created_at.substring(5,7);
            switch(mm) {
                case '01':
                    mm = 'enero';
                    break;
                case '02':
                    mm = 'febrero';
                    break;
                case '03':
                    mm = 'marzo';
                    break;
                case '04':
                    mm = 'abril';
                    break;
                case '05':
                    mm = 'mayo';
                    break;
                case '06':
                    mm = 'junio';
                    break;
                case '07':
                    mm = 'julio';
                    break;
                case '08':
                    mm = 'agosto';
                    break;
                case '09':
                    mm = 'septiembre';
                    break;
                case '10':
                    mm = 'octubre';
                    break;
                case '11':
                    mm = 'noviembre';
                    break;
                case '12':
                    mm = 'diciembre';
                    break;
                default:
                    mm = 'mes indefinido';
                    break;
            }
            let dd = data.created_at.substring(8,10);
            if (dd.substring(0,1) == '0') dd = dd.substring(1,2);
            setDate({
                year: yyyy,
                month: mm,
                day: dd
            });
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
                        <p>Se unió el {date.day} de {date.month} de {date.year}</p>
                        <br/>
                        <p class="border border-dark border-1 rounded p-3">{myUser.info}</p>
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