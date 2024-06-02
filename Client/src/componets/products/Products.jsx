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
    <div className="mx-28 h-auto  flex">
      <div className="w-1/4 ">
        <ProductsSiderBar />
      </div>
      <div className="w-3/4 ">
        <ProductMainPage  />
      </div>
    </div>
  );
};

export default Products;
