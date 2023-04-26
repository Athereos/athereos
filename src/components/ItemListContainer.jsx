import React, { Fragment } from "react";

const ItemListContainer = (props) =>{
    return(
        <Fragment>
            <span>{props.texto}</span>
        </Fragment>
    );
}

export default ItemListContainer;