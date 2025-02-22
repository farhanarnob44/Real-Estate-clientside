import React from "react";

const AllPropertiesItem = ({ item }) => {
//   console.log(item);
  const { propertyTitle, propertyImage, priceRange, details, category } = item;
  return (
    <div className="mb-10">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-2 pt-2">
          <img src={propertyImage} alt="Shoes" className="rounded-xl w-full h-80" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{propertyTitle}</h2>
          <p>Price:$S {priceRange}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn border-b-4 border-black bg-white rounded-none hover:bg-[#0088CE] hover:text-white"
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
