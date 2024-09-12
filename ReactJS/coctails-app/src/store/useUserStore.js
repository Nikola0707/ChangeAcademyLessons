// https://zustand.docs.pmnd.rs/getting-started/introduction

// import { create } from "zustand";
// const useUserStore = create((set) => ({
//   user: null,
//   setUser: (userData) => set({ user: userData }),
//   clearUser: () => set({ user: null }),
// }));

// export default useUserStore;

// Update Zustand Store to use persistence (do not lose the state after refresh)
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// define the zustand store with persistence

const useUserStore = create(
  persist(
    (set) => ({
      user: null, // Initial state of the user is null
      setUser: (userData) => set({ user: userData }), // Function to set user data
      clearUser: () => set({ user: null }), // Function to clear user data
    }),
    {
      name: "user-storage", // Name of the key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useUserStore;
