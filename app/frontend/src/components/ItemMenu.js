import React from "react";

import { useCookies } from 'react-cookie';

const ItemMenu = (props) => {

    // get session

    const [cookies, setCookie, removeCookie] = useCookies(['session']);
    const session = cookies['session'];

    if (session == undefined) {
        return(
            <>
                    <a class="btn rounded w-100 bg-dark text-white float-right">+ Añadir a lista</a>
                    <a class="btn rounded w-100 bg-dark text-white float-right mt-3">+ Añadir a grupo</a>
            </>
        );
    } else {
        return(
            <>
                    <a class="btn rounded w-100 bg-dark text-white float-right" href={"/add-to-list?item_id=" + props.id}>+ Añadir a lista</a>
                    <a class="btn rounded w-100 bg-dark text-white float-right mt-3" href={"/add-to-group?item_id=" + props.id}>+ Añadir a grupo</a>
            </>
        );
    }
}

export default ItemMenu;