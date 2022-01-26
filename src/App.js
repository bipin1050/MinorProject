import Login from './components/login.js';
import Mainpage from './components/mainpage.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Addproduct from './components/addproduct.js';
import Pendingpurchase from './components/pendingpurchase.js';
import Pendingsell from './components/pendingsell.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route path='login/' element={<Login/>}/>
          <Route path='mainpage' element={<Mainpage/>}>
                    <Route path ='/addproduct' element={<Addproduct/>}/>
                    <Route path ='/pendingpurchase' element={<Pendingpurchase/>}/>
                    <Route path ='/pendingsell' element={<Pendingsell/>}/>
          </Route>
                    
        </Routes>
      </BrowserRouter>
        {/* change to check github branch */}
        {/* changed second times to check github branch */}
        {/* changed third times to check github branch */}
        {/* bishal lamichhane */}

    </div>
  );
}

export default App;
