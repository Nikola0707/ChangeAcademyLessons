import Link from "next/link";
import { Product } from "../types/types";

import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}
function ProductList({ products }: ProductListProps) {
  console.log("products", products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}
export default ProductList;
