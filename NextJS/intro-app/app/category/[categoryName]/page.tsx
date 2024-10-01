import ProductCard from "@/app/components/ProductCard";
import { Product } from "@/app/types/types";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    categoryName: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { categoryName } = params;
  const decodedCategoryName = decodeURIComponent(categoryName);
  console.log("categoryName", decodedCategoryName);

  //   Fetch products based on the category name from API
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${categoryName}`
  );
  //   Check if the fetch was successful
  if (!response.ok) {
    return (
      <div>
        <h1 className="text-3xl font-bold">Error fetching products...</h1>
      </div>
    );
  }
  const products: Product[] = await response.json();
  console.log("Fetch products:", products);

  /*
  Choose client-side data fetching when you need:
  *** Interactive user experiences
  *** Data that doesn't affec SEO
  *** More control over loading states and UI manipulations
  
  In general, choose server-side data fetching when you need:
  *** SEO Optimization
  *** Initial data load performance
  *** Dynamic or user-specific data
  */

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold mb-4">
        {decodedCategoryName.toUpperCase()} Products
      </h1>
      {products.length === 0 ? (
        <p>No produducts found in {categoryName} category!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default CategoryPage;
