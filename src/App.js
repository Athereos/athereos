import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import './css/styles.css'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/item/:url" element={<ItemDetailContainer/>} />
          <Route exact path="/category/:category" element={<ItemListContainer/>} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
