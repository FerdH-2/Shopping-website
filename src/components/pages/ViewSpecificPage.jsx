import React, { useContext, useEffect, useState } from "react";
import Spinner from "../Spinner";
import { Link, useParams } from "react-router-dom";
import { FaCircleLeft } from "react-icons/fa6";
import { ShopContext } from "../context/ShopContext";
import items from "../../../db.json";

const ViewSpecificPage = () => {
  const [loading, setLoading] = useState(true);
  const [displayedItem, setDisplayedItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchedProduct = async () => {
      const item = await fetchById(id);
      if (item) {
        setDisplayedItem(item);
      } else {
        console.log("Item not found!");
      }
      setLoading(false);
    };
    fetchedProduct();
  }, [id]);

  const fetchById = async (id) => {
    try {
      const item = items.find((item) => item.id === parseInt(id, 10));
      return item;
    } catch (error) {
      console.log("An error occurred while fetching data by id", error);
    }
  };

  const average = displayedItem?.rating?.average || 0;
  const count = displayedItem?.rating?.count || 0;
  const fullStars = Math.floor(average);
  const halfStar = average % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - (fullStars + halfStar);

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = displayedItem ? cartItems[displayedItem.id] || 0 : 0;
  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <div className="container mx-auto px-4 py-8">
      <Link className="absolute w-12 h-12" to="/products">
        <FaCircleLeft className="font-bold text-3xl text-dark-blue-700" />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={displayedItem?.image || "/placeholder.jpg"}
            alt={displayedItem?.name || "Product Image"}
            className="w-full max-w-sm object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {displayedItem?.name || "Unknown Item"}
          </h1>
          {displayedItem?.category && (
            <p className="text-gray-600">
              <span className="font-semibold">Category:</span>{" "}
              {displayedItem.category}
            </p>
          )}
          {displayedItem?.price !== undefined && (
            <p className="text-xl text-green-500 font-semibold">
              ${displayedItem.price.toFixed(2)} per unit
            </p>
          )}
          {displayedItem?.stock !== undefined && (
            <p className="text-gray-600">
              <span className="font-semibold">In Stock:</span>{" "}
              {displayedItem.stock}
            </p>
          )}
          {displayedItem?.rating && (
            <p className="text-gray-600 flex items-center space-x-2">
              <span className="font-semibold">Rating:</span>
              <span>
                {"⭐".repeat(fullStars)}
                {/* {halfStar ? "✨" : ""} */}
                {halfStar ? "☆" : ""}
                {"☆".repeat(emptyStars)}
              </span>
              <span>({count} reviews)</span>
            </p>
          )}
          {displayedItem?.description && (
            <p className="text-gray-800">{displayedItem.description}</p>
          )}

          {/* Additional Details Section */}
          {displayedItem?.details && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="font-semibold text-lg mb-2">Details:</h2>
              <ul className="text-gray-600 space-y-1">
                {displayedItem.details.origin && (
                  <li>
                    <span className="font-semibold">Origin:</span>{" "}
                    {displayedItem.details.origin}
                  </li>
                )}
                {displayedItem.details.weight && (
                  <li>
                    <span className="font-semibold">Weight:</span>{" "}
                    {displayedItem.details.weight}
                  </li>
                )}
                {displayedItem.details.packaging && (
                  <li>
                    <span className="font-semibold">Packaging:</span>{" "}
                    {displayedItem.details.packaging}
                  </li>
                )}
                {displayedItem.details.type && (
                  <li>
                    <span className="font-semibold">Type:</span>{" "}
                    {displayedItem.details.type}
                  </li>
                )}
                {displayedItem.details.material && (
                  <li>
                    <span className="font-semibold">Material:</span>{" "}
                    {displayedItem.details.material}
                  </li>
                )}
                {displayedItem.details.sizes && (
                  <li>
                    <span className="font-semibold">Sizes:</span>{" "}
                    {displayedItem.details.sizes}
                  </li>
                )}
                {displayedItem.details.care && (
                  <li>
                    <span className="font-semibold">Care:</span>{" "}
                    {displayedItem.details.care}
                  </li>
                )}
                {displayedItem.details.storageOptions && (
                  <li>
                    <span className="font-semibold">Storage Options:</span>{" "}
                    {displayedItem.details.storageOptions}
                  </li>
                )}
                {displayedItem.details.colorOptions && (
                  <li>
                    <span className="font-semibold">Color Options:</span>{" "}
                    {displayedItem.details.colorOptions}
                  </li>
                )}
                {displayedItem.details.warranty && (
                  <li>
                    <span className="font-semibold">Warranty:</span>{" "}
                    {displayedItem.details.warranty}
                  </li>
                )}
                {displayedItem.details.artist && (
                  <li>
                    <span className="font-semibold">Artist:</span>{" "}
                    {displayedItem.details.artist}
                  </li>
                )}
                {displayedItem.details.dimensions && (
                  <li>
                    <span className="font-semibold">Dimensions:</span>{" "}
                    {displayedItem.details.dimensions}
                  </li>
                )}
                {displayedItem.details.medium && (
                  <li>
                    <span className="font-semibold">Medium:</span>{" "}
                    {displayedItem.details.medium}
                  </li>
                )}
                {displayedItem.details.storage && (
                  <li>
                    <span className="font-semibold">Storage:</span>{" "}
                    {displayedItem.details.storage}
                  </li>
                )}
                {displayedItem.details.processor && (
                  <li>
                    <span className="font-semibold">Processor:</span>{" "}
                    {displayedItem.details.processor}
                  </li>
                )}
                {displayedItem.details.memory && (
                  <li>
                    <span className="font-semibold">Memory:</span>{" "}
                    {displayedItem.details.memory}
                  </li>
                )}
                {displayedItem.details.certification && (
                  <li>
                    <span className="font-semibold">Certification:</span>{" "}
                    {displayedItem.details.certification}
                  </li>
                )}
              </ul>
            </div>
          )}

          <button
            onClick={() => addToCart(displayedItem.id)}
            className="px-6 py-2 bg-dark-blue-700 text-white rounded-md hover:bg-gray-edit-100 transition"
          >
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewSpecificPage;
