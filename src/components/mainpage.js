import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import Addproduct from './addproduct';
import Pendingpurchase from './pendingpurchase';
import Pendingsell from './pendingsell';


const Mainpage = () => {
    return ( 
        <div>
            <navbar>
                <div>
                    <ul>
                        <Link to="/mainpage/">Home</Link>
                        <Link to="/mainpage/addproduct">Add Product</Link>
                        <Link to="/mainpage/pendingpurchase">Pending Purchase</Link>
                        <Link to="/mainpage/pendingsell">Pending Sell</Link>
                    </ul>
                </div>
                <div>
                    <label>Search bar</label>
                </div>
            </navbar>
            <div>
                {/* <Routes>
                    <Route path ='/mainpage/' element={<Mainpage/>}/>
                    <Route path ='/mainpage/addproduct' element={<Addproduct/>}/>
                    <Route path ='/mainpage/pendingpurchase' element={<Pendingpurchase/>}/>
                    <Route path ='/mainpage/pendingsell' element={<Pendingsell/>}/>
                </Routes> */}
            </div>
            <footer>

            </footer>
        </div>
     );
}
 
export default Mainpage;