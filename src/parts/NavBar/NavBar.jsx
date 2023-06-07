import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./NavBar.css";
import logo from "../../assets/Images/logo.png";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const userName = user?.displayName;
  const userPhoto = user?.photoURL;
  console.log(user);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <NavLink to={"/"} className=" uppercase">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={"/instructors"} className=" uppercase">
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink to={"/classes"} className=" uppercase">
          Classes
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to={"/dashboard"} className=" uppercase">
            Dashboard
          </NavLink>
        </li>
      ) : (
        <></>
      )}
    </>
  );
  const profileItems = (
    <>
      {user &&
        <>
          <li>
            <a className="justify-between">
              {user ? `${userName}` : "User"}
              <span className="badge">Update</span>
            </a>
          </li>
          <li>
            <a onClick={logOut}>Logout</a>
          </li>
        </>}
    </>
  );

  return (
    <div>
      {/* todo: add fixed classname */}
      <div
        className={` navbar bg-secondary text-white  w-full z-10 transition-all duration-500 h-12  ${
          isScrolled ? "bg-slate-600 shadow-md py-2" : "bg-transparent"
        }${isScrolled ? "h-10" : "h-16"}`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div className="p-2">
            <h3 className=" text-white text-3xl font-semibold">Sport Spark</h3>
          <p className=" text-xs mb-2">Fueling Passion, Building Skills</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
        { user? <div className="dropdown dropdown-end ">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-white hover:bg-white btn-circle avatar"
            >
              <div className="w-auto rounded-full">
                <img src={userPhoto} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 z-50 bg-black"
            >
              {profileItems}
            </ul>
          </div>:<>
          <Link className=" btn btn-primary font-semibold text-white rounded-full hover:bg-secondary" to={"/login"}>
          LogIn
        </Link>
          </>}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
