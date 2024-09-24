"use client";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams();
  return <h1>Product Page for id: {id}</h1>;
}
