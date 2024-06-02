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
      <div className="mx-28 h-auto  flex">
        <div className="w-1/4 ">
          <ProductsSiderBar />
        </div>
        <div className="w-3/4 ">
          <ProductMainPage  />
        </div>
      </div>
    </>
  );
};

export default Men;
