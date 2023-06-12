import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import MainLayout from "../layouts/MainLayout";
import Classes from "../pages/Classes/Classes";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile/AdminProfile";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import InstructorProfile from "../pages/Dashboard/Instructor/InstructorProfile/InstructorProfile";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import UpdateClass from "../pages/Dashboard/Instructor/UpdateClass/UpdateClass";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses/SelectedClasses";
import Home from "../pages/Home/HomeLayout/Home";
import InstructorClasses from "../pages/Instructors/InstructorClasses";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import StudentProfile from "../pages/Dashboard/Student/StudentProfile/StudentProfile";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/instructor-all-class/:email",
        element: <InstructorClasses></InstructorClasses>,
        loader: ({ params }) =>
          axios
            .get(`/classes/email/${params.email}`)
            .then((response) => response.data)
            .catch((error) => {
              console.error("Error fetching data:", error);
              throw error;
            }),
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "/dashboard/",
        element: <InstructorProfile></InstructorProfile>,
      },
      {
        path: "/dashboard/",
        element: <StudentProfile></StudentProfile>,
      },
      {
        path: "/dashboard/admin-manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/admin-manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "/dashboard/instructor-my-classes",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "/dashboard/instructor-add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "/dashboard/instructor-class-update/id/:id",
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) =>
          axios
            .get(`/classes/id/${params.id}`)
            .then((response) => response.data)
            .catch((error) => {
              console.error("Error fetching data:", error);
              throw error;
            }),
      },
      {
        path: "/dashboard/student-selected-classes",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "/dashboard/student-enrolled-classes",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "/dashboard/student-payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
