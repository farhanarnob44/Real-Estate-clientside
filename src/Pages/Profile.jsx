import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import cover from "../assets/formalBlue.jpg";
import UseeAxiosSecure from "../Components/UseeAxiosSecure";

const Profile = () => {

  const axiosSecure = UseeAxiosSecure();

  const { user } = useContext(AuthContext);

    const [query, setQuery] = useState([]);
    useEffect(() => {
      fetchedAllQueries();
    }, []);
    const fetchedAllQueries = async () => {
      const { data } = await axiosSecure.get(`/users/role/${user.email}`);
      setQuery(data);
      // console.log(query)
    };
    const Roleee = query.role;
    console.log(Roleee);

  return (
    <div className="mx-auto w-9/12 mt-32 text-center">
      <div className="card bg-base-100 border-2 shadow-sm">
        <figure className="flex flex-col ">
          <img
            src={cover}
            alt="photo cover"
            className="w-full h-[300px] divide-slate-600 bg-cover bg-center bg-no-repeat"
          />
          <img
            src={user.photoURL}
            alt="Shoes"
            className="rounded-[100%] bg-cover mt-[-70px] h-[150px] w-[150px]"
          />
        </figure>
        <h1 className="mx-auto w-2/12 bg-blue-700 text-white font-bold text-xl rounded-3xl p-2">{Roleee}</h1>
        <div className="card-body flex flex-row justify-between mx-7 mb-10 ">
          <h2 className="card-title">Name: {user.displayName}</h2>
          <h2 className="card-title">Email: {user.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
