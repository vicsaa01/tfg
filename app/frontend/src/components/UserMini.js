import React from "react";

import { useState, useEffect } from "react";

const UserMini = (props) => {
    //EXTRAER DE LA BD
    /*
    const [myUser, setMyUser] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/user?id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setMyUser(data);
          });
    }, [])
    */

    return(
        <a class="btn m-0 mr-3 p-0 scrolled" href={"/user?id=" + props.id}><img src={"../img/test-user-pepe.png"} width="80" height="80"/></a>
    );
};

export default UserMini;