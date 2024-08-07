import { useDispatch } from "react-redux";
import ProductMainPage from "../products/ProductMainPage";
import ProductsSiderBar from "../products/ProductsSiderBar";
import Carousel from "./Carousel ";
import { useEffect } from "react";
import { fetchProducts, setCategories } from "../../store/productSlice";

const Men = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      dispatch(setCategories({ category: "Men" }));
    });
  }, [dispatch]);

  return (
    <>
      <Carousel />
      <div className="mx-auto px-4 md:px-12 lg:mx-28 h-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <ProductsSiderBar />
        </div>
        <div className="w-full lg:w-3/4">
          <ProductMainPage />
        </div>
      </div>
    </>
  );
};

export default Men;
