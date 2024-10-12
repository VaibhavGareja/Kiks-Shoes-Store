import axios from "axios";
import { clearCart } from "../../store/cartSlice";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";
const backendUrl = "https://kiks-shoes-store-backend.onrender.com";
// const backendUrl = "http://localhost:3000";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.userInfo);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = products.reduce((acc, product) => {
    return acc + parseFloat(product.price.replace("$", "")) * product.quantity;
  }, 0);

  const handlePayBtn = () => {
    const data = {
      user,
      products,
      totalPrice,
    };
    axios
      .post(`${backendUrl}/create-checkout-session`, { data })
      .then((res) => {
        console.log(res);
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container max-w-7xl mx-4 md:mx-12 lg:mx-32 my-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">Shopping Cart</h1>
          <button
            className=" !hover:text-black px-4 py-2 bg-gray-500 !text-white rounded-lg text-sm md:text-base"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        <div className="">
          <table className="table-auto w-full my-3">
            <thead className="bg-cpink">
              <tr className=" text-white">
                <th className="px-3 md:px-5 py-2 w-3/5 text-left bg-cpink border-cpink rounded-l-full">
                  Product
                </th>
                <th className="w-1/5 text-center">Quantity</th>
                <th className="pl-3 px-3 w-1/5 text-center bg-cpink border-cpink rounded-r-full">
                  SubTotal
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length !== 0 &&
                products.map((product) => (
                  <CartProduct
                    key={product.id}
                    id={product.id}
                    imgSrc={product.imgSrc}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                  />
                ))}
            </tbody>
          </table>
        </div>

        {products.length !== 0 && (
          <>
            <hr />
            <div className="flex justify-between items-center mt-4 mx-5">
              <h2 className="text-lg md:text-xl font-bold text-cpink">
                Total Price:
              </h2>
              <button
                className="bg-cpink text-white p-2 md:p-3 rounded-lg text-sm md:text-base"
                onClick={handlePayBtn}
              >
                Pay ${totalPrice.toFixed(2)}
              </button>
            </div>
          </>
        )}

        {products.length === 0 && (
          <div className="flex justify-center mt-8">
            <img
              className="h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96"
              src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713248897/Kiks-store/empty-cart_gauto6.png"
              alt="Empty Cart"
            />
          </div>
        )}

        <hr className="mt-6" />
      </div>
    </div>
  );
};

export default Cart;
