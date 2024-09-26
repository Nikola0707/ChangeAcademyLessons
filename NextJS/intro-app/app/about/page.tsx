"use client";
import { useParams } from "next/navigation";

export default function AboutPage() {
  const { id } = useParams();
  return <h1>About setCurrentPage: {id}</h1>;
}
