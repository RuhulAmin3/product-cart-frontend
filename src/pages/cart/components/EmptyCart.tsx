import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div>
        <p className="text-xl text-center text-gray-500">Your cart is empty</p>
        <Link to={"/products"}>
          <button className="text-white bg-orange-500 hover:bg-orange-600 font-bold w-full my-5 py-2">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
