"use client";
import { useState } from "react";
import useFetch from "./hooks/useFetch";
import ProductList from "./components/ProductList";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const { data, error, loading } = useFetch(
    "https://fakestoreapi.com/products",
    currentPage,
    productsPerPage
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <>
      <h1>HOME Page</h1>
      <ProductList products={data} />
    </>
  );
}
