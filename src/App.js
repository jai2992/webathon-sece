import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './components/store';
import Food from './components/Food_court'
import Landing from './components/Landing';
import Saloon from './components/Saloon';
import Cart from './components/cart';
import Signin from './components/signin';
import Signup from './components/signup';
import { UserProvider } from './components/UserContext';
import LandingB from './components/Landing_b';

function App() {
  return (
    <div>
    <Router basename="/webathon-sece">
    <UserProvider>
      <Routes>
        <Route path="" element={<LandingB />} />
        <Route path="/" element={<LandingB />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/land" element={<Landing />} />
        <Route path="/foodcourt" element={<Food/>} />
        <Route path="/store" element={<Store />} />
        <Route path="/saloon" element={<Saloon />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </UserProvider>
    </Router>
    </div>
  );
}

export default App;
