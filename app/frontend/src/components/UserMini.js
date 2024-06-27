import React from "react";

import UserAvatar0 from "../img/test-user-knight.png";
import UserAvatar1 from "../img/test-user-smiley.png";
import NotFoundIcon from "../img/item-not-found.png";

const UserMini = (props) => {
    var icon = NotFoundIcon;

    if (props.id=="0") {
        icon = UserAvatar0;
    } else if (props.id=="1") {
        icon = UserAvatar1;
    }

    var link = "/user?id=" + props.id;

    return(
        <a class="btn m-0 mr-3 p-0 scrolled" href={link}><img src={icon} width="80" height="80"/></a>
    );
};

export default UserMini;