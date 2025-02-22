import React from "react";

const AllPropertiesItem = ({ item }) => {
  console.log(item);
  const { propertyTitle, propertyImage, priceRange, details, category } = item;
  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={propertyImage} alt="Shoes" className="rounded-xl w-96  h-80" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{propertyTitle}</h2>
          <p>Price:$S {priceRange}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn border-b-4 border-black bg-white rounded-none hover:bg-[#cb8161] hover:text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPropertiesItem;
