import {
  FaAsterisk,
  FaBars,
  FaCreditCard,
  FaDeezer,
  FaDotCircle,
  FaHome,
  FaPlusCircle,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const {role}= useAuth()
  console.log(role)
  const userRole = role
  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle h-screen" />
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden px-5 sm:bg-secondary pt-5 text-white  "
        >
          <FaBars></FaBars>
        </label>
        <div className="drawer-content bg-[#DBF5F0]">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-2 w-56 h-screen bg-secondary text-white">
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
                  <NavLink to={'/dashboard/'}>
                    <FaUser></FaUser> My Profile <span className="badge badge-primary badge-sm uppercase">{userRole}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/instructor-add-class'}>
                    <FaPlusCircle></FaPlusCircle> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/instructor-my-classes'}>
                    <FaAsterisk></FaAsterisk> My Classes
                  </NavLink>
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
                  <NavLink to={'/dashboard/student-selected-classes'}>
                    <FaAsterisk></FaAsterisk> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/student-enrolled-classes'}>
                    <FaDotCircle></FaDotCircle> MY Enrolled
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/student-payment'}>
                    <FaCreditCard></FaCreditCard> Payment
                  </NavLink>
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
