import { useDispatch } from "react-redux";
import BestSeller from "./Best seller/BestSeller";
import Categories from "./Categories/Categories";
import FeaturedProducts from "./Featured Products/FeaturedProducts";
import Hero from "./Hero";
import { useEffect } from "react";
import { fetchProducts, setCategories } from "../../store/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      dispatch(setCategories({ category: "all" }));
    });
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <BestSeller />
      <hr />
      <Categories />
      <hr />
    </div>
  );
};

export default Home;
