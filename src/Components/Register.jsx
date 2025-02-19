import React, { useContext } from "react";
import { data, Link } from "react-router-dom";
import SocialLogin from "./SocialLogIn/SocialLogin";
import RegisterLottieData from "./regoster.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Provider/AuthProvider";
import UseeAxiosPublic from "./UseeAxiosPublic";
import axios from "axios";

const Register = () => {
  const axiosPublic = UseeAxiosPublic();
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const used = { email, password, photo, name };
    console.log(used);

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const userInfo = {
        name: name,
        email: email,
        photo: photo,
        role: "customer"
      };
      axios.post("http://localhost:5000/users", userInfo)
      .then((result) => {
        if (result.insertedId) {
          console.log("user added to the databse")
          Swal.fire({
            title: "Registration successful",
            showClass: {
              popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `,
            },
            hideClass: {
              popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `,
            },
          });
          navigate("/");
        }
      }
    )
    .catch((error) => console.log(error));
    });
  };
  return (
    <div>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content w-5/12 flex ">
            <div className="text-center lg:text-left">
              <Lottie
                className="mb-5 w-96 ml-9"
                animationData={RegisterLottieData}
              ></Lottie>
            </div>
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
              <h1 className="text-5xl font-bold text-center mb-3 mt-3">
                Register!
              </h1>
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="enter your name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="enter your pohoto"
                    name="photo"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#00AEFF] hover:bg-[#0088CE] text-white">
                    Register
                  </button>
                  <SocialLogin></SocialLogin>
                  <p className="mt-4">
                    Already have an account? Click on{" "}
                    <Link to="/logIn" className="text-red-600 font-bold">
                      Log In
                    </Link>{" "}
                    now
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
