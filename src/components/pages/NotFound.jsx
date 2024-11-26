import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return <section className="text-center flex flex-col justify-center items-center h-screen">
    <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
    <h1 className="text-6xl font-bold mb-4">Not Found</h1> 
    <p className="text-xl mb-5"> This Page does not exist</p> 
    <Link to="/" className="text-white bg-dark-blue-700 hover:bg-blue-950 rounded-xl px-3 py-2">Go Back</Link>  
  </section>;
};

export default NotFound;