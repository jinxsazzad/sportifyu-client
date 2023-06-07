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
        element:<App></App>,
        errorElement:<div>Error page 404</div>,
        children:[
            {
                path:'/dashboard/',
                element:<div>Admin Home</div>,
            },{
                path:'/dashboard',
                element:<div></div>,
            },{
                path:'/dashboard',
                element:<div></div>,
            },{
                path:'/dashboard',
                element:<div></div>,
            },
        ]
    }
])