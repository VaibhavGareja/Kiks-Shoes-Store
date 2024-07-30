import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import moon from "/moon.png";
import SignUp from "./Form/SignUp";
import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { logoutUser } from "../store/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user.userInfo);
  const cartProducts = useSelector((state) => state.cart.products);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    setShowDropdown(false);
  };

  const totalQuantity = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const navLinks = [
    { to: "men", label: "Men's" },
    { to: "women", label: "Women's" },
    { to: "about", label: "About us" },
    { to: "products", label: "Products" },
    { to: "sale", label: "Sale" },
  ];

  useEffect(() => {
    setShowMobileMenu(false);
  }, [location]);

  return (
    <nav className="bg-white h-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-20 w-auto" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md text-lg font-medium ${
                    location.pathname === `/${link.to}`
                      ? "bg-pink-500 text-white"
                      : "text-gray-700 hover:bg-pink-100 hover:text-pink-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex gap-2 items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-700 hover:text-pink-500 focus:outline-none">
                <img className="h-6 w-6" src={moon} alt="mode" />
              </button>
              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none"
                  >
                    <span className="sr-only">Open user menu</span>
                    <span className="material-symbols-outlined text-gray-700 hover:text-pink-500">
                      person
                    </span>
                  </button>
                </div>
                {showDropdown && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    {user ? (
                      <>
                        <p className="px-4 py-2 text-sm text-gray-700">
                          {user.firstName} {user.lastName}
                        </p>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <SignUp />
                    )}
                  </div>
                )}
              </div>
              <button className="ml-3 p-1 rounded-full text-gray-700 hover:text-pink-500 focus:outline-none">
                <FavoriteBorderOutlinedIcon />
              </button>
              <Link
                to="cart"
                className="ml-3 p-1 rounded-full text-gray-700 hover:text-pink-500 focus:outline-none relative"
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                {totalQuantity > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 text-xs font-bold leading-none text-white bg-pink-500 rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-pink-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${showMobileMenu ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${showMobileMenu ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${showMobileMenu ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === `/${link.to}`
                  ? "bg-pink-500 text-white"
                  : "text-gray-700 hover:bg-pink-100 hover:text-pink-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5">
            <button className="p-1 rounded-full text-gray-700 hover:text-pink-500 focus:outline-none">
              <img className="h-6 w-6" src={moon} alt="mode" />
            </button>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="ml-3 p-1 rounded-full text-gray-700 hover:text-pink-500 focus:outline-none"
            >
              <span className="material-symbols-outlined">person</span>
            </button>
            <button className="ml-3 p-1 rounded-full text-gray-700 hover:text-pink-500 focus:outline-none">
              <FavoriteBorderOutlinedIcon />
            </button>
            <Link
              to="cart"
              className="ml-3 p-1 rounded-full text-gray-700 hover:text-pink-500 focus:outline-none relative"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {totalQuantity > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 text-xs font-bold leading-none text-white bg-pink-500 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
          {showDropdown && (
            <div className="mt-3 px-2 space-y-1">
              {user ? (
                <>
                  <p className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">
                    {user.firstName} {user.lastName}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <SignUp />
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


<span className="material-symbols-outlined">person</span>