import Link from "next/link";
import { Product } from "../types/types";
import Image from "next/image";

interface ProductListProps {
  products: Product[];
}
function ProductList({ products }: ProductListProps) {
  console.log("products", products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map(
        ({ id, title, image, category, description, price, rating }) => (
          <Link key={id} href={`/product/${id}`}>
            <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image src={image} width={300} height={500} alt={title} />
            </div>
          </Link>
        )
      )}
    </div>
  );
}
export default ProductList;
