import { useEffect } from "react";
import ProductMainPage from "./ProductMainPage";
import ProductsSiderBar from "./ProductsSiderBar";
import { fetchProducts, setCategories } from "../../store/productSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      dispatch(setCategories({ category: "all" }));
    });
  }, [dispatch]);
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-12 lg:mx-28 h-auto flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 mb-6 lg:mb-0 ">
        <ProductsSiderBar />
      </div>
      <div className="w-full lg:w-3/4 ">
        <ProductMainPage  />
      </div>
    </div>
  );
};

export default Products;
