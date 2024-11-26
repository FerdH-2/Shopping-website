import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Menu_listings = ({ isHome = false }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_API_URL; 

  useEffect(() => {
    const fetchItems = async (limit = 4) => {
      const apiUrl = isHome
        ? `${API_BASE_URL}/items?_limit=${limit}`
        : `${API_BASE_URL}/items`;
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setItems(data); 
        console.log(data);
      } catch (error) {
        console.log("An error occurred while fetching the data", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchItems();
  }, [API_BASE_URL, isHome]); // Dependency array to trigger re-fetching when necessary

  // return (
  //   <section className="px-10 py-10 bg-gray-100">
  //     {isHome ? (
  //       <div className="w-full sm:flex sm:justify-between items-center mb-5 flex-wrap xs:grid xs:justify-center">
  //         <h3 className="font-semibold text-2xl">
  //           Best Seller{" "}
  //           <span className="text-green-500 inner-text-shadow">Products</span>
  //         </h3>
  //         <Link
  //           to="/products"
  //           className="text-sm font-semibold px-8 py-3 bg-green-500 rounded-full text-white hover:text-green-500 hover:bg-dark-blue-700 xs:text-center"
  //         >
  //           View all Products
  //         </Link>
  //       </div>
  //     ) : (
  //       <h3 className="font-semibold text-2xl text-center mb-5 text-dark-blue-700">
  //         Browse
  //         <span className="text-green-500 inner-text-shadow"> Products</span>
  //       </h3>
  //     )}

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-10 mb-20">
          {items.length > 0 ? (
            items.map((item) => {
              return <ProductList key={item.id} item={item} />;
            })
          ) : (
            <p>No products available at the moment.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Menu_listings;
