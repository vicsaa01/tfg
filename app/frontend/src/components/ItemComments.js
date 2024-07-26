import React from "react";

import { useState, useEffect } from "react";

import Comment from "../components/Comment";

import baseUrl from '../url'

const ItemComments = (props) => {

    console.log('Sorting comments by: ' + props.sortby);

    //EXTRAER COMENTARIOS DE LA BD

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(baseUrl + '/' + props.sortby + '-item-comments?item_id=' + props.id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setComments(data);
            });
    }, [baseUrl + '/' + props.sortby + '-item-comments?item_id=' + props.id])

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