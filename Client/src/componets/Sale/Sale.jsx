import { useDispatch } from "react-redux";
import SaleMainpage from "./SaleMainpage";
import SaleSidebar from "./SaleSidebar";
import { useEffect } from "react";
import { fetchProducts, setCategories } from "../../store/productSlice";

const Sale = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      dispatch(setCategories({ category: "all" }));
    });
  }, [dispatch]);
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-12 lg:mx-28 h-auto flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
        <SaleSidebar />
      </div>
      <div className="w-full lg:w-3/4">
        <SaleMainpage
         />
      </div>
    </div>
  );
};

export default Sale;
