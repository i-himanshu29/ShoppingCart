
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className=" w-60% m-5 relative h-max ">

      <div className="flex  w-60% max-h-fit border-2 rounded border-black items-center justify-center  max-w-3xl">

        <div className=" p-1 w-72 ">
          <img src={item.image} className="h-full w-full"/>
        </div>
        <div className="flex-col m-2 w-80 items-center justify-center mt-5">
          <h1 className="font-bold">{item.title}</h1>
          <h1 className="text-wrap text-sm">{item.description}</h1>
          <div className="flex justify-evenly mt-3">
            <p className="text-lime-600  font-bold">${item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
