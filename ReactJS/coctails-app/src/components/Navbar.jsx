import { useState } from "react";
import { Link } from "react-router-dom";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import useUserStore from "../store/useUserStore";
import { signOut } from "../helpers/auth";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useUserStore((state) => state.user);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between  items-center">
        <div className="space-x-6">
          <Link
            to="/home"
            className="text-blue-600 text-lg font-semibold hover:text-blue-800"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="text-blue-600 text-lg font-semibold hover:text-blue-800"
          >
            Favorites
          </Link>
          <Link
            to="/about"
            className="text-blue-600 text-lg font-semibold hover:text-blue-800"
          >
            About
          </Link>
          {/* Add more links as needed */}
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className="">
            {/* 
            if(user.email === undefined)
            return 'User'
            */}

            <span>{user?.email || "User"}</span>
            {isDropdownOpen ? (
              <HiChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <HiChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10 animate-fadeIn">
              <div className="py-3 px-5 text-sm text-gray-800">
                <p className="font-semibold mb-1">Account Details</p>
                <div className="space-y-1">
                  <p className="flex justify-between">
                    <span className="text-gray-500">Email:</span>
                    <span className="font-light">{user?.email}</span>
                  </p>

                  <p className="flex justify-between">
                    <span className="text-gray-500">ID:</span>
                    <span className="font-light">{user?.id}</span>
                  </p>

                  <p className="flex justify-between">
                    <span className="text-gray-500">Created At:</span>
                    <span className="font-light">
                      {new Date(user?.createdAt).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <button
                  onClick={signOut}
                  className="w-full py-2 px-5 text-red-600 hover:bg-red-100 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
