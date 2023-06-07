import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/HomeLayout/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import App from "../App";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layouts/Dashboard";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile/AdminProfile";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
const userRole = 'admin'

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<div>Error page 404</div>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/instructors',
                element:<Instructors></Instructors>,
            },
            {
                path:'/classes',
                element:<Classes></Classes>,
            },
            {
                path:'signup',
                element:<SignUp></SignUp>,
            },
            {
                path:'login',
                element:<Login></Login>,
            },
            {
                path:'',
                element:<div></div>,
            },
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        errorElement:<div>Error page 404</div>,
        children:[
            {
                path:'/dashboard/',
                element:userRole==='admin'?<AdminProfile></AdminProfile>: userRole === 'instructor'? <div>Instructor</div>:<div>Student</div>,
            },{
                path:'/dashboard/admin-manage-users',
                element:<ManageUsers></ManageUsers>,
            },{
                path:'/dashboard/admin-manage-classes',
                element:<ManageClasses></ManageClasses>,
            },{
                path:'/dashboard',
                element:<div></div>,
            },
        ]
    }
])