import BestSellerProductWomen from "./BestSellerProductWomen";
import BestSellerProductMen from "./BestSellerProductMen";
import {  useState } from "react";

const BestSeller = () => {
  const [isToggle, setIsToggle] = useState(true);


  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="mb-5 mt-5">
      <div className="flex flex-col items-center justify-between md:flex-row px-28 sm:px-6 md:px-8 lg:px-28">
        <h1 className="text-3xl font-medium sm:text-3xl md:text-5xl mb-3 md:mb-0"> Best seller this week</h1>
        <div className="flex items-center mt-3 md:mt-0">
          <label className="inline-flex items-center cursor-pointer">
            <span className="me-3 text-base font-semibold text-gray-900 dark:text-gray-300">
              Men
            </span>
            <input
              type="checkbox"
              value={isToggle}
              onClick={handleToggle}
              className="sr-only peer"
            />
            <div className="relative w-16 h-10 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[-4px] after:ml-1  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-base font-semibold text-gray-900 dark:text-gray-300">
              Women
            </span>
          </label>
        </div>
      </div>
      <div>
        {isToggle ? <BestSellerProductMen /> : <BestSellerProductWomen />}
      </div>
    </div>
  );
};

export default BestSeller;
