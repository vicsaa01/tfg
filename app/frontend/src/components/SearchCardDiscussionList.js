import React from "react";
import { useState, useEffect } from "react";

import SearchCardDiscussion from "./SearchCardDiscussion";

const SearchCardDiscussionList = (props) => {

    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/search?string=' + props.search + '&orderby=' + props.orderby + '&filterby=' + props.filterby)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setDiscussions(data);
          });
    }, [])

    return(
                        <div class="scrollable-card-group my-cards">
                            {discussions.map((discussion) => (
                                <SearchCardDiscussion id={discussion._id}/>
                            ))}
                        </div>
    );
};

export default SearchCardDiscussionList;