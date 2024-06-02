import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import ProductsCard from "../home/Featured Products/ProductsCard";
import { Pagination } from "@mui/material";
import useSearch from "../../hooks/useSearch";

const SaleMainpage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  
  const products = useSelector((state) => state.products.filteredProducts);
  const { filteredData, setSearch } = useSearch(products);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const paginatedProducts = filteredData.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const handleProductsPerPageChange = (event) => {
    const newProductsPerPage = parseInt(event.target.value);
    setProductsPerPage(newProductsPerPage);
  };
  return (
    <div className="m-4">
      <div>
        <input
          type="text"
          name="search"
          placeholder="Serach... "
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-500  rounded ml-3 p-1 pl-2"
        />
      </div>
      <hr className="mt-3 " />
      <div className="grid grid-cols-3">
        {paginatedProducts.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-5  h-20">
        {filteredData.length > productsPerPage && (
          <Pagination
            count={Math.ceil(filteredData.length / productsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            size="large"
          />
        )}
        <select
          value={productsPerPage}
          className=" text-base selection "
          onChange={handleProductsPerPageChange}
        >
          <option value="6" className="bg-cpink text-white">
            6 /page
          </option>
          <option value="10" className="bg-cpink text-white">
            10 /page
          </option>
        </select>
      </div>
    </div>
  );
};

export default SaleMainpage;

