import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/cartSlice";

const BestSellerProductMen = () => {
  const dispatch = useDispatch();

  const { filteredProducts } = useSelector((state) => state.products);

  const p1 = filteredProducts.find(
    (product) => product.name === "Adidas Falcon Shoes for men - 2024 Edition"
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
    <div className="bestSeller mt-5 d-flex justify-content-between align-items-center">
      <div
        className="shoes-display inline-block  relative bg-gradient-to-l from-blue-600 to-sky-400"
        id="shoesDisplay"
      >
        <img id="sellerShoes" src={p1?.imgSrc} alt="men-shoes" />
      </div>
      <div className="best-p-detail mr-36  d-flex flex-column justify-content-center">
        <div className="rating">
          <i className="fa fa-star px-1 text-yellow-500"></i>
          <i className="fa fa-star px-1 text-yellow-500"></i>
          <i className="fa fa-star px-1 text-yellow-500"></i>
          <i className="fa fa-star px-1 text-yellow-500"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="text-lg py-3 w-72">
          <p id="bestSellerShoesText" className="top-p-name  fw-bolder">
            {p1?.name}
          </p>
          <p className="top-p-price pt-2 font-semibold">
            ${discountedPrice}{" "}
            <span className="font-thin text-sm line-through">{p1?.price} </span>{" "}
            <span className="text-cpink text-sm">{p1?.discount}% off</span>
          </p>
        </div>
        <button
          id="shopNow"
          onClick={handleClick}
          className=" bg-blue-600 border-blue-600 border-2  rounded p-2  hover:bg-white hover:!text-blue-800"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BestSellerProductMen;
