import { useState } from "react";
import { clearFilters, setDiscountRanges } from "../../store/productSlice";
import { useDispatch } from "react-redux";
import FilterListIcon from "@mui/icons-material/FilterList";

const SaleSidebar = () => {
  const dispatch = useDispatch();
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleCheckboxChange = (range) => {
    let updatedRanges;
    if (selectedRanges.includes(range)) {
      updatedRanges = selectedRanges.filter(
        (selectedRange) => selectedRange !== range
      );
    } else {
      updatedRanges = [...selectedRanges, range];
    }
    setSelectedRanges(updatedRanges);
    dispatch(setDiscountRanges(updatedRanges));
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleClearFilters = () => {
    setSelectedRanges([]);
    dispatch(clearFilters());
  };

  return (
    <div className="m-4">
      {/* Filter icon for mobile and tablet view */}
      <div className="flex justify-between items-center mb-4 lg:hidden">
        <h1 className="text-3xl font-bold">Filters:</h1>
        <FilterListIcon
          className="text-3xl cursor-pointer"
          onClick={toggleFilterVisibility}
        />
      </div>

      {/* Filter options */}
      <div className={`${isFilterVisible ? "block" : "hidden"} lg:block`}>
        <hr className="my-3" />
        <h1 className="text-2xl">Discount:</h1>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="range0-10"
            checked={selectedRanges.includes("0-10")}
            onChange={() => handleCheckboxChange("0-10")}
            className="mr-2"
          />
          <label htmlFor="range0-10">0-10</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="range11-20"
            checked={selectedRanges.includes("11-20")}
            onChange={() => handleCheckboxChange("11-20")}
            className="mr-2"
          />
          <label htmlFor="range11-20">11-20</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="range21-30"
            checked={selectedRanges.includes("21-30")}
            onChange={() => handleCheckboxChange("21-30")}
            className="mr-2"
          />
          <label htmlFor="range21-30">21-30</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="range31-40"
            checked={selectedRanges.includes("31-40")}
            onChange={() => handleCheckboxChange("31-40")}
            className="mr-2"
          />
          <label htmlFor="range31-40">31-40</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="range41-50"
            checked={selectedRanges.includes("41-50")}
            onChange={() => handleCheckboxChange("41-50")}
            className="mr-2"
          />
          <label htmlFor="range41-50">41-50</label>
        </div>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mt-4"
          onClick={handleClearFilters}
        >
          Clear Sort
        </button>
      </div>
    </div>
  );
};

export default SaleSidebar;
