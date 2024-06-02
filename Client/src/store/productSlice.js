import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProductData } from "./api";

const initialState = {
  products: [],
  brands: [],
  filteredProducts: [],
  status: "idle",
  error: null,
  category: "all",
  discountRanges: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  // fetchAllProductData
  async () => {
    try {
      const response = await fetchAllProductData();
      return response;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      const { category } = action.payload;
      state.category = category;
      console.log("Selected category:", category);

      state.filteredProducts =
        category !== "all"
          ? state.products.filter((product) =>
              product.category.includes(category)
            )
          : [...state.products];
      console.log("Filtered products:", state.filteredProducts);

    },
    setDiscountRanges: (state, action) => {
      state.discountRanges = action.payload;
      if (state.discountRanges.length === 0) {
        state.filteredProducts = state.products;
        return;
      }
      state.filteredProducts = state.products.filter((product) => {
        const discount = parseFloat(product.discount);
        for (const range of state.discountRanges) {
          const [min, max] = range.split("-");
          if (discount >= parseInt(min) && discount <= parseInt(max)) {
            return true;
          }
        }
        return false;
      });
    },

    setProductsFilter: (state, action) => {
      const { sortOrder, brands } = action.payload;
      console.log("Received payload:", action.payload);
      let filteredProducts = [...state.filteredProducts];
      // console.log(filteredProducts, "filefsrdgrefdesewefgrttgffegrh")
      if (brands && brands.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          brands.includes(product.brand)
        );
      }

      if (sortOrder) {
        filteredProducts.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
          const discountA = parseFloat(a.discount);
          const discountB = parseFloat(b.discount);
          const discountedPriceA = priceA * (1 - discountA / 100);
          const discountedPriceB = priceB * (1 - discountB / 100);

          if (sortOrder === "lowToHigh") {
            return discountedPriceA - discountedPriceB;
          } else {
            return discountedPriceB - discountedPriceA;
          }
        });
      }

      state.filteredProducts = filteredProducts;
    },
    clearFilters: (state) => {
      state.filteredProducts = state.products;
      state.discountRanges = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { payload } = action;

        if (!payload) {
          console.error("Payload is undefined");
          return;
        }

        // console.log("Fetched products payload:", payload);
        state.status = "succeeded";
        state.products = payload;
        console.log("Fetched products:", payload);
        // state.filteredProducts = payload;
        state.brands = [
          ...new Set(action.payload.map((product) => product.brand)),
        ];
        state.category = "all";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const {
  setProductsFilter,
  clearFilters,
  setDiscountRanges,
  setCategories,
} = productSlice.actions;
export default productSlice.reducer;
