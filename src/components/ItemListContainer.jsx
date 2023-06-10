import React, { Fragment, useContext, useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../context/ItemsProvider";

const ItemListContainer = (props) => {

  const { category } = useParams();
  const [item, setItem] = useState([]);
  const [itemFiltrado, setItemFiltrado] = useState([]);

  const { items } = useContext(ItemsContext);


  useEffect(() => {
    
    setItem(items);


    if (category) {
      const filtrado = items.filter(
        (item) => item.category === category
      );

      setItemFiltrado(filtrado);
    }
  }, [category]);



  return (
    <Fragment>

      {
        category
        &&
        (
          <div className="App">
            <h1>Categoria: {category}</h1>
          </div>
        )
      }
      <span>{props.texto}</span>
      <div className="listaItems">
        {itemFiltrado.length > 0 ? (
          itemFiltrado.map((item) => (
            <Item key={item.id}{...item} />
          ))
        ) : (
          item.map((item) => (
            <Item key={item.id}{...item} />
          ))
        )}


      </div>
    </Fragment>
  );
}

export default ItemListContainer;