import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./NavBar.css";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/Images/logo.png"

const NavBar = () => {
  const { user, logOut } = useAuth();
  const userName = user?.displayName;
  const userPhoto = user?.photoURL;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //for toggle menu bar in small device
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // All navigation item are here
  const navItems = (
    <>
      <li>
        <NavLink to={"/"} className="uppercase">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={"/instructors"} className="uppercase">
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink to={"/classes"} className="uppercase">
          Classes
        </NavLink>
      </li>
      <li tabIndex={0}>
        <details>
          <summary> <a>BOOKING</a></summary>
          <ul className="p-2 z-10">
            <li><a>All Course</a></li>
            <li><a>Football</a></li>
            <li><a>Basketball</a></li>
            <li><a>Others</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary> <a>CONTACT</a></summary>
          <ul className="p-2 z-10">
            <li><a>Send Mail</a></li>
            <li><a>Call Now</a></li>
          </ul>
        </details>
      </li>
      {user ? (
        <li>
          <NavLink to={"/dashboard"} className="uppercase">
            Dashboard
          </NavLink>
        </li>
      ) : (
        <></>
      )}
    </>
  );

  // All item under profile picture
  const profileItems = (
    <>
      {user && (
        <>
          <li>
            <a className="justify-between">{user ? `${userName}` : "User"}</a>
          </li>
          <li>
            <a onClick={logOut}>
              Logout <FaSignOutAlt></FaSignOutAlt>
            </a>
          </li>
        </>
      )}
    </>
  );

  return (
    //start navbar
    <nav className={"navbar bg-secondary text-white w-full h-14"}>
      {/* navbar start part */}
      <div className="navbar-start">
        {/* navbar items hidden in lg show in sm */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`btn btn-ghost text-xl lg:hidden ${
              isMenuOpen ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            <FaBars></FaBars>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 p-2 shadow-lg rounded w-52 z-50 bg-secondary ${
              isMenuOpen ? "show" : ""
            }`}
          >
            {navItems}
          </ul>
        </div>
        {/* site logo or name show in all size */}
        <div className="p-2 flex justify-center items-center gap-3">
          {/* <img
            className="w-28 h-28 rounded-full -ms-8 hidden lg:block"
            src={logo}
            alt=""
          /> */}
          <div>
              <Link to={"/"}> <img className="md:h-40" src={logo} alt="" /> </Link>
          </div>
        </div>
      </div>
      {/* navbar center part */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      {/* navbar end part. login logout function are here. */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-black hover:bg-black btn-circle avatar"
            >
              <div className="w-auto rounded-full">
                <img src={userPhoto?userPhoto:"https://i.ibb.co/8XbndLh/pngegg.png"} alt="User" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow w-52 z-50 bg-secondary rounded-md "
            >
              {profileItems}
            </ul>
          </div>
        ) : (
          <>
            <Link
              className="btn btn-primary font-semibold text-white rounded-full hover:bg-secondary"
              to={"/login"}
            >
              LogIn
            </Link>
          </>
        )}
      </div>
    </nav>
    
  );
};

export default NavBar;
