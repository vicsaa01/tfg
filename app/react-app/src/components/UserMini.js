import React from "react";

import UserAvatar from "../img/test-user.png";

const UserMini = () => {
    return(
        <a class="btn m-0 mr-3 p-0 scrolled" href="/user"><img src={UserAvatar} width="80" height="80"/></a>
    );
};

export default UserMini;