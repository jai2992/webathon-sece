import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './components/store';
import Food from './components/Food_court'
import Landing from './components/Landing';
import Saloon from './components/Saloon';
import Cart from './components/cart';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/foodcourt" element={<Food />} />
        <Route path="/store" element={<Store />} />
        <Route path="/saloon" element={<Saloon />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
