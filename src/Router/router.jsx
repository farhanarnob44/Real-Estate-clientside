import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/AllUsers";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: '/logIn',
            element:<LogIn></LogIn>
        },
        {
            path: '/register',
            element:<Register></Register>
        },

      ]
    },
    {
      path: '/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'users',
          element: <AllUsers></AllUsers>,
        }
      ]
  },

  ]);

  export default router;