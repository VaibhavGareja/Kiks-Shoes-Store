/* eslint-disable react/prop-types */
import { useDispatch  } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const CartProduct = ({ id, imgSrc, name, price, quantity }) => {
  const dispatch = useDispatch();
  const numericPrice = parseFloat(price.replace("$", ""));
  const handleRemove = () => {
    dispatch(removeFromCart(id)); 
  };
  return (
    <>
    
      <tbody >
        <tr>
          <td className="py-5 px-4 w-3/5 ">
            <div className="flex gap-5 items-center">
              <div className="items-center">
                <img className="p-2 h-full w-56 " src={imgSrc} alt="photo" />
              </div>
              <div className="">
                <h5 className="text-xl">{name}</h5>
                <h6>Price : ${numericPrice}</h6>
                <span className="text-red-500 font-semibold cursor-pointer" onClick={handleRemove}>Remove</span>
              </div>
            </div>
          </td>
          <td className="py-2 px-4 w-1/5 ">{quantity}</td>
          <td className="py-2 px-4 w-1/5">${(numericPrice * quantity).toFixed(2)}</td>
        </tr>
      </tbody>
    </>
  );
};

export default CartProduct;
