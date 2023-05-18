import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (props) => {

    const { url } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const filter = items.find((item) => item.url == url)
        setItem(filter);
    }, []);

    const items = [
        {
            'id': '1',
            'image': 'http://localhost:3000/images/ringTest.png',
            'title': 'Anillo Leon',
            'price': 25,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'url': 'anillo-leon',
            'category': 'anillo',
        },
        {
            'id': '3',
            'image': 'http://localhost:3000/images/ringTest.png',
            'title': 'Anillo Zeus',
            'price': 10,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'url': 'anillo-zeus',
            'category': 'anillo',
        },
        {
            'id': '4',
            'image': 'http://localhost:3000/images/ringTest.png',
            'title': 'Anillo Hades',
            'price': 4,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'url': 'anillo-hades',
            'category': 'anillo',
        },
        {
            'id': '5',
            'image': 'http://localhost:3000/images/collarTest.png',
            'title': 'Collar Poseidon',
            'price': 2,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'url': 'collar-poseidon',
            'category': 'collar',
        },
        {
            'id': '6',
            'image': 'http://localhost:3000/images/collarTest.png',
            'title': 'Collar Zeus',
            'price': 2,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'url': 'collar-zeus',
            'category': 'collar',
        },
        {
            'id': '7',
            'image': 'http://localhost:3000/images/brazaleteTest.png',
            'title': 'Brazalete Romano',
            'price': 35,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'url': 'brazalete-romano',
            'category': 'brazalete',
        },
    ]

    return (
        <Fragment>
            <span>Detalle</span>
            <div className="centrado">
                <div className="item-detalle">

                    <img src={item.image} className="img-fluid" alt="Responsive image" />
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.descripiption}</p>
                    <p className="card-text">Precio: ${item.price}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default ItemDetailContainer;