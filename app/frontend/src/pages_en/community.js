import React from "react";

import Groups from "../components/Groups";
import Lists from "../components/Lists";

const EnCommunity = (props) => {
    props.setLang('en')

    return(
        <main class="m-5">
                <Groups lang={'en'}/>

                <div class="row m-5"></div>

                <Lists lang={'en'}/>
            </main>
    );
};

export default EnCommunity;