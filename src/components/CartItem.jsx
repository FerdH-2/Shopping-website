import React, { useContext } from "react";
import { ShopContext } from "./context/ShopContext";

const CartItem = ({ data }) => {
  const { addToCart, removeFromCart, cartItems, updateItemCount } = useContext(ShopContext);
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      {/* Product Info */}
      <div className="flex items-center space-x-4">
        <img
          src={data.image}
          alt={data.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
          <p className="text-sm text-gray-600">Price: ${data.price}</p>
        </div>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center space-x-2">
        <button
          className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          onClick={() => removeFromCart(data.id)}
        >
          -
        </button>
        <input value={cartItems[data.id]} onChange={(e) => updateItemCount(Number(e.target.value), data.id)} />
        <button
          className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          onClick={() => addToCart(data.id)}
        >
          +
        </button>
      </div>

      {/* Remove Item */}
      <button className="text-red-500 hover:text-red-700">Remove</button>
    </div>
  );
};

export default CartItem;
