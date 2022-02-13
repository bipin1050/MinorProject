import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import Addproduct from './addproduct';
import MiniDrawer from './navbar';
import Pendingpurchase from './pendingpurchase';
import Pendingsell from './pendingsell';


const Mainpage = () => {
    return ( 
        <div>
            <navbar>
                <div>
                    <ul>
                        {/* <Link to="/mainpage/">Home</Link>
                        <Link to="/mainpage/addproduct">Add Product</Link>
                        <Link to="/mainpage/pendingpurchase">Pending Purchase</Link>
                        <Link to="/mainpage/pendingsell">Pending Sell</Link> */}
                        <MiniDrawer/>
                    </ul>
                </div>
            </navbar>
            <div>
                <Routes>
                    <Route path ='/addproduct' element={<Addproduct/>}/>
                    <Route path ='/pendingpurchase' element={<Pendingpurchase/>}/>
                    <Route path ='/pendingsell' element={<Pendingsell/>}/>
                </Routes>
            </div>
            <footer>

            </footer>
        </div>
     );
}
 
export default Mainpage;