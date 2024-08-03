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
    <div className="container max-w-7xl f-product py-5 mx-auto px-28  lg:px-28">
      <div className=" flex flex-col justify-center items-center space-y-5 lg:flex-row lg:items-center lg:justify-between ">
        <h1 className="text-3xl font-bold lg:text-5xl ">Featured Products</h1>
        <h4
          className=" text-cpink font-medium text-lg hover:text-pink-400 hover:cursor-pointer hover:font-medium"
          onClick={handleViewAll}
        >
          View all {">"}
        </h4>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
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
  );
};

export default FeaturedProducts;
