import Lottie from "lottie-react";
import React, { useContext } from "react";
import LoginLottie from "./Login.json";
import SocialLogin from "./SocialLogIn/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const used = { email, password };
    console.log(used);

    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // Swal.fire({
      //   title: "LogIn successful",
      //   showClass: {
      //     popup: `
      //               animate__animated
      //               animate__fadeInUp
      //               animate__faster
      //             `,
      //   },
      //   hideClass: {
      //     popup: `
      //               animate__animated
      //               animate__fadeOutDown
      //               animate__faster
      //             `,
      //   },
        
      // });
      Swal.fire({
        title: "success!",
        text: "Logged In",
        icon: "success",
        confirmButtonText: "Continue",
      });
      
      
      navigate(from, { replace: true });
    });
    
  };

  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-blue-100">
          <div className="hero-content  w-5/12 flex-row-reverse ">
            <div className="text-center lg:text-left">
              <Lottie
                className="mb-5 w-96 ml-9"
                animationData={LoginLottie}
              ></Lottie>
            </div>
            <div className="card  w-full shrink-0 bg-white shadow-2xl">
              <h1 className="text-5xl font-bold pt-5 text-center mb-11">
                Login now!
              </h1>
              <form onSubmit={handleLogin} className="card-body bg-white">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text ">Email</span>
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
                    <span className="label-text ">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered "
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-xl bg-[#00AEFF] hover:bg-[#0088CE] text-white">
                    Login
                  </button>

                  {/* <button
                  //   onClick={handleLoginWithGoogle}
                  className="btn mt-4 btn-primary"
                >
                 <FaGoogle></FaGoogle> 
                  Log In with Google
                </button> */}
                <div className="">
                <SocialLogin></SocialLogin>
                </div>
                  
                  <p className="mt-4">
                    Don't have an acoount? Click on{" "}
                    <Link to="/register" className="text-red-600 font-bold">
                      Register{" "}
                    </Link>
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

export default LogIn;
