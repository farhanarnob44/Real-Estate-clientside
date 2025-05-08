import React, { useContext, useEffect, useState } from "react";
import { CiShop } from "react-icons/ci";
import {
  FaBook,
  FaCalendar,
  FaHandsHelping,
  FaHome,
  FaList,
  FaProductHunt,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import useRole from "../Components/useRole";
import { AuthContext } from "../Provider/AuthProvider";
import UseeAxiosSecure from "../Components/UseeAxiosSecure";
import UseeAdmin from "../Components/UseeAdmin";
import { CgProfile } from "react-icons/cg";
import { IoBagAddSharp } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";
// import UseCart from "../Components/UseCart";
// import { FaSpoon } from "react-icons/fa6";
// import UseeAdmin from "../Components/UseeAdmin";

const Dashboard = () => {
  //   const [cart] = UseCart();

  const axiosSecure = UseeAxiosSecure();

  //   const [isAdmin] = UseeAdmin();
  // const [isAdmin] = useRole();
  const { user } = useContext(AuthContext);
  // console.log(user.email);

  const [query, setQuery] = useState([]);
  useEffect(() => {
    fetchedAllQueries();
  }, []);
  const fetchedAllQueries = async () => {
    const { data } = await axiosSecure.get(`/users/role/${user.email}`);
    setQuery(data);
    // console.log(query.role)
  };
  const isAdmin = query.role;
  // console.log(isAdmin);

  // const [isAdmin] =UseeAdmin();
  // const isAdmin = "admin";

  // bg-[#004274]

  return (
    <div className="flex ml-10">
      <div className="w-[300px]  min-h-screen bg-blue-900 text-white">
        <ul className="menu p-4 font-semibold text-[15px]">
          {isAdmin === "admin" ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className="text-2xl text-bold"
                >
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/profile" className="mt-5">
                  <CgProfile />
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser></FaUser>
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allProperties">
                  <FaUser></FaUser>
                  All Propertiese
                </NavLink>
              </li>
            </>
          ) : isAdmin === "customer" ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className="text-2xl text-bold"
                >
                  <FaHome></FaHome>
                  Customer Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/profile">
                  <CgProfile />
                  My Profile
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/wishlist">
                  <FaBook></FaBook>
                  Wishlist
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser></FaUser>
                  Property bought
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  My Reviews
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className="text-2xl text-bold mb-3"
                >
                  <FaHome></FaHome>
                  Agent Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/profile" className="">
                  <CgProfile />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addProduct">
                  <IoBagAddSharp />
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myAddedProperties">
                  <FaList></FaList>
                  My Added Properties
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/order">
                  <LuBaggageClaim />
                  My Sold Properties
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/order">
                  <FaHandsHelping />
                  Requested Properties
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          {/* shared navlinks  */}

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allProperties">
              <MdOutlineShoppingBag />
              All Properties
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
