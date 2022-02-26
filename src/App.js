import Login from './components/login.js';
import Mainpage from './components/mainpage.js';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [products, setProducts] = useState([
    {name: 'oil',       price: 3000,    quantity: 30},
    {name: 'soap',      price: 1200,    quantity: 50},
    {name: 'samphoo',   price: 100,     quantity: 200},
    {name: 'toothpaste',price: 50,      quantity: 1300}
  ]);

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='mainpage/*' element={<Mainpage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
