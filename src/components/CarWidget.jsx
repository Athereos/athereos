import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../context/CarProvider";

const CarWidget = () =>{

    const { cart } = useContext(CarContext);

    return(
        <Link to="/checkout" className="nav-link">
            <div className="carrito">
            <i className="fa my-2">&#xf07a;</i>
                <span className='badge badge-warning' id='lblCartCount'> {cart.length} </span>
            </div>
        </Link>
    );
}

export default CarWidget;