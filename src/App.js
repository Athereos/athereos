import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import './css/styles.css'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Tienda de Joyeria</h1>
      <ItemListContainer texto={"Lista de articulos"} />
    </div>
  );
}

export default App;
