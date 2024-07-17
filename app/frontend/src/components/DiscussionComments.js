import React from "react";

import { useState, useEffect } from "react";

import Comment from "../components/Comment";

const DiscussionComments = (props) => {

    console.log('Sorting comments by: ' + props.sortby);

    //EXTRAER COMENTARIOS DE LA BD

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/' + props.sortby + '-discussion-comments?discussion_id=' + props.id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setComments(data);
            });
    }, ['http://127.0.0.1:8000/' + props.sortby + '-discussion-comments?discussion_id=' + props.id])

    return(
                    <div class="col-11 ps-5 pe-5">
                        {comments.map((comment) => (
                            <Comment id={comment._id}
                            />
                        ))}
                    </div>
    )
}

export default DiscussionComments;