import Login from './components/login.js';
import Mainpage from './components/mainpage.js';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './components/signup.js';
import { AuthProvider, useAuth } from './Authentication/auth.js';
import { RequireAuth } from './Authentication/RequireAuth.js';
import Error from './components/error.js';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const auth = useAuth()

  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<RequireAuth><Signup /></RequireAuth>} />
          <Route path='mainpage/*' element={<RequireAuth><Mainpage /></RequireAuth>} />
          <Route path='*' element={<Error />} />
        </Routes>
        <ToastContainer />
      </div>
    </AuthProvider>
  );
}

export default App;
