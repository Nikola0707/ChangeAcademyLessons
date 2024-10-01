"use client";
import { useCartStore } from "../store/useStore";

const Cart = () => {
  const items = useCartStore((state) => state.items); // Get cart items from the store
  const removeItem = useCartStore((state) => state.removeItem); // Get remove item function from the store
  console.log("items", items);
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {items.map(({ product, quantity, size }, index) => (
            <li
              key={`${product.id}-${quantity}-${size}`}
              className="flex justify-between items-center p-4 border-b border-gray-300"
            >
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 object-cover"
                />
                <div className="ml-3">
                  <h2 className="text-lg font-semibold underline">
                    {product.title}
                  </h2>
                  <p className="text-gray-700">Size: {size}</p>
                  <p className="text-gray-700">Quantity: {quantity}</p>
                  <p className="font-bold">Product Price: ${product.price}</p>
                  <p className="font-bold">
                    Total Price: ${(product.price * quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                className="text-red-600 hover:text-red-800 border border-red-500 hover:border-red-800 px-4 rounded-lg"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
