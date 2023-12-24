import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { useGetAllCartProdQuery } from "../../redux/features/cart/cart.api";
import CartItem from "./components/CartItem";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../redux/app/hooks";
import { setCartLength } from "../../redux/features/cart/cart.slice";
import { useEffect } from "react";
import CartSkeleton from "../../components/CartSkeleton";

const Carts = () => {
  const { data, isSuccess, isLoading } = useGetAllCartProdQuery(undefined);
  const dispatch = useAppDispatch();
  const totalAmount = data?.data?.reduce(
    (acc: number, cur: any) => acc + cur?.subTotal,
    0
  );

  useEffect(() => {
    if (isSuccess) dispatch(setCartLength(data?.data?.length));
  }, [isSuccess, dispatch, data?.data?.length]);

  return (
    <>
      <Header />
      <section className="container">
        <>
          {isLoading ? (
            <CartSkeleton />
          ) : data?.data?.length > 0 ? (
            <>
              <h3 className="text-xl text-gray-500 text-center my-5">
                Your Carts
              </h3>
              <table className="min-w-full text-lg text-left text-gray-500">
                <thead className="text-md text-gray-500 bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 flex items-center gap-2"
                    >
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Unit Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Sub Total
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((cart: any) => (
                    <CartItem cart={cart} key={cart.id} />
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-center my-5">
                <div>
                  <p className="text-xl font-semibold">
                    Total Amount(৳):{" "}
                    <span className="text-green-600 font-bold text-xl">
                      {totalAmount}
                    </span>{" "}
                  </p>
                  <button
                    onClick={() =>
                      toast.error("Place order functionality is not available")
                    }
                    className="text-white bg-green-500 hover:bg-green-600 font-bold w-full my-5 py-2"
                  >
                    Place Order
                  </button>
                  <Link to={"/products"}>
                    <button className="text-white bg-orange-500 hover:bg-orange-600 font-bold w-full my-5 py-2">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-[80vh] items-center justify-center">
              <div>
                <p className="text-xl text-center text-gray-500">
                  Your cart is empty
                </p>
                <Link to={"/products"}>
                  <button className="text-white bg-orange-500 hover:bg-orange-600 font-bold w-full my-5 py-2">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      </section>
    </>
  );
};

export default Carts;
