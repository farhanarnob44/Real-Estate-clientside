import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import { FaTrash } from "react-icons/fa6";
import WishedItems from "./WishedItems";
import { AuthContext } from "../../Provider/AuthProvider";

const Wishlist = () => {
  const {user} = useContext(AuthContext);
  // const email = user.email;
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/wishlist/")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.email === user.email);
        setMenu(popularItems);
      });
  }, []);
  console.log(menu);

  return (
    <div>
      <h1>This is wishlist section</h1>

      <div>
        <SectionTitle
          heading="wished Items"
          subHeading="Hurry Up and purchase"
        ></SectionTitle>
        <h2 className="text-3xl ml-9 ">Total properties : {menu.length}</h2>
        <div className="w-11/12 mt-10 mx-auto grid grid-cols-3 gap-5">
          {menu.map((item) => (
            <WishedItems key={item._id} item={item}></WishedItems>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
