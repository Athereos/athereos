import React, { Fragment, useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) =>{

    const { category } = useParams();  
    const [item, setItem] = useState([]);
    const [itemFiltrado, setItemFiltrado] = useState([]);

   
    useEffect(() => {
        const items = [
            {
              'id': '1',
              'image': 'http://localhost:3000/images/ringTest.png',
              'title': 'Anillo Leon',
              'price': 25,
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'url':'anillo-leon',
              'category':'anillo',
            },
            {
              'id': '3',
              'image': 'http://localhost:3000/images/ringTest.png',
              'title': 'Anillo Zeus',
              'price': 10,
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'url':'anillo-zeus',
              'category':'anillo',
            },
            {
              'id': '4',
              'image': 'http://localhost:3000/images/ringTest.png',
              'title': 'Anillo Hades',
              'price': 4,
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'url':'anillo-hades',
              'category':'anillo',
            },
            {
              'id': '5',
              'image': 'http://localhost:3000/images/collarTest.png',
              'title': 'Collar Poseidon',
              'price': 2,
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'url':'collar-poseidon',
              'category':'collar',
            },
            {
              'id': '6',
              'image': 'http://localhost:3000/images/collarTest.png',
              'title': 'Collar Zeus',
              'price': 2,
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'url':'collar-zeus',
              'category':'collar',
            },
            {
              'id': '7',
              'image': 'http://localhost:3000/images/brazaleteTest.png',
              'title': 'Brazalete Romano',
              'price': 35,
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'url':'brazalete-romano',
              'category':'brazalete',
            },
          ]
        
        setItem(items);
    
        
        if(category){
            const filtrado = items.filter(
                (item) => item.category === category
              );
          
              setItemFiltrado(filtrado);
        }    
    }, [category]);

    

    return(
        <Fragment>
            <span>{props.texto}</span>
            <div className="listaItems">
                {itemFiltrado.length > 0 ? (
                        itemFiltrado.map((item)=>(
                            <Item key={item.id}{...item} />
                        ))
                ):(
                    item.map((item)=>(
                        <Item key={item.id}{...item} />
                    ))
                )}
                
                
            </div>
        </Fragment>
    );
}

export default ItemListContainer;