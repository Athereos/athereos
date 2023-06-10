import React, { createContext } from "react";

export const ItemsContext=createContext('');

const ItemsProvider = ({children}) =>{

  

    const items = [
        {
          'id': '1',
          'image': '/images/ringTest.png',
          'title': 'Anillo Leon',
          'price': 25,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'url': 'anillo-leon',
          'category': 'anillo',
        },
        {
          'id': '3',
          'image': '/images/ringTest.png',
          'title': 'Anillo Zeus',
          'price': 10,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'url': 'anillo-zeus',
          'category': 'anillo',
        },
        {
          'id': '4',
          'image': '/images/ringTest.png',
          'title': 'Anillo Hades',
          'price': 4,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'url': 'anillo-hades',
          'category': 'anillo',
        },
        {
          'id': '5',
          'image': '/images/collarTest.png',
          'title': 'Collar Poseidon',
          'price': 2,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'url': 'collar-poseidon',
          'category': 'collar',
        },
        {
          'id': '6',
          'image': '/images/collarTest.png',
          'title': 'Collar Zeus',
          'price': 2,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'url': 'collar-zeus',
          'category': 'collar',
        },
        {
          'id': '7',
          'image': '/images/brazaleteTest.png',
          'title': 'Brazalete Romano',
          'price': 35,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          'url': 'brazalete-romano',
          'category': 'brazalete',
        },
      ]

    return(
        <ItemsContext.Provider value={{items}}>
            {children}
        </ItemsContext.Provider>
    );
}

export default ItemsProvider;