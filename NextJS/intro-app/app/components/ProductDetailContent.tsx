import { useState } from "react";
import { Product } from "../types/types";
import Image from "next/image";
import { useCartStore } from "../store/useStore";
import Toast from "./Toast";
interface ProductDetailContentProps {
  data: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  };
}
const ProductDetailContent = ({ data }: ProductDetailContentProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [toastVisible, setToastVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem(data, quantity, selectedSize);
      setToastMessage(`
        ${quantity} ${data.title}${
        quantity > 1 ? "(s)" : ""
      } added to cart with size ${selectedSize}
        `);
      setToastVisible(true);
    } else {
      setToastMessage("Please select a size.");
      setToastVisible(true);
    }
  };

  const handleCloseToast = () => setToastVisible(false);

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200 flex items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden rounded-lg shadow-lg flex items-center justify-center relative">
          <Image
            src={data.image}
            alt={data.title}
            width={600}
            height={400}
            className="rounded-t-lg"
          />
        </div>
        <div className="md:ml-8 md:w-1/2 md:mt-0 flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">
            {data.title}
          </h1>
          <p className="text-lg text-gray-700 mb-4 text-center md:text-left">
            {data.description}
          </p>
          <p className="text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
            Price: ${data.price.toFixed(2)}
          </p>
          <div className="mb-4">
            <label className="text-lg mb-2">Select Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Choose a size--</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="text-lg mb-2">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
              className="border border-gray-300 rounded-md px-2 py-1 w-16"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={handleCloseToast}
      />
    </div>
  );
};
export default ProductDetailContent;
