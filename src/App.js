import Login from './components/login.js';
import Mainpage from './components/mainpage.js';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/mainpage' element={<Mainpage/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
