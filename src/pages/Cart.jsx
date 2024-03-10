import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="w-screen  h-max absolute items-center">
  {
    cart.length > 0  ? 
    (<div className="w-11/12 h-200 flex place-content-between  justify-between">


      <div className="w-60%">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex mt-10 flex-col border-2 border-orange-300 bg-orange-100 justify-evenly w-40% max-h-96 mx-auto">

        <div className="flex flex-col m-6">
          <div>Your Cart</div>
          <div className="font-bold text-4xl text-blue">Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex-col m-6">
          <p className="font-bold">Total Amount: ${totalAmount}</p>
          <button className= " border-1 rounded border-lime-900 bg-lime-600 text-white">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex m-10 gap-5 w-full h-full  items-center justify-center bg-red-200 p-10 border-2 rounded-full">
      <h1 className="font-bold text-sm">Cart Empty</h1>
      <Link to={"/"}>
        <button className="font-bold text-xl bg-green-300 rounded-full">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
