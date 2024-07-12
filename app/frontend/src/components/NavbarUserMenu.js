import React from "react";

import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

const NavbarUserMenu = () => {

    const [cookies, setCookie] = useCookies(['session']);
    const session = cookies['session'];

    //EXTRAER DE LA BD
    const [myUser, setMyUser] = useState([]);

    useEffect(() => {
        if (session != undefined) {
            fetch('http://127.0.0.1:8000/user?id=' + session.user_id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setMyUser(data);
            });
        }
    }, [])
    
    if (session != undefined) {
        return(
            <>
                <a class="me-4" href={"/user?id=" + myUser._id}>
                    <img src={'/img/' + myUser.avatar} class="rounded-circle" width="40" height="40" />
                </a>
            </>
        )
    } else {
        return(
            <>
                <a class="btn bg-white text-dark me-4" href="/login">
                    Iniciar sesión
                </a>
            </>
        )
    }
}

export default NavbarUserMenu;