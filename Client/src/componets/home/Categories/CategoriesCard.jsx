/* eslint-disable react/prop-types */
import React from "react";

const CategoryCard = ({ id, title, color, image, products }) => {
  return (
    <>
      <div
        id={id}
        className="h-[324px] grid-cols-2 justify-between bg-gray-100 rounded-3xl p-6 my-5 overflow-hidden"
      >
        <div className="flex">
          <div className="px-3">
            <h4
              className={`font-bold text-2xl md:text-3xl text-${color}-600 mb-2`}
            >
              {title.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                  {word}  
                  <br />
                </React.Fragment>
              ))}
            </h4>
            <p className="mb-2">{products} Products</p>
            <a className="font-bold text-blue-600 hover:underline" href="#">
              See Collections
            </a>
          </div>
          <div
            className={`w-24 h-12 md:w-32 md:h-16 mt-8 md:mt-16 bg-gradient-to-r from-indigo-500 via-purple-500 rounded-t-full rotate-[-145deg]`}
          ></div>
        </div>
        <div className="absolute transform translate-x-1/4 translate-y-1/4">
          <img src={image} alt={title} className="w-60 h-60 ml-5 md:w-60 md:h-60 " />
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
