import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/cartSlice";

const BestSellerProductWomen = () => {
  const dispatch = useDispatch();

  const { filteredProducts } = useSelector((state) => state.products);
  const p1 = filteredProducts.find(
    (product) => product?.name === "Adidas Falcon Shoes for Women - 2024 Edition"
  );
  let discountedPrice;
  if (p1) {
    const numericPrice = parseFloat(p1?.price.replace("$", ""));
    const numericDiscount = parseFloat(p1?.discount);
    discountedPrice = numericPrice - numericPrice * (numericDiscount / 100);
    discountedPrice = discountedPrice.toFixed(2);
  }
  const handleClick = () => {
    dispatch(addToCart({ id: p1?._id, name, price:p1?.price, imgSrc:p1?.imgSrc, quantity: 1 }));
    console.log("Product added to cart:", p1?.name);
  };

  return (
    <div className="bestSeller mt-5 flex flex-col md:flex-row items-center justify-between">
      <div
        className="w-full md:w-[250px] lg:w-[400px] lg:h-[400px] md:h-[300px] max-sm:rounded-2xl lg:md:rounded-e-2xl relative bg-gradient-to-l from-rose-500 to-rose-300 mb-5 md:mb-0"
        id="shoesDisplay"
      >
        <img
          id="sellerShoes"
          className="mt-5  lg:ml-12 md:ml-5 w-[160%] md:max-w-[160%] h-full"
          src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713518194/Kiks-store/shoes/198192028-5775ca40-548c-4ea3-98fa-e1d8d80634c2_o4u0am_a_hflip_wijm3o.png"
          alt="women-shoes"
        />
      </div>
      <div className="best-p-detail md:mr-16 lg:mr-36 flex flex-col items-start md:items-start">
        <div className="rating flex justify-center md:justify-start mb-2">
          <i className="fa fa-star px-1 text-yellow-500"></i>
          <i className="fa fa-star px-1 text-yellow-500"></i>
          <i className="fa fa-star px-1 text-yellow-500"></i>
          <i className="fa fa-star px-1 text-yellow-500"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="text-xl py-3 w-72 text-start md:text-left">
          <p id="bestSellerShoesText" className="top-p-name font-bold">
            {p1?.name}
          </p>
          <p className="top-p-price pt-2 font-semibold">
            ${discountedPrice}{" "}
            <span className="font-thin text-sm line-through">{p1?.price} </span>{" "}
            <span className="text-cpink text-sm">{p1?.discount}% off</span>
          </p>
          
        </div>
        <button
          onClick={handleClick}
          className=" w-full bg-cpink border-cpink border-2 rounded p-2 text-white hover:!text-cpink hover:bg-white"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BestSellerProductWomen;
