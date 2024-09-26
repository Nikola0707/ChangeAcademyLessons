"use client";
import { useState } from "react";
import useFetch from "./hooks/useFetch";
import ProductList from "./components/ProductList";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const { data, error, loading } = useFetch(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        All Products
      </h1>
      {data && <ProductList products={data} />}
    </div>
  );
}
