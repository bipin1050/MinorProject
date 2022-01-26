import Login from './components/login.js';
import Mainpage from './components/mainpage.js';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/mainpage' element={<Mainpage/>}/>
        </Routes>
      </BrowserRouter>
        {/* change to check github branch */}
        {/* changed second times to check github branch */}
        {/* changed third times to check github branch */}

    </div>
  );
}

export default App;
