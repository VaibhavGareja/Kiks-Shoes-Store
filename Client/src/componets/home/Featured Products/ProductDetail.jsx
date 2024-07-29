/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CloseIcon from "@mui/icons-material/Close";

const ProductDetail = ({ open, handleClose, product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(product.sizesAvailable[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        imgSrc: product.imgSrc,
        quantity: quantity,
        size: selectedSize,
      })
    );
  };

  const discountedPrice = (
    parseFloat(product.price.replace("$", "")) *
    (1 - product.discount / 100)
  ).toFixed(2);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl bg-white rounded-lg shadow-xl p-6 max-h-[90vh] overflow-y-auto your-custom-font-class">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-cpink"
        >
          <CloseIcon />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" mt-16 justify-center items-center">
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full mb-3 h-auto rounded-lg "
            />
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full h-auto rounded-lg scale-x-[-1]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.name}
            </h2>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.ratings)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">
                ({product.ratings} rating)
              </span>
            </div>
            <p className="text-2xl font-bold text-cpink mb-2">
              ${discountedPrice}{" "}
              <span className="text-sm font-normal text-gray-500 line-through ml-2">
                {product.price}
              </span>
            </p>
            <p className="text-green-600 font-semibold mb-4">
              {product.discount}% OFF
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Select Size:</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizesAvailable.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 rounded-full border-2 ${
                      selectedSize === size
                        ? "border-cpink bg-pink-100"
                        : "border-gray-300"
                    } flex items-center justify-center text-lg font-semibold transition duration-300 ease-in-out hover:border-cpink`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <h3 className="font-semibold text-gray-800 mr-4">Quantity:</h3>
              <div className="flex items-center border rounded-full overflow-hidden">
                <button
                  className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-pink-100 transition duration-300"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-4 py-1 bg-white text-gray-800 font-semibold">
                  {quantity}
                </span>
                <button
                  className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-pink-100 transition duration-300"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex space-x-4 mb-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-cpink text-white py-2 px-4 rounded-full hover:bg-pink-700 transition duration-300"
              >
                Add to Cart
              </button>
              <button className="flex items-center justify-center bg-pink-100 text-cpink py-2 px-4 rounded-full hover:bg-pink-200 transition duration-300">
                <FavoriteBorderOutlinedIcon className="mr-2" /> Wishlist
              </button>
            </div>
            <div className="border-t pt-4">
              <p className="mb-1">
                <span className="font-semibold">SKU:</span> {product.SKU}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Material:</span>{" "}
                {product.material}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Care:</span>{" "}
                {product.careInstructions}
              </p>
              <p>
                <span className="font-semibold">Manufacturer:</span>{" "}
                {product.manufacturer}
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Customer Reviews
          </h3>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="mb-4 p-4 bg-pink-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="font-semibold mr-2">
                    {review.reviewerName}
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No reviews yet.</p>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default ProductDetail;
