import React from "react";
import { Link } from "react-router-dom";


const Item = (props) =>{
    const {id,image,title,price,description,url,category}=props;

    return(
        <div className="item">
            <Link  to= {"/item/" + props.url}>
            <img src={props.image} className="img-fluid" alt="Responsive image"/>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text">{props.descripiption}</p>
            <p className="card-text">Precio: ${props.price}</p>
            </Link>
        </div>
    );
}

export default Item;