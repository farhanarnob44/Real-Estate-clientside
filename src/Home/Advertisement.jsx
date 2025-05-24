import React, { useEffect, useState } from "react";
import SectionTitle from "../Components/SectionTitle";
import AdvertisedItem from "./AdvertisedItem";
import { i } from "motion/react-client";

const Advertisement = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("https://real-estate-server-lilac.vercel.app/allproperties")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
    console.log(menu);
  }, []);
  return (
    <div>
      <SectionTitle heading="Top Choices" subHeading="This week"></SectionTitle>

      <div className="w-11/12 mx-auto flex flex-row gap-5">
        {menu.map((item) => (
          <AdvertisedItem key={item._id} item={item}></AdvertisedItem>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
