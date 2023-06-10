import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../context/ItemsProvider";

const ItemDetailContainer = (props) => {

    const { url } = useParams();
    const [item, setItem] = useState({});

    const { items } = useContext(ItemsContext);

    useEffect(() => {
        const filter = items.find((item) => item.url === url)
        setItem(filter);
    }, []);

   

    return (
        <Fragment>
             <div className="App">      
                <h1>Detalle del producto</h1>
                
            </div>
            <div className="centrado">
                <div className="item-detalle">

                    <img src={item.image} className="img-fluid" alt="imagen producto"/>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Precio: ${item.price}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default ItemDetailContainer;