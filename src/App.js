
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BillComponent from './components/bill';
import CustomNavbar from './components/navbar';
import Productbar from './components/product';

function App() {
  return (
    <div>
      <CustomNavbar/>
      <h1>Hello World!</h1>
      <Productbar/>
      <BillComponent/>
    </div>
  );
}

export default App;
