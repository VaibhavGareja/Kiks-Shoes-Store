/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ProductDetail from "./ProductDetail";
import { useState } from "react";
const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { _id, name, price, discount, imgSrc } = product;
  const numericPrice = parseFloat(price.replace("$", ""));
  const numericDiscount = parseFloat(discount);
  let discountedPrice = numericPrice - numericPrice * (numericDiscount / 100);
  discountedPrice = discountedPrice.toFixed(2);

  // const gradientStyle = {
  //   background: `linear-gradient(to right, ${bgGradient[0]}80, ${bgGradient[1]}80)`,
  // };

  // const handleClick = () => {
  //   dispatch(addToCart({ id: _id, name, price, imgSrc, quantity: 1 }));
  //   console.log("Product added to cart:", name);
  // };
  return (
    <div className="w-full sm:w-80 md:w-auto lg:w-auto shadow-md rounded-xl bg-pink-50 p-6 relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="relative z-10 flex justify-center mb-4">
        <img
          className="h-40 w-auto transform transition-transform hover:scale-110"
          src={product.imgSrc}
          alt={product.name}
        />
      </div>
      <div className="relative z-10 text-center mb-2">
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`fa fa-star ${
                i < Math.floor(product.ratings)
                  ? "text-orange-500"
                  : "text-gray-300"
              } px-1`}
              aria-hidden="true"
            ></i>
          ))}
        </div>
        <p className="text-lg font-bold text-gray-700">{product.name}</p>
      </div>
      <div className="relative z-10 text-center">
        <p className="text-2xl font-extrabold text-gray-800">
          {discountedPrice}
          <span className="font-thin text-sm line-through ml-2 text-gray-500">
            {price}
          </span>
          <span className="text-pink-600 text-sm ml-2">
            {product.discount}% off
          </span>
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            className="text-sm text-pink-600 border-2 border-pink-600 rounded-md px-4 py-2 hover:bg-pink-600 hover:text-white transition-colors"
            onClick={handleOpen}
          >
            Quick View
          </button>
          <FavoriteBorderOutlinedIcon
            fontSize="large"
            className="cursor-pointer text-pink-600 border-2 border-pink-600 rounded-full p-2 hover:bg-pink-600 hover:text-white transition-colors"
          />
        </div>
      </div>
      <ProductDetail open={open} handleClose={handleClose} product={product} />
    </div>
  );
};
{
  /* <div
        className="  h-32 w-32
        rounded-full z-[-1]
        relative
        top-24
        left-20"
        style={gradientStyle}
      ></div> */
}
{
  /* <span
            id="liveToastBtn"
            onClick={handleClick}
            className="material-symbols-outlined cursor-pointer text-xl text-blue-600 border-2 border-blue-600 rounded-md mr-2 p-2 hover:bg-blue-600 hover:text-white"
          >
            add_shopping_cart
          </span> */
}

export default ProductsCard;
