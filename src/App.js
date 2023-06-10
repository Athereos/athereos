import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import './css/styles.css'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, useAsyncError } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import ItemsProvider from './context/ItemsProvider';
import CarProvider from './context/CarProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import {collection,getDocs} from 'firebase/firestore';
import {db} from './firebase.config';

function App() {

  const [itemsAPI,setItemsAPI]=useState([]);

  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    const getItems = async () =>{
      setLoading(true);
      try {

        const col = collection(db,"items");
        const data = await getDocs(col);
        const result= data.docs.map(doc => doc ={id:doc.id,...doc.data()});
        setItemsAPI(result);
        setLoading(false);
        
      } catch (error) {
        setLoading(false);
      }
    }
    getItems();
  },[])

  return (
    <BrowserRouter>
      <ItemsProvider>
        <CarProvider>
          <Layout>
            <Routes>
              <Route exact path="/" element={!loading  && itemsAPI.length > 0 && <Home />} />
              <Route exact path="/item/:url" element={<ItemDetailContainer />} />
              <Route exact path="/category/:category" element={<ItemListContainer />} />
              <Route exact path="/checkout" element={<Checkout />} />
            </Routes>
          </Layout>
        </CarProvider>
      </ItemsProvider>
    </BrowserRouter>

  );
}

export default App;
