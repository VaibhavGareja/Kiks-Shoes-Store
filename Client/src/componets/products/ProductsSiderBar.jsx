import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsFilter, clearFilters } from "../../store/productSlice";
import FilterListIcon from '@mui/icons-material/FilterList';

const ProductsSiderBar = () => {
  const [sortOrder, setSortOrder] = useState("");
  const brands = useSelector((state) => state.products.brands);
  const [brandCheckboxes, setBrandCheckboxes] = useState(() => {
    const initialCheckboxes = {};
    brands.forEach((brand) => {
      initialCheckboxes[brand] = false;
    });
    return initialCheckboxes;
  });
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const initialCheckboxes = brands.reduce((checkboxes, brand) => {
      checkboxes[brand] = false;
      return checkboxes;
    }, {});
    setBrandCheckboxes(initialCheckboxes);
  }, [brands]);

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOrder(value);
    dispatch(
      setProductsFilter({ sortOrder: value, brands: getSelectedBrands() })
    );
  };

  const handleBrandChange = (event) => {
    const { checked, value } = event.target;
    setBrandCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [value]: checked,
    }));
    const updatedBrands = getSelectedBrands();
    dispatch(setProductsFilter({ sortOrder, brands: updatedBrands }));
  };

  const getSelectedBrands = () => {
    return Object.keys(brandCheckboxes).filter(
      (brand) => brandCheckboxes[brand]
    );
  };

  useEffect(() => {
    const updatedBrands = getSelectedBrands();
    dispatch(setProductsFilter({ sortOrder, brands: updatedBrands }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandCheckboxes, sortOrder, dispatch]);

  const handleClearSort = () => {
    setSortOrder("");
    const resetCheckboxes = Object.keys(brandCheckboxes).reduce(
      (checkboxes, brand) => {
        checkboxes[brand] = false;
        return checkboxes;
      },
      {}
    );
    setBrandCheckboxes(resetCheckboxes);
    dispatch(clearFilters());
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="m-4">
      {/* Filter icon for mobile and tablet view */}
      <div className="lg:hidden flex justify-end mb-4">
        <button
          className="text-gray-700 focus:outline-none"
          onClick={toggleFilterVisibility}
        >
          <FilterListIcon fontSize="large" />
        </button>
      </div>

      {/* Filter options */}
      <div className={`${isFilterVisible ? 'block' : 'hidden'} lg:block`}>
        <h1 className="text-3xl font-bold mb-4">Filters:</h1>
        <hr className="my-3" />
        <h1 className="text-2xl">Price:</h1>
        <div className="m-2">
          <label className="ml-2">
            <input
              type="radio"
              className="mx-2"
              value="lowToHigh"
              checked={sortOrder === "lowToHigh"}
              onChange={handleSortChange}
            />
            Low to High
          </label>
          <br />
          <label className="ml-2">
            <input
              type="radio"
              className="mx-2"
              value="highToLow"
              checked={sortOrder === "highToLow"}
              onChange={handleSortChange}
            />
            High to Low
          </label>
        </div>
        <div>
          <h1 className="text-2xl">Brands:</h1>
          {brands.map((brand) => (
            <div key={brand} className="m-1">
              <label className="ml-2">
                <input
                  type="checkbox"
                  value={brand}
                  className="mx-2"
                  checked={brandCheckboxes[brand]}
                  onChange={handleBrandChange}
                />
                {brand}
              </label>
              <br />
            </div>
          ))}
        </div>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mt-4"
          onClick={handleClearSort}
        >
          Clear Sort
        </button>
      </div>
    </div>
  );
};

export default ProductsSiderBar;
