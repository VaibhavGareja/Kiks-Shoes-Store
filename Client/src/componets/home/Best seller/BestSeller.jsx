import BestSellerProductWomen from "./BestSellerProductWomen";
import BestSellerProductMen from "./BestSellerProductMen";
import { useState } from "react";

const BestSeller = () => {
  const [isToggle, setIsToggle] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="mb-5 mt-5">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center sm:text-left">
            Best seller this week
          </h1>
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <span className="mr-3 text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-300">
                Women
              </span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={!isToggle}
                  onChange={handleToggle}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-cpink peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </div>
              <span className="ml-3 text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-300">
                Man
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