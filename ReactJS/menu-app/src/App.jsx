import { useState } from "react";
import items from "../src/assets/data";
import MenuItem from "./components/MenuItem/MenuItem";
import Categories from "./components/Categories/Categories";

// Define all possible categories including "all", to show all items
const allCategoriesArray = items.map(({ category }) => category);
console.log("allCategoriesArray", allCategoriesArray);

const allCategories = ["all", ...new Set(allCategoriesArray)];
console.log("allCategories", allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // console.log("menuItems", menuItems);

  const [categories, setCategories] = useState(allCategories);

  // Function to filter items based on the selected category
  const filterItems = (category) => {
    let filteredItems;
    if (category === "all") {
      filteredItems = items;
      setMenuItems(items);
    } else {
      filteredItems = items.filter((item) => item.category === category);
      setMenuItems(filteredItems);
    }
    console.log("filteredItems", filteredItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline" />
        </div>

        {/* Categories */}
        <Categories categories={categories} filterItems={filterItems} />
        {/* SortOptions */}
        <MenuItem items={menuItems} />
      </section>
    </main>
  );
}

export default App;
