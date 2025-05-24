import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import UseeAxiosSecure from "../UseeAxiosSecure";
import Swal from "sweetalert2";

const AddProperties = () => {
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (user && user.email) {
      setUserEmail(user.email);
      setUserName(user.displayName);
    }
  }, [user]);
  //   const { register, handleSubmit } = useForm();
  //   const onSubmit = (data) => {
  //     console.log(data);
  //   };
  const axiosSecure = UseeAxiosSecure();

  const handleAddEquipment = async (e) => {
    e.preventDefault();
    const userEmail = e.target.userEmail.value;
    const name = e.target.propertyTitle.value;
  
    const location = e.target.propertyLocation.value;
    const price = e.target.price.value;
    const image = e.target.propertyImage.value;
    const userName = e.target.userName.value;
    console.log(price)


    const userr = { name, location, price, image, userName, userEmail };
    console.log(userr);

    const items = {
      propertyTitle: name,
      propertyLocation: location,
      priceRange: price,
      propertyImage: image,
      agentName: userName,
      agentEmail: userEmail,
      // details: details,
    };

    const menuRes = await axiosSecure.post("/allproperties", items);
    // console.log(items.propertyTitle);
    if (menuRes.data.insertedId) {
      // pop up
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `property has been added`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      {/* <h1>This is add Product</h1> */}

      <SectionTitle
        heading="Add an Item"
        subHeading="What's new"
      ></SectionTitle>

      <form className="w-10/12 mx-auto" onSubmit={handleAddEquipment}>
        <div className="flex justify-around px-5 items-center gap-8 text-center ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Property Title</span>
            </label>
            <input
              type="text"
              placeholder="enter the product title name"
              name="propertyTitle"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Property Location</span>
            </label>
            <input
              type="text"
              placeholder="enter the property location"
              name="propertyLocation"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex justify-around px-5 items-center gap-8 text-center">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="enter the price here"
              name="price"
              className="input input-bordered"
              min={1}
              required
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Property Image</span>
            </label>
            <input
              type="text"
              placeholder="enter the property image"
              name="propertyImage"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="flex justify-around px-5 items-center gap-8 text-center">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Agent Name</span>
            </label>
            <input
              type="text"
              placeholder="enter the image url"
              value={userName}
              name="userName"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Agent Email</span>
            </label>
            <input
              type="text"
              placeholder="enter the image url"
              value={userEmail}
              // onChange={handleAddEquipment}
              name="userEmail"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-4 p-4">
          <button className="btn bg-blue-600 hover:bg-blue-800 font-bold text-white">
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperties;
