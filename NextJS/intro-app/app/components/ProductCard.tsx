import Image from "next/image";
import { Product } from "../types/types";
import StarRatings from "react-star-ratings";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          style={{
            objectFit: "cover",
          }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-xl text-gray-800 font-medium">
          Price: ${product.price}
        </p>
        <div className="flex items-end mt-2">
          <StarRatings
            rating={product.rating.rate}
            starRatedColor="yellow"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="2px"
            starEmptyColor="gray"
          />

          <span className="text-gray-500 ml-2 text-sm">
            {product.rating.rate} of {product.rating.count} ratings
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
