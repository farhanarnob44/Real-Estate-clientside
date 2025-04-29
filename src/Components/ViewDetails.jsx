import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import useRole from "./useRole";
import { useQuery } from "@tanstack/react-query";
import UseeAxiosSecure from "./UseeAxiosSecure";

const ViewDetails = () => {
  // const { _id } = useParams();
  // console.log(_id);
  const [role, isLoading] = useRole();
  // console.log(role);

  const { user } = useContext(AuthContext);
  const axiosSecure = UseeAxiosSecure();

  // console.log(user.email);
  // const email = user.email;

  const data = useLoaderData();

  const wiShedDataa = {
    id: data._id,
    propertyTitle: data.propertyTitle,
    propertyImage: data.propertyImage,
    agentName: data.agentName,
    agentImage: data.agentImage,
    verificationStatus: data.verificationStatus,
    priceRange: data.priceRange,
    email: user.email,
  };
  const joy = data._id;


  const [wishlistButtonDisabled, setWishlistButtonDisabled] = useState(false);
  const [menu, setMenu] = useState([]);
  const { refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/wishlist");
      // console.log(res)
      // console.log(res.data)
       setMenu(res.data);
    },
  });

  const realData = menu.map(
    (item) => item.propertyTitle 
  );
  const realEmail = menu.map(
    (item) => item.email 
  );
  console.log(realData)
  console.log(data.propertyTitle)
  const realDataa = realData.find((item) => item === data.propertyTitle);
  const realEmaill = realEmail.find((item) => item === user.email);
  // if(realDataa){
  //   console.log("hoise")
  // }
  // else{
  //   console.log("name nai")
  // }
  // console.log(menu)

  // console.log(data._id)
  // if (!realData) {
  //   console.log("hoise");
  // }
  //   // setWishlistButtonDisabled(true);
  // } else {
  //   console.log("pai nai");
  // }


  const handleClick = async () => {
    if (realData) {
      console.log("hoise");
    }

    setWishlistButtonDisabled(true);
    try {
      // console.log("Data being sent:", data);
      const response = await axios.post(
        "http://localhost:5000/wishlist",
        wiShedDataa
      );
      const { wishedData, insertResult } = response.data; // Assuming the data you need is in response.data



      // Example of handling a successful response:
      if (response.status === 200 || response.status === 201) {

      } else {
        // console.warn("Unexpected response status:", response.status);
        setWishlistButtonDisabled(false);
        // Handle unexpected status codes
      }

      Swal.fire({
        title: "Property Added to the wishlist successfully",
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
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      // Optionally, display an error message to the user
    }
  };



  return (
    <div className="mb-20">
      <div className="card mx-auto card-side bg-base-100 w-[1500px] h-[900px] flex flex-row gap-4 items-center justify-center">
        <figure className="w-[900px]">
          <img
            src={data.propertyImage}
            alt="Movie"
            className="my-10 h-[700px]  mx-7 rounded-3xl"
          />
        </figure>
        <div className="card-body mr-3">
          <h2 className="card-title text-4xl font-bold mb-7">{data.propertyTitle}</h2>
          <p><span className="font-semibold text-xl mt-4">Location :</span> {data.propertyLocation}</p>
          <p><span className="font-semibold text-xl mt-4">Price Range :</span> $ {data.priceRange}</p>
          <p><span className="font-semibold text-xl mt-4">Agent Name:</span> {data.agentName}</p>
          <p><span className="font-semibold text-xl mt-4">Agent email:</span> {data.agentEmail}</p>
          {/* <p>Property Lcoation: {data.}</p> */}

          {role === "customer" ? (
            <div className="card-actions justify-around mt-6">

              {
                realDataa && realEmaill ? <><h1 className="border border-red-700 borer-2 p-4 text-red-700 mt-5 font-bold text-2xl">Already added to Wishlist</h1></> :                 <>
                <button
                  onClick={handleClick}
                  disabled={wishlistButtonDisabled}
                  className="btn btn-primary text-white"
                >
                  Add to wishlist
                </button>
              </>
              }

              {/* <button className="btn btn-primary">Add to cart</button> */}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
