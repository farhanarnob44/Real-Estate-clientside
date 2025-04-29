import React from "react";
import { Link } from "react-router-dom";

const Parallyx = () => {
  return (
    <div className="flex my-52 items-center justify-center h-[700px] bg-fixed bg-parallyx bg-cover ">
    <div className="flex flex-col text-center items-center justify-center gap-10">
      <h1 className="text-5xl text-white">Unlock Your Dream Address.!!</h1>

      <Link to="/allProperties" className="btn bg-[#14B8A6] w-36 mt-[-30px] border-none text-white">
        Discover now
      </Link>
    </div>
  </div>
  );
};

export default Parallyx;
