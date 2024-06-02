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
    <div className="mx-28 h-auto  flex">
      <div className="w-1/4">
        <SaleSidebar />
      </div>
      <div className="w-3/4">
        <SaleMainpage
         />
      </div>
    </div>
  );
};

export default Sale;
