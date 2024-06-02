/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const {_id, name, price, discount, imgSrc, bgGradient } = product;
  const numericPrice = parseFloat(price.replace("$", ""));
  const numericDiscount = parseFloat(discount);
  let discountedPrice = numericPrice - numericPrice * (numericDiscount / 100);
  discountedPrice = discountedPrice.toFixed(2);
  
  const gradientStyle = {
    background: `linear-gradient(to right, ${bgGradient[0]}80, ${bgGradient[1]}80)`,
  };
  const handleClick = () => {
    dispatch(addToCart({id:_id, name, price, imgSrc, quantity: 1}));
    console.log("Product added to cart:", name);
  };
  return (
    <div className=" w-full sm:w-80  md:w-auto lg:w-auto shadow-sm rounded-xl">
      <div
        className="  h-32 w-32
        rounded-full z-[-1]
        relative
        top-24
        left-20"
        style={gradientStyle}
      ></div>
      
      <img
        className=" h-1/3 ml-4 max-w-full mb-12 align-middlee"
        src={imgSrc}
        alt={name}
      />
      <div className=" text-base mb-2 ml-4">
        <i className="fa fa-star text-orange-500 px-1" aria-hidden="true"></i>
        <i className="fa fa-star text-orange-500 px-1" aria-hidden="true"></i>
        <i className="fa fa-star text-orange-500 px-1" aria-hidden="true"></i>
        <i className="fa fa-star text-orange-500 px-1" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
      </div>
      <div className=" ml-4 w-64">
        <p className=" text-base lg:font-medium">{name}</p>

        <p className="  text-xl font-bold lg:flex md:block items-center justify-between">
          ${discountedPrice}
          <span className="font-thin text-sm line-through">{price} </span><span className="text-cpink text-sm">{discount}% off</span>
          <span
            id="liveToastBtn"
            onClick={handleClick}
            className="material-symbols-outlined  text-xl text-blue-600 border-2 border-blue-600 rounded-md mr-2 p-2 hover:bg-blue-600 hover:text-white"
          >
            add_shopping_cart
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductsCard;
