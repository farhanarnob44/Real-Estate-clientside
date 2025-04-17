import React, { useContext } from "react";
import UseeAxiosPublic from "../UseeAxiosPublic";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const axiosPublic = UseeAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photo: result.user?.photoURL,
        role: "customer"
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full  bg-[#00AEFF] text-white font-bold"
      >
        <FaGoogle></FaGoogle>
        Log In with Google
      </button>
    </div>
  );
};

export default SocialLogin;
