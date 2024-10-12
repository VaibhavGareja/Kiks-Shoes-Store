/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const CartProduct = ({ id, imgSrc, name, price, quantity }) => {
  const dispatch = useDispatch();
  const numericPrice = parseFloat(price.replace("$", ""));
  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    
      <tr className="border-b  w-full border-gray-200">
        <td className="py-4 px-2 md:px-4  w-3/5">
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-center">
            <div className="flex justify-center">  
              <img
                className="p-2 object-cover"
                src={imgSrc}
                alt="photo"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h5 className="text-lg md:text-xl font-semibold">{name}</h5>
              <h6 className="text-base md:text-lg">Price: ${numericPrice}</h6>
              <span
                className="text-red-500 font-semibold cursor-pointer hover:underline"
                onClick={handleRemove}
              >
                Remove
              </span>
            </div>
          </div>
        </td>
        <td className="py-4 px-2 md:px-4 text-center w-1/5">{quantity}</td>
        <td className="py-4 px-2 md:px-4 text-center w-1/5">
          ${(numericPrice * quantity).toFixed(2)}
        </td>
      </tr>

  );
};

export default CartProduct;
