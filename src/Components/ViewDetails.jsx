import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ViewDetails = () => {
  // const { _id } = useParams();
  // console.log(_id);

  const data = useLoaderData();
  const joy = data._id;
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/wishlist/")
  //     .then((res) => res.json())
  //     .then((bal) => {
  //       setMenu(bal);
  //     });
  // }, []);
  // console.log(menu)
  // const property = menu.find((prop) => prop.id === data._id);
  // console.log(property);


  const [wishlistButtonDisabled, setWishlistButtonDisabled] = useState(false);

  // if(property === true){
  //   setWishlistButtonDisabled(true);
  //   console.log("done");
  // }

  // function handleClick() {
  //   handleWishList(); // You cannot await here directly
  //   console.log('Wishlist operation initiated');
  // }

  const handleClick = async () => {
    if(joy !== true){
      console.log("hoise");

  }

    setWishlistButtonDisabled(true);
    try {
      // console.log("Data being sent:", data);
      const response = await axios.post("http://localhost:5000/wishlist", data);
      const { wishedData, insertResult } = response.data; // Assuming the data you need is in response.data

      // console.log("Response from server:", response);
      // console.log("Wished data:", wishedData);
      // console.log("Insert Result:", insertResult);

      // Example of handling a successful response:
      if (response.status === 200 || response.status === 201) {
        // console.log("Item added to wishlist successfully!");
        // You might want to update your component's state or show a message here
      } else {
        // console.warn("Unexpected response status:", response.status);
        setWishlistButtonDisabled(false);
        // Handle unexpected status codes
      }

      Swal.fire({
        title: "Custom animation with Animate.css",
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

  // const handleClick = () =>  {
  //   setWishlistButtonDisabled(true);

  //   // console.log(joy);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/wishlist/")
  //       .then((res) => res.json())
  //       .then((bal) => {
  //         setMenu(bal);
  //       });
  //   }, []);
  //       const property = menu.find((prop) => prop.id === joy);
  //   console.log(property)

  // }

  // const handleWishList = async () => {

  //   const {wishedData} = await axios.post('http://localhost:5000/wishlist',data)

  //   console.log(data)
  // }

  // console.log(data);

  // if (_id !== true) {
  //   console.log(_id);
  //   const [menu, setMenu] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:5000/allproperties")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMenu(data);
  //       });
  //   }, []);

  //   const property = menu.find((prop) => prop.id === _id);
  //   console.log(property)
  // }
  // else{
  //   console.log(_id);
  // }

  // console.log(_id);

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
          <h2 className="card-title">{data.propertyTitle}</h2>
          <p>Location : {data.propertyLocation}</p>
          <p>Price Range : {data.priceRange}</p>

          <div className="card-actions justify-around mt-6">
            <button
              onClick={handleClick}
              disabled={wishlistButtonDisabled}
              className="btn btn-primary"
            >
              Add to wishlist
            </button>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
