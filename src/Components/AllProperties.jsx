import React, { useEffect, useState } from "react";
import cover from "../assets/cover.jpg";
import AllPropertiesItem from "./AllPropertiesItem";
import SectionTitle from "./SectionTitle";

const AllProperties = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("https://real-estate-server-lilac.vercel.app/allproperties")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  return (
    <div className="mt-2">
      <div
        className="hero bg-cover h-[900px]"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Free shipping</h1>
            <p className="mb-5">On around 50$. Hurryup and grab your offer!</p>
          </div>
        </div>
      </div>
      <div className="my-10">
      <SectionTitle heading="Top Choices" subHeading="This week"></SectionTitle>
      </div>


      <div className="w-11/12 mt-10 mx-auto grid grid-cols-3 gap-5">
        {menu.map((item) => (
          <AllPropertiesItem key={item._id} item={item}></AllPropertiesItem>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
