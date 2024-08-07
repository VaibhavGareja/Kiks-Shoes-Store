import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, setCategories } from "../../store/productSlice";
import Carousel from "../Men/Carousel ";
import ProductsSiderBar from "../products/ProductsSiderBar";
import ProductMainPage from "../products/ProductMainPage";

const Women = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      dispatch(setCategories({ category: "Women" }));
    });
  }, [dispatch]);

  return (
    <>
      <Carousel />
      <div className="mx-4 max-w-7xl md:mx-8 lg:mx-28 h-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <ProductsSiderBar />
        </div>
        <div className="w-full lg:w-3/4">
          <ProductMainPage />
        </div>
      </div>
    </>
  );
};

export default Women;
