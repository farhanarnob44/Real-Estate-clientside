import React, { useContext, useEffect, useState } from "react";
import UseeAxiosSecure from "../Components/UseeAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaTrash, FaUser } from "react-icons/fa";
import useRole from "../Components/useRole";
import { AuthContext } from "../Provider/AuthProvider";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseeAxiosSecure();

  const [query, setQuery] = useState([]);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      setQuery(res.data);
      return setQuery;
    },
  });

  // useEffect(() => {
  //   fetchedAllQueries();
  // }, []);
  // const fetchedAllQueries = async () => {
  //   const { data } = await axiosSecure.get("/users");
  //   console.log(data)
  //   setQuery(data);
  // };
  const handleChangeRole = async (user) => {
    const { value: fruit } = await Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: {
        customer: "customer",
        agent: "agent",
        admin: "admin",
      },
      inputPlaceholder: "Select a fruit",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "customer") {
            axiosSecure.patch(`users/role/${user.email}`, { role: "customer" });
            refetch();
            resolve();
          }
          if (value === "agent") {
            axiosSecure.patch(`users/role/${user.email}`, { role: "agent" });
            refetch();
            resolve();
          }
          if (value === "admin") {
            axiosSecure.patch(`users/role/${user.email}`, { role: "admin" });
            refetch();
            resolve();
          }
        });
      },
    });
    if (fruit) {
      Swal.fire(`Role changed to : ${fruit}`);
      refetch();
    }
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // });
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      {/* <h1>this is all users</h1> */}
      <div>
        <div className="flex justify-evenly my-4 ">
          <h2 className="text-3xl ">All Users</h2>
          <h2 className="text-3xl ">Total Users : {query.length}</h2>
        </div>
        <div className="overflow-x-auto w-10/12 mx-auto mt-8">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Update Roles</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {query.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    {/* {" "}
                    {user.role === "admin" ? (
                      "Admin"
                    ) : ( */}
                      <buTton
                        onClick={() => handleChangeRole(user)}
                        className="btn btn-primary"
                      >
                        <h1>Update Role</h1>
                        <FaUser></FaUser>
                      </buTton>
                    
                  </td>
                  <td>
                    <buTton
                      onClick={() => handleDeleteUser(user)}
                      className="btn"
                    >
                      <FaTrash></FaTrash>
                    </buTton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
