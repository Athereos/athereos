import React from "react";

const CarWidget = () =>{
    return(
        <div className="carrito">
        <i className="fa my-2">&#xf07a;</i>
            <span className='badge badge-warning' id='lblCartCount'> 5 </span>
        </div>
    );
}

export default CarWidget;