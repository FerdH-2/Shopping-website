import React, { useContext, useEffect, useState } from "react";
import Spinner from "../Spinner";
import { Link, useParams } from "react-router-dom";
import { FaCircleLeft } from "react-icons/fa6";
import { ShopContext } from "../context/ShopContext";

const ViewSpecificPage = () => {
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItemById = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/items/${id}`
        );
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error("Error while fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItemById();
  }, [id]);

  const average = item?.rating?.average || 0;
  const count = item?.rating?.count || 0;
  const fullStars = Math.floor(average);
  const halfStar = average % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - (fullStars + halfStar);

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = item ? cartItems[item.id] || 0 : 0;
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
            src={item?.image || "/placeholder.jpg"}
            alt={item?.name || "Product Image"}
            className="w-full max-w-sm object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {item?.name || "Unknown Item"}
          </h1>
          {item?.category && (
            <p className="text-gray-600">
              <span className="font-semibold">Category:</span> {item.category}
            </p>
          )}
          {item?.price !== undefined && (
            <p className="text-xl text-green-500 font-semibold">
              ${item.price.toFixed(2)} per unit
            </p>
          )}
          {item?.stock !== undefined && (
            <p className="text-gray-600">
              <span className="font-semibold">In Stock:</span> {item.stock}
            </p>
          )}
          {item?.rating && (
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
          {item?.description && (
            <p className="text-gray-800">{item.description}</p>
          )}

          {/* Additional Details Section */}
          {item?.details && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="font-semibold text-lg mb-2">Details:</h2>
              <ul className="text-gray-600 space-y-1">
                {item.details.origin && (
                  <li>
                    <span className="font-semibold">Origin:</span>{" "}
                    {item.details.origin}
                  </li>
                )}
                {item.details.weight && (
                  <li>
                    <span className="font-semibold">Weight:</span>{" "}
                    {item.details.weight}
                  </li>
                )}
                {item.details.packaging && (
                  <li>
                    <span className="font-semibold">Packaging:</span>{" "}
                    {item.details.packaging}
                  </li>
                )}
                {item.details.type && (
                  <li>
                    <span className="font-semibold">Type:</span>{" "}
                    {item.details.type}
                  </li>
                )}
                {item.details.material && (
                  <li>
                    <span className="font-semibold">Material:</span>{" "}
                    {item.details.material}
                  </li>
                )}
                {item.details.sizes && (
                  <li>
                    <span className="font-semibold">Sizes:</span>{" "}
                    {item.details.sizes}
                  </li>
                )}
                {item.details.care && (
                  <li>
                    <span className="font-semibold">Care:</span>{" "}
                    {item.details.care}
                  </li>
                )}
                {item.details.storageOptions && (
                  <li>
                    <span className="font-semibold">Storage Options:</span>{" "}
                    {item.details.storageOptions}
                  </li>
                )}
                {item.details.colorOptions && (
                  <li>
                    <span className="font-semibold">Color Options:</span>{" "}
                    {item.details.colorOptions}
                  </li>
                )}
                {item.details.warranty && (
                  <li>
                    <span className="font-semibold">Warranty:</span>{" "}
                    {item.details.warranty}
                  </li>
                )}
                {item.details.artist && (
                  <li>
                    <span className="font-semibold">Artist:</span>{" "}
                    {item.details.artist}
                  </li>
                )}
                {item.details.dimensions && (
                  <li>
                    <span className="font-semibold">Dimensions:</span>{" "}
                    {item.details.dimensions}
                  </li>
                )}
                {item.details.medium && (
                  <li>
                    <span className="font-semibold">Medium:</span>{" "}
                    {item.details.medium}
                  </li>
                )}
                {item.details.storage && (
                  <li>
                    <span className="font-semibold">Storage:</span>{" "}
                    {item.details.storage}
                  </li>
                )}
                {item.details.processor && (
                  <li>
                    <span className="font-semibold">Processor:</span>{" "}
                    {item.details.processor}
                  </li>
                )}
                {item.details.memory && (
                  <li>
                    <span className="font-semibold">Memory:</span>{" "}
                    {item.details.memory}
                  </li>
                )}
                {item.details.certification && (
                  <li>
                    <span className="font-semibold">Certification:</span>{" "}
                    {item.details.certification}
                  </li>
                )}
              </ul>
            </div>
          )}

          <button
            onClick={() => addToCart(item.id)}
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
