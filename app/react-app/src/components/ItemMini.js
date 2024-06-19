import React from "react";

import ItemIcon from "../img/test-rpg.jpg";

const ItemMini = () => {
    return(
        <a class="btn m-0 mr-3 p-0 scrolled" href="/item"><img src={ItemIcon} width="80" height="80"/></a>
    );
};

export default ItemMini;