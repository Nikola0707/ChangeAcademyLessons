import "./Categories.css";

const Categories = ({ categories, filterItems }) => {
  console.log("categories", categories);
  return (
    <div className="btn-container">
      {categories.map((categoryName) => (
        <button
          key={categoryName}
          type="button"
          className="filter-btn"
          onClick={() => filterItems(categoryName)}
        >
          {categoryName}
        </button>
      ))}
    </div>
  );
};
export default Categories;
