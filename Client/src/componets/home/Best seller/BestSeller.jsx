import BestSellerProductWomen from "./BestSellerProductWomen";
import BestSellerProductMen from "./BestSellerProductMen";
import { useState } from "react";

const BestSeller = () => {
  const [isToggle, setIsToggle] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="container max-w-7xl mb-5 md:mt-3 lg:mt-5">
      <div>
        <div className="flex flex-col sm:flex-row items-center justify-between lg:mr-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center sm:text-left">
            Best seller this week
          </h1>
          <div className="flex items-center mt-4 sm:mt-0">
            <label className="inline-flex items-center cursor-pointer">
              <span className="mr-3 text-sm sm:text-base font-semibold text-black-900 dark:text-black-300">
                Women
              </span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={!isToggle}
                  onChange={handleToggle}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:!bg-cpink peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </div>
              <span className="ml-3 text-sm sm:text-base font-semibold text-black-900 dark:text-black-300">
                Men
              </span>
            </label>
          </div>
        </div>
        <div className="mt-6">
          {isToggle ? <BestSellerProductWomen /> : <BestSellerProductMen />}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
