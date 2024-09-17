import { create } from "zustand";
import { persist } from "zustand/middleware";

// Create a Zustand store with persistence
const useFavoritesStore = create(
  persist(
    // Wrap the store definition with persist to enable data persistence
    (set) => ({
      // Define the state and actions of the store
      favorites: [], // Initialize the favorites state as an empty array

      // Action to add a favorite cocktail to the store
      addFavorite: (cocktail) =>
        set((state) => {
          // Use set function to update the state
          // Check if the current favorites is an array before using it
          const favorites = Array.isArray(state.favorites)
            ? state.favorites
            : []; // If it's not an array, default to an empty array
          return {
            // Return the new state with the updated favorites array
            favorites: [...favorites, cocktail], // Add the new cocktail to the existing favorites array
          };
        }),

      // Action to remove a favorite cocktail from the store by its ID
      removeFavorite: (id) =>
        set((state) => {
          // Use set function to update the state
          // Check if the current favorites is an array before using it
          const favorites = Array.isArray(state.favorites)
            ? state.favorites
            : []; // If it's not an array, default to an empty array
          return {
            // Return the new state with the updated favorites array
            favorites: favorites.filter((cocktail) => cocktail.idDrink !== id), // Filter out the cocktail with the matching idDrink
          };
        }),
    }),
    {
      name: "favorites-storage", // Key for localStorage to identify the data
      storage: localStorage, // Use localStorage as the storage method for persistence
    }
  )
);

export default useFavoritesStore; // Export the useFavoritesStore hook so it can be used in other components
