// import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import moon from "/moon.png";
import SignUp from "./Form/SignUp";
import { useSelector, useDispatch } from "react-redux";
// import { openCloseButton } from "../store/closeBtnSlice";
import { logoutUser } from "../store/userSlice";
import { useState } from "react";

const NevBar = () => {
  const dispatch = useDispatch();
  const { isClosed } = useSelector((state) => state.closeBtn);
  const user = useSelector((state) => state.user.userInfo);
  const cartProducts = useSelector((state) => state.cart.products);
  const [showDropdown, setShowDropdown] = useState(false);


  // const toggleSignUp = () => {
  //   dispatch(openCloseButton());
  // };

  const handleLogout = () => {
    dispatch(logoutUser());
    setShowDropdown(false);
  };

  const totalQuantity = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return (
    <nav className="flex justify-between items-center px-28 py-2">
      <div className="logo">
        <Link href="index.html">
          <img className="h-28" src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="nav-links flex text-lg">
        <Link className="px-6 hover:text-pink-500" to="men">
          <li>{`Men's`}</li>
        </Link>
        <Link className="px-6 hover:text-pink-500" to="women">
          <li>{`Women's`}</li>
        </Link>
        <Link className="px-6 hover:text-pink-500" to="about">
          <li>About us</li>
        </Link>
        <Link className="px-6 hover:text-pink-500" to="products">
          <li>Products</li>
        </Link>
        <Link className="px-6 hover:text-pink-500" to="sale">
          <li>Sale</li>
        </Link>
      </ul>
      <ul className="nav-icons flex gap-5">
        <Link className="list " to="#">
          <li>
            <img id="mode" className="h-10" src={moon} alt="mode" />
          </li>
        </Link>
        {/* <Link className="list" to="#">
          <li>
            <span className="material-symbols-outlined hover:text-p h-10 mt-2">
              search
            </span>
          </li>
        </Link> */}
        <Link className="list relative" to="" onClick={() => setShowDropdown(!showDropdown)}>
          <li>
            <span className="material-symbols-outlined hover:text-pink-500 h-10 mt-2">
              person
            </span>
            {showDropdown && (
            <div className="absolute top-full right-0 mt-2 w-68 bg-white rounded-lg shadow-xl">
              {user ? (
                <div className="py-1">
                <p className="px-4 py-2 text-center text-gray-800">{user.firstName} {user.lastName}</p>
                <button onClick={handleLogout} className=" hero-btn mx-4 w-48 block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100  text-center">
                  Logout
                </button>
              </div>
              ) : (
                <div>
                  <SignUp />
                </div>
              )}
            </div>
          )}
          </li>
        </Link>
        <Link className="list" target="_self" to="cart">
          <li>
            <span className="material-symbols-outlined hover:text-pink-500 h-10 mt-2">
              shopping_bag
              {totalQuantity > 0 && (
                <span className="badge text-xs rounded-pill badge-notification bg-cpink">
                  {totalQuantity}
                </span>
              )}
            </span>
          </li>
        </Link>
      </ul>
      {!isClosed && <SignUp />}
    </nav>
  );
};

export default NevBar;
