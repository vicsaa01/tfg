import React from "react";

import ItemIcon0 from "../img/test-item-skyrim.png";
import ItemIcon1 from "../img/test-item-gta-v.png";
import NotFoundIcon from "../img/item-not-found.png";

const ItemMini = (props) => {
    var icon = NotFoundIcon;

    if (props.id=="0") {
        icon = ItemIcon0;
    } else if (props.id=="1") {
        icon = ItemIcon1;
    }

    var link = "/user?id=" + props.id;

    return(
        <a class="btn m-0 mr-3 p-0 scrolled" href={link}><img src={icon} width="80" height="80"/></a>
    );
};

export default ItemMini;