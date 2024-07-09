import React from "react";
import { useState, useEffect } from "react";

import SearchCardItem from "./SearchCardItem";

const SearchCardItemList = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/search?string=' + props.search + '&orderby=' + props.orderby + '&filterby=' + props.filterby)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setItems(data);
          });
    }, [])

    return(
                        <div class="scrollable-card-group my-cards">
                            {items.map((item) => (
                                <SearchCardItem id={item._id}/>
                            ))}
                        </div>
    );
};

export default SearchCardItemList;