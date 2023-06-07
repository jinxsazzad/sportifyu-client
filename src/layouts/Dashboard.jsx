import {
  FaAd,
  FaAsterisk,
  FaBars,
  FaClipboard,
  FaCreditCard,
  FaDeezer,
  FaDotCircle,
  FaHome,
  FaMagnet,
  FaPlusCircle,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const userRole = `${"admin"}`;
  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden px-5 h-screen sm:bg-secondary pt-5 text-white"
        >
          <FaBars></FaBars>
        </label>
        <div className="drawer-content bg-[#DBF5F0]">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-gray-300">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-2 w-56  h-full bg-secondary text-white">
            {/* Sidebar content here */}
            {userRole === "admin" ? (
              <>
                <li>
                  <NavLink to={'/dashboard/'}>
                    <FaUser></FaUser> My Profile <span className="badge badge-primary badge-sm uppercase">{userRole}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/admin-manage-users"}>
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/admin-manage-classes"}>
                    <FaDeezer></FaDeezer> Manage Classes
                  </NavLink>
                </li>
              </>
            ) : userRole === "instructor" ? (
              <>
                <li>
                  <Link>
                    <FaUser></FaUser> My Profile <span className="badge badge-primary badge-sm uppercase">{userRole}</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaPlusCircle></FaPlusCircle> Add a Class
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaAsterisk></FaAsterisk> My Classes
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/dashboard/"}>
                    <FaUser></FaUser> My Profile <span className="badge badge-primary badge-sm uppercase">{userRole}</span>
                  </NavLink>
                </li>
                <li>
                  <Link>
                    <FaAsterisk></FaAsterisk> My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaDotCircle></FaDotCircle> MY Enrolled
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaCreditCard></FaCreditCard> Payment
                  </Link>
                </li>
              </>
            )}
              <hr className="mt-60"/>
            <li >
              <Link to={"/"}>
                <FaHome></FaHome>Go to Home
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
