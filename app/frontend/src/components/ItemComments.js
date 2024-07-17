import React from "react";

import { useState, useEffect } from "react";

import Comment from "../components/Comment";

const ItemComments = (props) => {

    console.log('Sorting comments by: ' + props.sortby);

    //EXTRAER COMENTARIOS DE LA BD

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/' + props.sortby + '-item-comments?item_id=' + props.id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setComments(data);
            });
    }, ['http://127.0.0.1:8000/' + props.sortby + '-item-comments?item_id=' + props.id])

    return(
                        <div class="scrollable-card-group my-cards">
                            {comments.map((comment) => (
                                <Comment id={comment._id}
                                />
                            ))}
                        </div>
    )
}

export default ItemComments;