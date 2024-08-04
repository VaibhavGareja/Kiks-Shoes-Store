import { useSelector } from "react-redux";
import ProductsCard from "./ProductsCard";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const nevigate = useNavigate();
  const { status, filteredProducts } = useSelector((state) => state.products);

  const topFourDiscountedProducts = filteredProducts
    .filter((product) => parseFloat(product.discount) > 0)
    .sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount))
    .slice(0, 4);
  const handleViewAll = () => {
    nevigate("sale");
  };

  return (
    <div className="container max-w-7xl md:py-5 lg:py-5 mx-auto">
      <div className=" flex flex-col justify-center items-center max-sm:flex-row max-sm:justify-between md:flex-row md:justify-between md:mx-4 lg:flex-row lg:items-center lg:justify-between ">
        <h1 className="md:text-3xl max-sm:text-3xl font-bold lg:text-5xl">Featured Products</h1>
        <h4
          className=" text-cpink font-medium text-lg hover:text-pink-400 hover:cursor-pointer hover:font-medium"
          onClick={handleViewAll}
        >
          View all {">"}
        </h4>
      </div>
      <div className="flex justify-center">
        <div className=" mx-3 grid sm:grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-4 max-sm:mt-4 md:mt-8 lg:mt-20">
          {status === "loading" ? (
            <p>Loading...</p>
          ) : status === "failed" ? (
            <p>Error: Unable to fetch products.</p>
          ) : (
            topFourDiscountedProducts.map((product) => (
              <ProductsCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
