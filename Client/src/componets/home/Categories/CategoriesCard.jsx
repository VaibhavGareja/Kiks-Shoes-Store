/* eslint-disable react/prop-types */
import React from "react";

const CategoryCard = ({ id, title, color, image, products }) => {
  return (
    <>
      <div
        id={id}
        className="max-sm:h-[200px] max-sm:w-[200px] lg:h-[324px] lg:w-[330px] md:h-[220px] md:w-[230px] grid-cols-2 justify-between bg-gray-100 rounded-3xl p-6 max-sm:mb-12 lg:my-5 md:my-5 overflow-hidden"
      >
        <div className="flex">
          <div className="lg:px-3">
            <h4
              className={`font-bold max-sm:text-xl lg:text-3xl md:text-2xl text-${color}-600 mb-2`}
            >
              {title.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                  {word}  
                  <br />
                </React.Fragment>
              ))}
            </h4>
            <p className="mb-2">{products} Products</p>
            <a className="font-bold text-sm max-sm:text-xs text-blue-600 hover:underline" href="#">
              See Collections
            </a>
          </div>
          <div
            className={`lg:w-24 lg:h-12 md:w-20 md:h-10 max-sm:w-16 max-sm:h-8 mt-8 md:mt-16 bg-gradient-to-r from-indigo-500 via-purple-500 rounded-t-full rotate-[-145deg]`}
          ></div>
        </div>
        <div className="absolute transform translate-x-1/4 translate-y-1/4">
          <img src={image} alt={title} className="max-sm:w-28 sm:h-28 lg:w-60 lg:h-60 ml-5 md:w-40 md:h-40 " />
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
