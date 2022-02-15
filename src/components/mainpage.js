import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Addproduct from "./addproduct";
import Dashboard from "./dashboard";
import MiniDrawer from "./navbar";
import Removeproduct from "./removeproduct";
import Searchproduct from "./searchproduct";
import Sellproduct from "./sellproduct";

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
            <MiniDrawer />
          </ul>
        </div>
      </navbar>
      <div>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addproduct" element={<Addproduct />} />
          <Route path="removeproduct" element={<Removeproduct />} />
          <Route path="searchproduct" element={<Searchproduct />} />
          <Route path="sellproduct" element={<Sellproduct />} />


        </Routes>
      </div>
      <footer className="fixed w-full px-64 bg-zinc-600 bottom-0 text-white">
        Manager : Admin
      </footer>
    </div>
  );
};

export default Mainpage;
