import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center space-y-6 h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h1>
      <FaTriangleExclamation className="text-6xl text-yellow-400" />
      <p className="text-gray-600 text-center max-w-md">
        Looks like you haven’t added anything to your cart yet. Browse our
        products and find something you love!
      </p>
      <Link
        to="/products"
        className="px-6 py-3 bg-dark-blue-700 text-white text-lg rounded-lg shadow hover:bg-dark-blue-900 transition duration-200"
      >
        Shop Now
      </Link>
      {/* <img
        src="/empty-cart.svg" // Replace with your placeholder image
        alt="Empty Cart"
        className="w-64 h-64 object-contain mt-8"
      /> */}
    </div>
  );
};

export default EmptyCart;
