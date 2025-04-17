import React from "react";
import { Link } from "react-router-dom";

const WishedItems = ({item}) => {
  const { _id, propertyTitle, propertyImage, priceRange, details, category } = item;
  return (
    <div>
      <div className="mb-10">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-2 pt-2">
            <img
              src={propertyImage}
              alt="Shoes"
              className="rounded-xl w-full h-80"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{propertyTitle}</h2>
            <p>Price:$S {priceRange}</p>
            <div className="card-actions">
              <Link
                
                // onClick={handleViewDetails}
                className="btn border-b-4 border-black bg-white rounded-none hover:bg-[#0088CE] hover:text-white"
              >
                Purchase
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishedItems;
