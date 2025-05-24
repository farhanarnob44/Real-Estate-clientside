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
import MyAddedProperties from "../Components/Agent/MyAddedProperties";
import UpdateProperties from "../Components/Agent/UpdateProperties";
import Notification from "../Components/Notification";
import PaymentHistory from "../Components/User/PaymentHistory";

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
        path: "/notification",
        element: <Notification></Notification>,
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
          fetch(`https://real-estate-server-lilac.vercel.app/allproperties/${params.id}`),
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
      {
        path: "updateProperties",
        element: <UpdateProperties></UpdateProperties>,
      },
      {
        path: "myAddedProperties",
        element: <MyAddedProperties></MyAddedProperties>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);

export default router;
