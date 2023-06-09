import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../context/CarProvider";


const Item = (props) => {
    const { id, image, title, price, description, url, category } = props;

    const { addItem,cart } = useContext(CarContext);

    const addProduct = () => {
        addItem(props);
    }

    return (
        <div className="item">
            <Link to={"/item/" + url}>
                <img src={image} className="img-fluid" alt="Responsive image" />
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Precio: ${price}</p>
            </Link>
            <button type="button" onClick={addProduct} className="btn btn-success marginTop10">Agregar al carrito</button>
        </div>
    );
}

export default Item;