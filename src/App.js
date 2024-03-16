import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './components/store';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="" element={<Store />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
