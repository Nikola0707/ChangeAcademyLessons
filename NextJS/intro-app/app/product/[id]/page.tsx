"use client";
import ProductDetailContent from "@/app/components/ProductDetailContent";
import useFetch from "@/app/hooks/useFetch";
import { useParams } from "next/navigation";
import { Circles } from "react-loader-spinner";

export default function ProductPage() {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) {
    return (
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Product not found!</p>
      </div>
    );
  }
  return (
    <div className="h-screen">
      <ProductDetailContent data={data} />
    </div>
  );
}
