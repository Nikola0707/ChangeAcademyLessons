import Link from "next/link";

interface Category {
  name: string;
  path: string;
}

const categories: Category[] = [
  {
    name: "All",
    path: "/",
  },
  {
    name: "Electronics",
    path: "/category/electronics",
  },
  {
    name: "Jewelery",
    path: "/category/jewelery",
  },
  {
    name: "Men's clothing",
    path: "/category/men's clothing",
  },
  {
    name: "Women's clothing",
    path: "/category/women's clothing",
  },
];

const NavBar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <Link href={"/"} className="text-lg font-bold">
          FakeStore
        </Link>
        <ul className="flex space-x-4 text-xs md:text-base">
          {categories.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className="hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={"/cart"}
              className="hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
