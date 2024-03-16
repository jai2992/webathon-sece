
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BillComponent from './components/bill';
import CustomNavbar from './components/navbar';
import Store from './components/store';

function App() {
  return (
    <div>
      <CustomNavbar/>
      <Store/>
      <BillComponent/>
    </div>
  );
}

export default App;
