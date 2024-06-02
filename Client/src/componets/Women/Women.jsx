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


export default Women
