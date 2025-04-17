import React, { useContext, useEffect, useState } from "react";
import { CiShop } from "react-icons/ci";
import {
  FaBook,
  FaCalendar,
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

  return (
    <div className="flex ml-10">
      <div className="w-64 min-h-screen bg-[#004274] text-white">
        <ul className="menu p-4">
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
                <NavLink to="/dashboard/profile">
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
                <NavLink to="/dashboard/order">
                  <FaList></FaList>
                  My Orders
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
            <NavLink to="/shop">
              <MdOutlineShoppingBag />
              Shop
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
