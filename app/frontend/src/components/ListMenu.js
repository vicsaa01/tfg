import React from "react";

import { useCookies } from 'react-cookie';

const ListMenu = (props) => {

    const [cookies, setCookie, removeCookie] = useCookies(['session']);
    const session = cookies['session'];

    const handleJoin = () => {}

    if (session != undefined && session.user_id == props.creator_id) {
        return(
            <>
                    <div class="col-6">
                        <p>Lista creada por tí el {props.created_at}</p>
                    </div>
                    <div class="col-6 text-end">
                        <a class="btn bg-dark text-white" href={"/edit-list?id=" + props.id}>Editar lista</a>
                    </div>
            </>
        );
    } else {
        return(
            <>
                    <div class="col-12">
                        <p>Lista creada por <a href={"/user?id=" + props.creator_id}>{props.creator_id /* change to username */}</a> el {props.created_at}</p>
                    </div>
            </>
        );
    }
}

export default ListMenu;