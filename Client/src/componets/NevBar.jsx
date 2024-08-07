import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { logoutUser } from "../store/userSlice";
import logo from "/logo.png";
// import moon from "/moon.png";
import SignUp from "./Form/SignUp";

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user.userInfo);
  const cartProducts = useSelector((state) => state.cart.products);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    setShowAuthModal(false);
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
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <img className="h-16 w-auto" src={logo} alt="logo" />
          </Link>

          <div className="hidden lg:flex items-center space-x-4">
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

          <div className="hidden lg:flex items-center space-x-4">
            {/* <button className="text-gray-700 hover:text-pink-500 focus:outline-none">
              <img className="h-6 w-6" src={moon} alt="mode" />
            </button> */}
            <button
              onClick={() => setShowAuthModal(true)}
              className="text-gray-700 hover:text-pink-500 focus:outline-none"
            >
              <span className="material-symbols-outlined">person</span>
            </button>
            <button className="text-gray-700 hover:text-pink-500 focus:outline-none">
              <FavoriteBorderOutlinedIcon />
            </button>
            <Link
              to="cart"
              className="text-gray-700 hover:text-pink-500 focus:outline-none relative"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 px-2 py-1 text-xs font-bold text-white bg-pink-500 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setShowAuthModal(true)}
              className="p-2 text-gray-700 hover:text-pink-500 focus:outline-none"
            >
              <span className="material-symbols-outlined">person</span>
            </button>
            <button className="p-2 text-gray-700 hover:text-pink-500 focus:outline-none">
              <FavoriteBorderOutlinedIcon />
            </button>
            <Link
              to="cart"
              className="p-2 text-gray-700 hover:text-pink-500 focus:outline-none relative"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 px-2 py-1 text-xs font-bold text-white bg-pink-500 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-pink-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {showMobileMenu ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <div className="lg:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
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
        </div>
      )}

      {showAuthModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            {user ? (
              <>
                <p className="text-lg font-medium mb-4">
                  {user.firstName} {user.lastName}
                </p>
                <button
                  onClick={handleLogout}
                  className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <SignUp />
            )}
            <button
              onClick={() => setShowAuthModal(false)}
              className="mt-4 w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;