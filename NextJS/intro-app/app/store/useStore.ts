import { create } from "zustand";
import { Product } from "../types/types";

interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity: number, size: string) => void;
  removeItem: (index: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (product, quantity, size) => {
    set((state) => {
      // Check if the item already exist in the cart
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingItemIndex !== -1) {
        // if it exists, increase the quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += quantity;
        return {
          items: updatedItems,
        };
      } else {
        // if it doesn't exist, add a new item
        return {
          items: [...state.items, { product, quantity, size }],
        };
      }
    });
  },
  removeItem: (index) => {
    set((state) => {
      const items = [...state.items];
      items.splice(index, 1);
      return { items };
    });
  },
}));
