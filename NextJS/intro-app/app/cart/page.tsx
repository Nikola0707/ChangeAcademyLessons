"use client";
import { useCartStore } from "../store/useStore";

const CartPage = () => {
  const items = useCartStore((state) => state.items);
  console.log("items", items);
  return <h1>Cart Page items: {items.length}</h1>;
};
export default CartPage;
