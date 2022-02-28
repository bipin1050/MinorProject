import Login from './components/login.js';
import Mainpage from './components/mainpage.js';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './components/signup.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='mainpage/*' element={<Mainpage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
