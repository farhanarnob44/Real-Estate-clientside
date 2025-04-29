import React, { useState } from "react";
import ViewDetails from "./ViewDetails";
import { Link, useNavigate } from "react-router-dom";

const AllPropertiesItem = ({ item }) => {

  // const [id, setId] = useState([]);

  const navigate = useNavigate();

  const handleViewDetails = () => {
    // setId(_id)
    // console.log(id)
    // const idd = parseInt(_id)
    // console.log(idd);
    // console.log(_id);
    // ViewDetails({_id});
    navigate(`/viewDetails/${item._id}`);
  }

//   console.log(item);
  const {_id, propertyTitle, propertyImage, priceRange, details, category } = item;
  return (
    <div className="mb-10">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-2 pt-2">
          <img src={propertyImage} alt="Shoes" className="rounded-xl w-full h-80" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{propertyTitle}</h2>
          <p>Price:$ {priceRange}</p>
          <div className="card-actions">
            <Link to={`/viewDetails/${_id}`}
              onClick={handleViewDetails}
              className="btn  rounded-none bg-blue-700 hover:bg-blue-800 font-bold text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPropertiesItem;
