import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg w-full sm:w-2/3 md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-800">Coming Soon</h2>
        <p className="mt-4 text-xl text-gray-600 mb-4">
          We're working hard to bring something amazing your way. Stay tuned!
        </p>
        <Link
          to="/"
          className="text-white bg-dark-blue-700 hover:bg-blue-950 rounded-xl px-3 py-2"
        >
          Go Back
        </Link>
        <div className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-full sm:w-80 border border-gray-300 rounded-lg"
          />
          <button className="mt-4 w-full sm:w-80 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;