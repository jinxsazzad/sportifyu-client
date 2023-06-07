import {
  FaAd,
  FaBars,
  FaCaretRight,
  FaClipboard,
  FaHome,
  FaMagnet,
  FaMailBulk,
  FaShopify,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const userRole =`${'admin'}`;
  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden px-5 h-screen sm:bg-slate-500 pt-5 text-white"
        >
          <FaBars></FaBars>
        </label>
        <div className="drawer-content bg-slate-100">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-slate-300">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-2 w-56  h-full bg-slate-500 text-white">
            {/* Sidebar content here */}
            {userRole === "admin" ? (
              <>
                <li>
                  <Link>
                    <FaHome></FaHome> Admin Home
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaAd></FaAd> Add Items
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaMagnet></FaMagnet> Manage Items
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaHome></FaHome> Manage Booking
                  </Link>
                </li>
              </>
            ) : userRole === "manager" ? (
              <>
                <li>
                  <Link>
                    <FaHome></FaHome> Manager Home
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaUser></FaUser> Manage Employees
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaClipboard></FaClipboard> View Reports
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link>
                    <FaHome></FaHome> User Home
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaUser></FaUser> Your Task
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaClipboard></FaClipboard> View Reports
                  </Link>
                </li>
              </>
            )}

            <hr />

            <li>
              <Link to={'/'}>
                <FaHome></FaHome>Home
              </Link>
            </li>

            <li>
              <Link>
                <FaBars></FaBars>Menu
              </Link>
            </li>
            <li>
              <Link>
                <FaShopify></FaShopify>Shop
              </Link>
            </li>
            <li>
              <Link>
                <FaMailBulk></FaMailBulk>Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
