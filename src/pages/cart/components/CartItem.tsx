import { Link } from "react-router-dom";
import deleteSvg from "../../../assets/svg/delete.svg";
import { useDeleteCartProdMutation } from "../../../redux/features/cart/cart.api";
import useToastAndApiHandler from "../../../hooks/useToastAndApiHandler";
import Modal from "../../../components/Modal";
import { useState } from "react";
import CartSize from "./CartSize";

const CartItem = ({ cart }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteCartProd, { data, isSuccess, isError, isLoading, error }] =
    useDeleteCartProdMutation();

  const handleDelete = () => {
    deleteCartProd(cart?.id);
  };

  const successMessage = "cart product deleted successfully";

  useToastAndApiHandler(
    { data, isSuccess, isError, isLoading, error },
    successMessage
  );

  return (
    <>
      <tr className="bg-white border-b">
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2">
          <div className="flex items-center gap-3">
            <img
              src="https://fabrilife.com/products/61961a4db1cd1-square.jpg?v=20"
              alt="t-shirt"
              className="w-20 h-20 rounded-md"
            />
            <Link to={`/products/${cart?.products?.id}`}>
              <p className="font-semibold text-blue-400 hover:underline">
                {cart?.products?.title}
              </p>
            </Link>
          </div>
        </td>

        <td className="px-6 py-4 text-secondary-400">
          <p className="font-semibold">৳ {cart?.products?.price}</p>
        </td>
        {/* <td className="px-6 py-4 text-secondary-400 font-semibold">
          <span className="p-2 rounded-full bg-success-50">{cart?.size}</span>
        </td> */}
        <CartSize cart={cart} />
        <td className="px-6 py-4 text-secondary-400 font-semibold">
          <span className="p-2 rounded-full bg-success-50">{cart?.color}</span>
        </td>
        <td className="px-6 py-4 text-secondary-400 font-semibold">
          <span className="p-2 rounded-full bg-success-50 ">
            {cart?.quantity}
          </span>
        </td>
        <td className="px-6 py-4 text-secondary-400 font-semibold">
          <span className="p-2 rounded-full bg-success-50 ">
            ৳ {cart?.subTotal}
          </span>
        </td>
        <td className="px-6 py-4 text-secondary-400 font-semibold">
          <div className="p-2 rounded-full bg-success-50 flex flex-col">
            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer bg-green-500 bg-green-500 text-white w-[80%] mb-2"
            >
              Add another size
            </button>
            <span
              onClick={() => handleDelete()}
              className="cursor-pointer text-white w-10 h-10 bg-red-500 hover:bg-red-700 p-2"
            >
              {isLoading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                <img src={deleteSvg} alt="" className="w-full h-full" />
              )}
            </span>
          </div>
        </td>
      </tr>
      <Modal
        product={cart?.products}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default CartItem;
