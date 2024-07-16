import React from "react";

import { useCookies } from 'react-cookie';

const GroupMenu = (props) => {

    const [cookies, setCookie, removeCookie] = useCookies(['session']);
    const session = cookies['session'];

    const handleJoin = () => {}

    if (session != undefined && session.user_id == props.creator_id) {
        return(
            <>
                    <div class="col-6 text-start">
                        <p class="mt-3 mb-3 text-dark">Grupo creado por <a href={"/user?id=" + props.creator_id}>tí</a> el {props.date.day} de {props.date.month} de {props.date.year}</p>
                    </div>
                    <div class="col-6 text-end">
                        <a class="btn bg-dark text-white" href={"/edit-group?id=" + props.id}>Editar grupo</a>
                    </div>
            </>
        );
    } else {
        return(
            <>
                    <div class="col-6 text-start">
                        <p class="mt-3 mb-3 text-dark">Grupo creado por <a href={"/user?id=" + props.creator_id}>{props.username}</a> el {props.date.day} de {props.date.month} de {props.date.year}</p>
                    </div>
                    <div class="col-6 text-end">
                        <a class="btn bg-dark text-white" onClick={handleJoin}>Unirse a este grupo</a>
                    </div>
            </>
        );
    }
}

export default GroupMenu;