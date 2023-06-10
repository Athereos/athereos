import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../context/CarProvider";


const ItemCheckout = (props) => {
    const { id, image, title, price, description, url, category } = props;

    const { addItem,cart } = useContext(CarContext);

    const addProduct = () => {
        addItem(props);
    }

    return (
        <div className="item">
                <img src={image} className="img-fluid" alt="Responsive image" />
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Precio: ${price}</p>          
        </div>
    );
}

export default ItemCheckout;