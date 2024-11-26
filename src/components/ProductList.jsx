import React, { useState } from "react";
import { FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductList = ({ displayedItem }) => {
  const average = displayedItem.rating.average;
  const fullStars = Math.floor(average);
  const halfStar = average % 1 >= 0.5;
  const emptyStars = 5 - Math.ceil(average);

  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = displayedItem.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="shadow-sm hover:shadow-2xl p-5 rounded-lg bg-white">
      <div className="w-auto h-[250px] mb-5">
        <img
          src={displayedItem.image}
          alt={displayedItem.name}
          className="h-full w-full object-cover"
        />
      </div>
      <Link
        to={`/products/${displayedItem.id}`}
        className="flex gap-3 items-center px-5 py-2 w-fit m-auto text-white cursor-pointer rounded-full relative -mt-10 bg-dark-blue-700 hover:bg-green-500"
      >
        <p className="text-xs font-bold text-blue-100">View Item</p>
      </Link>
      <div className="mt-5">
        <p className="text-lg font-bold mb-2 text-gray-500">
          {displayedItem.name}
        </p>
        <p className="text-[12px] font-sans font-medium text-gray-400">
          {description}
        </p>
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="text-[10px] bg-indigo-400 px-4 py-1 font-bold text-white mt-2 rounded-md ml-2"
        >
          {showFullDescription ? "Show Less" : "Show More"}
        </button>
        <div className="flex bg-blue-100 items-center justify-between px-4 py-2 mt-2 flex-wrap">
          <p className="font-medium text-sm flex items-center">
            <FaNairaSign className="text-green-600"/>
            {displayedItem.price}{" "}
          </p>
          <div className="text-sm">
            Category: <p className="inline">{displayedItem.category}</p>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <p className="text-orange-500"> {"★".repeat(fullStars)}</p>
          <p>{halfStar && "☆"}</p>
          <p>{"☆".repeat(emptyStars)}</p>
          <p className="ml-10">({displayedItem.rating.count} reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
