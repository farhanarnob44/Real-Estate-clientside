import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/AllUsers";
import AllProperties from "../Components/AllProperties";
import AllPropertiesTable from "../Dashboard/AllPropertiesTable";
import Profile from "../Pages/Profile";
import ViewDetails from "../Components/ViewDetails";
import Wishlist from "../Components/User/Wishlist";
import AddProperties from "../Components/Agent/AddProperties";
import Payment from "../Components/User/Payment";

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
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allProperties",
        element: <AllProperties></AllProperties>,
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allproperties/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "allProperties",
        element: <AllPropertiesTable></AllPropertiesTable>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "addProduct",
        element: <AddProperties></AddProperties>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
