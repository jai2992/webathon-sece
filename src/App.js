import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './components/store';
import Food from './components/Food_court'
import Landing from './components/Landing';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/foodcourt" element={<Food />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
