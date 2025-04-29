import React from "react";
import SectionTitle from "../Components/SectionTitle";
import venture from "../assets/venture.png";
// import adidas from "../assets/";
import adidas from "../assets/adidas_real.png"
// import sportwink from "../assets/sportwink.avif"
import nike from "../assets/nike.webp"
// import urban from "../assets/urban.webp"
// import horse from "../assets/horse.avif"
// import rinixa from "../assets/rinixa.avif"
import jordan from "../assets/Jordaen.png"
// import venture from "../assets/venture.png"
import vega from "../assets/vega.webp"
import sport from "../assets/sport.avif"
import ea from "../assets/ea.jpg"
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marque = () => {
  return (
    <div>
      <SectionTitle
        heading="Thousand of clients"
        subHeading="Around the world"
      ></SectionTitle>
      <div className="w-full flex gap-3 items-center bg-white p-2">
        {/* <p className="bg-red-600 text-base-100  px-3 py-1"> Clients</p> */}
        <Marquee pauseOnHover={true} speed={200} className="">
          <Link to="/news">
            <img className="h-[250px]" src={venture} alt="" />
          </Link>
          <Link to="/news">
            <img className="h-[250px]" src={adidas} alt="" />
          </Link>
          <Link to="/news">
            <img className="h-[250px]" src={vega} alt="" />
          </Link>
          <Link to="/news">
            <img className="h-[250px]" src={nike} alt="" />
          </Link>
          <Link to="/news">
            <img className="h-[250px]" src={sport} alt="" />
          </Link>
          <Link to="/news">
            <img className="h-[250px]" src={ea} alt="" />
          </Link>
          <Link to="/news">
            <img className="h-[250px]" src={jordan} alt="" />
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
