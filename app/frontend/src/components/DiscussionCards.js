import React from "react";

import { useState, useEffect } from "react";

import DiscussionCard from "./DiscussionCard";

const DiscussionCards = (props) => {

    console.log('Sorting discussions by: ' + props.sortby);

    //EXTRAER DISCUSIONES DE LA BD
    
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/' + props.sortby + '-discussions?group_id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setDiscussions(data);
          });
    }, ['http://127.0.0.1:8000/' + props.sortby + '-discussions?group_id=' + props.id])

    return(
                                <div class="scrollable-card-group my-cards">
                                    {discussions.map((discussion) => (
                                        <DiscussionCard id={discussion._id}/>
                                    ))}
                                </div>
    );
};

export default DiscussionCards;