import React, { createContext, useState, useEffect } from "react";
import Spinner from "../Spinner";

export const ShopContext = createContext(null);

const getDefaultCart = async () => {
  try {
    const res = await fetch(
      `https://grabngo-xtrasupermarket.vercel.app/api/json-server/items`
    );
    const data = await res.json();
    console.log(data);

    let cart = {};
    for (let i = 1; i < data.length + 1; i++) {
      cart[i] = 0; // Initialize cart items with a quantity of 0
    }
    return cart;
  } catch (error) {
    console.log(error);
  }
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // Initializing with an empty object
  const [loading, setLoading] = useState(true); // To track loading state

  useEffect(() => {
    const initializeCart = async () => {
      const defaultCart = await getDefaultCart(); // Fetch the cart items
      setCartItems(defaultCart); // Set the cart items once fetched
      setLoading(false); // Set loading to false once data is ready
    };

    initializeCart(); // Call the function to initialize the cart
  }, []); // Empty dependency array means this runs once when the component mounts

  const addToCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: (prevState[itemId] || 0) + 1, // Safe fallback to 0 if the item doesn't exist
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: (prevState[itemId] || 0) - 1, // Safe fallback to 0 if the item doesn't exist
    }));
  };

  const updateItemCount = ((newAmount, itemId) => {
    setCartItems((prevState) => ({ ...prevState, [itemId]: newAmount }))
  })

  // If still loading, render a loading state (like a spinner)
  if (loading) {
    return <Spinner />;
  }

  console.log(cartItems); // You can log to check the cart contents

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemCount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
