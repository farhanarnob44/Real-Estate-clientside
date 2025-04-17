import React from 'react';
import { FaFire } from 'react-icons/fa';

const AdvertisedItem = ({item}) => {
    // console.log(item)
    const { propertyTitle, propertyImage, priceRange, details, category } = item;
    return (
        <div className=" w-7/12 mt-10 mb-36 ml-5 gap-5 mx-auto">
      <div className=" ">
        <div className="justify-between flex flex-row w-11/12 mb-3 mt-3">
          <h1></h1>
          <div className="flex flex-row w-14 justify-center text-center bg-red-600 items-center  mt-1 ml-1 text-white">
          <h1 className="text-center ">Hot </h1>
          < FaFire  className="text-center"/>
          </div>
        </div>
        <div className="card  bg-base-100 w-96 shadow-lg">
          <figure className="">
            <img src={propertyImage} alt="Shoes" className="rounded-lg h-72 w-72" />
          </figure>
          <div className="card-body border-none items-center text-center">
            <h2 className="card-title">{propertyTitle}</h2>
            {/* <p>Category: {category}$</p> */}
            <p>Price: {priceRange}$</p>
            <div className="card-actions">
              <button className="btn btn-outline bg-slate-200 text-black rounded-none border-0 border-b-4  hover:bg-[#CB8161] hover:text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    );
};

export default AdvertisedItem;