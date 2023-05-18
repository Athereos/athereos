import React from "react";
import ItemListContainer from "../components/ItemListContainer";


const Home = () =>{
    return(
        <div className="App">      
        <h1>Tienda de Joyeria</h1>
        <ItemListContainer texto={"Lista de articulos"} />
      </div>
    );
}

export default Home;