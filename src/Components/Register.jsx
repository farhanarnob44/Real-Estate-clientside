import React, { useContext, useState } from "react";
import { data, Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogIn/SocialLogin";
import RegisterLottieData from "./regoster.json";
import Lottie from "lottie-react";
import { AuthContext } from "../Provider/AuthProvider";
import UseeAxiosPublic from "./UseeAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const axiosPublic = UseeAxiosPublic();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");

  // const validatePassword = () => {
  //   const hasCapitalLetter = /[A-Z]/.test(password);
  //   const hasNumber = /[0-9]/.test(password);

  //   if (!hasCapitalLetter || !hasNumber) {
  //     setErrorMessage('Password must contain at least one capital letter and one number.');
  //     return false;
  //   }
  //   return true; // Password is valid
  // };

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const used = { email, password, photo, name };
    console.log(used);

    setError("");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Must contain uppercase, and lowercase letters, and be at least 6 characters long. "
      );
    }

    // console.log(error)

    // if(isEmailRe)

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const userInfo = {
        name: name,
        email: email,
        photo: photo,
        role: "customer",
      };
      axios.post("https://real-estate-server-lilac.vercel.app/users", userInfo).then((result) => {
        if (result) {
          //  console.log("aschje")
          Swal.fire({
            title: "success!",
            text: "User addeded",
            icon: "success",
            confirmButtonText: "Continue",
          });
        }
      })

     
        .catch((error) => {
          console.error("Firebase Registration Error:", error); // Log any Firebase error
          if (firebaseError.code === "auth/email-already-in-use") {
            setError(
              "This email address is already in use. Please log in or use a different email."
            );
          } else {
            setError(firebaseError.message); // Display other Firebase errors
          }
        });

      navigate(from, { replace: true });
    });
  };
  return (
    <div className="">
      <div>
        <div className="hero bg-blue-100 min-h-screen">
          <div className="hero-content w-5/12 flex ">
            <div className="text-center lg:text-left">
              <Lottie
                className="mb-5 w-96 ml-9"
                animationData={RegisterLottieData}
              ></Lottie>
            </div>
            <div className="card  w-full bg-white shrink-0 shadow-2xl">
              <h1 className="text-5xl font-bold  text-center mb-3 mt-3">
                Register!
              </h1>
              <form onSubmit={handleRegister} className="card-body ">
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
                    placeholder="Must contain uppercase, and lowercase letters, and be at least 6 characters long."
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
              {error && <p className="text-red-600 pl-4 pb-4">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
