import axios from "axios";
import { clearCart } from "../../store/cartSlice";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";
const backendUrl = "https://kiks-shoes-store-backend.onrender.com"
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
      totalPrice
    }
    axios
      .post(`${backendUrl}/create-checkout-session`, {data})
      .then((res) => {
        console.log(res);
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-32 ">
      <div className="flex justify-between ">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
        <button className="hero-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      <table className=" table-auto my-3 w-full ">
        <thead>
          <tr className=" bg-cpink  text-white">
            <th className="th1 px-5 py-2 w-3/5">Product</th>
            <th className="  w-1/5">Quantity</th>
            <th className="th3 pl-3 w-1/5">SubTotal</th>
          </tr>
        </thead>
        {products.length != 0 &&
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
      </table>
      {products.length != 0 && (
        <>
          <hr />
          <div className="flex justify-between mt-4 mr-32">
            <h2 className="text-xl ml-14 font-bold text-cpink">Total Price:</h2>
            <button
              className="text-xl float-end hero-btn"
              onClick={handlePayBtn}
            >
              {" "}
              Pay ${totalPrice.toFixed(2)}
            </button>
          </div>
        </>
      )}

      <div>
        {products.length == 0 && (
          <img
            className="h-96 w-96 m-auto"
            src="https://res.cloudinary.com/dcefdve9n/image/upload/v1713248897/Kiks-store/empty-cart_gauto6.png"
            alt="Emapty Cart"
          />
        )}
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default Cart;
