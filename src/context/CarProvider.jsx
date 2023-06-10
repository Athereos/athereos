import React, { createContext, useState } from "react";

export const CarContext = createContext("");

const CarProvider = ({children}) =>{

    const [cart,setCart]=useState([]);

    //Este codigo agrega un item a los que ya habia antes
    const addItem = (item)=> setCart([...cart,item]);

    return(
        <CarContext.Provider value={{cart, addItem}}>
            {children}
        </CarContext.Provider>
    );
} 

export default CarProvider;