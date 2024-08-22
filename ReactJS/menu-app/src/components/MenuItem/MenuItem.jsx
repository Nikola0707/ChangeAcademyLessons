import "./MenuItem.css";
const MenuItem = ({ items }) => {
  //   console.log(items);
  return (
    <div className="section-center">
      {/* {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
      })} */}
      {items.map(({ id, title, img, desc, price }) => {
        // console.log(id, title, img, desc, price)
        return (
          // Render an article for each menu item
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuItem;
