import React from "react";
import CarWidget from "./CarWidget";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="nav-link"><div className="navbar-brand">ATHEREOS</div></Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link to="/" className="nav-link"> Inicio</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/category/anillo" className="nav-link"> Anillos</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/category/collar" className="nav-link"> Collares</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/category/brazalete" className="nav-link"> Brazaletes</Link>
                </li>
                </ul>
               <CarWidget/>
               
            </div>
            </nav>
    );
}

export default NavBar;