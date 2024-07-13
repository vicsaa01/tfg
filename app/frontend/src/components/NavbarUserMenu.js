import React from "react";

import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { Navigate, useLocation } from "react-router-dom";

const NavbarUserMenu = (props) => {

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

    //IR AL LOGIN

    const location = useLocation();
    const url = location.pathname;

    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    const search = queryParameters.get("search")

    const [toLogin, setToLogin] = useState(false);

    const handleLogin = () => {
        setToLogin(true);
    }

    const ToLogin = () => {
        if (toLogin == true) {
            setToLogin(false);
            if (id == null)
                if (search == null)
                    return <Navigate to="/login" state={{prevUrl: url, has_id: false, id: id, has_search: false, search: search}} />;
                else
                    return <Navigate to="/login" state={{prevUrl: url, has_id: false, id: id, has_search: true, search: search}} />;
            else
                return <Navigate to="/login" state={{prevUrl: url, has_id: true, id: id, has_search: false, search: search}} />;
        }
    }

    // CONSTRUIR MENÚ
    
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
                <a class="btn bg-white text-dark me-4" href="/login" onClick={handleLogin}>
                    Iniciar sesión
                </a>
                <ToLogin/>
            </>
        )
    }
}

export default NavbarUserMenu;