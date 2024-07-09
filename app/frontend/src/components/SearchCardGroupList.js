import React from "react";
import { useState, useEffect } from "react";

import SearchCardGroup from "./SearchCardGroup";

const SearchCardGroupList = (props) => {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/search?string=' + props.search + '&orderby=' + props.orderby + '&filterby=' + props.filterby)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setGroups(data);
          });
    }, [])

    return(
                        <div class="scrollable-card-group my-cards">
                            {groups.map((group) => (
                                <SearchCardGroup id={group._id}/>
                            ))}
                        </div>
    );
};

export default SearchCardGroupList;