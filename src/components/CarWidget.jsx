import React from "react";

const CarWidget = () =>{
    return(
        <div className="carrito">
        <i class="fa my-2">&#xf07a;</i>
            <span class='badge badge-warning' id='lblCartCount'> 5 </span>
        </div>
    );
}

export default CarWidget;