import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import Spinner from "../Spinner";
import EmptyCart from "../EmptyCart"; 
import { ShopContext } from "../context/ShopContext";

const CartPage = () => {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 

  const { cartItems } = useContext(ShopContext); 

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await fetch(`/api/items`);
        const data = await res.json();
        setItems(data); 
      } catch (error) {
        console.log("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // Check if cartItems is null, empty, or has all quantities set to zero
  const isCartEmpty =
    !cartItems || Object.values(cartItems).every((qty) => qty === 0);

  return loading ? (
    <Spinner />
  ) : isCartEmpty ? (
    <EmptyCart />
  ) : (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Your Cart
      </h1>

      <div className="flex flex-col space-y-4">
        {/* Render only items with non-zero quantities */}
        {items.map((item) =>
          cartItems[item.id] !== 0 ? (
            <CartItem key={item.id} data={item} quantity={cartItems[item.id]} />
          ) : null
        )}
      </div>

      {/* Add Total Price and Checkout Button Here */}
      <div className="flex justify-between items-center mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold">
          Total: $
          {items
            .reduce(
              (total, item) => total + (cartItems[item.id] || 0) * item.price,
              0
            )
            .toFixed(2)}
        </h2>
        {/* <Link
          to="/checkout"
          className="px-6 py-2 bg-dark-blue-700 text-white rounded-lg hover:bg-dark-blue-900 transition-all ease-in-out"
        >
          Checkout
        </Link> */}
      </div>
    </div>
  );
};

export default CartPage;
