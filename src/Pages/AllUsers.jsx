import React, { useContext, useEffect, useState } from "react";
import UseeAxiosSecure from "../Components/UseeAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaTrash, FaUser } from "react-icons/fa";
import useRole from "../Components/useRole";
import { AuthContext } from "../Provider/AuthProvider";

const AllUsers = () => {
  const axiosSecure = UseeAxiosSecure();

  const {user} = useContext(AuthContext);








  // const [role, isLoading] = useRole();
  // console.log(role);
  // const { data: users = [] } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get("/users");

  //     return res.data;
  //   },
  // });

  // const [ role, isLoading] = useRole();
  // console.log(role);

// const[users,setUsers] = useState();


const [query, setQuery] = useState([]);
useEffect(() => {
  fetchedAllQueries();
}, []);
const fetchedAllQueries = async () => {
  const { data } = await axiosSecure.get("/users");
  setQuery(data);
};
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
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
      <h1>this is all users</h1>
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
                  <td>
                    {" "}
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <buTton
                        onClick={() => handleMakeAdmin(user)}
                        className="btn"
                      >
                        <FaUser></FaUser>
                        <h1>{user.role}</h1>
                      </buTton>
                    )}
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
