import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/kiksStore.js";
import App from "./App.jsx";
import "./index.css";
import SignUp from "./componets/Form/SignUp.jsx";
import Login from "./componets/Form/Login.jsx";
import Cart from "./componets/cart/Cart.jsx";
import Home from "./componets/home/Home.jsx";
import Products from "./componets/products/Products.jsx";
import Men from "./componets/Men/Men.jsx";
import Women from "./componets/Women/Women.jsx";
import AboutUs from "./componets/aboutus/AboutUs.jsx";
import Sale from "./componets/Sale/Sale.jsx";
import CheckOutSuccess from "./componets/payment/CheckOutSuccess.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/sale",
        element: <Sale />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout-sucess",
        element: <CheckOutSuccess />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
