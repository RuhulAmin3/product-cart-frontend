import { useEffect, useState } from "react";
import { useAddToCartMutation } from "../redux/features/cart/cart.api";
import { getUserInfo } from "../utils";
import useToastAndApiHandler from "../hooks/useToastAndApiHandler";

const Modal = ({
  showModal,
  setShowModal,
  product,
}: {
  product: any;
  showModal: boolean;
  setShowModal: (isModal: boolean) => void;
}) => {
  const [AddToCart, { data, isSuccess, isError, isLoading, error }] =
    useAddToCartMutation();
  const { userId } = getUserInfo() || {};
  const [sizeIndex, setSizeIndex] = useState<string | null>(null);
  const [colorIndex, setColorIndex] = useState<string | null>(null);
  const [sizeError, setSizeError] = useState("");
  const [colorError, setColorError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(product?.price);

  const handleSize = (s: string) => {
    setSizeIndex(s);
    setSizeError("");
  };

  const handleColor = (s: string) => {
    setColorIndex(s);
    setColorError("");
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    setSubTotal((prev: number) => prev + product?.price);
  };

  const handleDecrease = () => {
    setQuantity((prev) => prev - 1);
    setSubTotal((prev: number) => prev - product?.price);
  };

  const handleAddToCart = () => {
    if (sizeIndex === null) {
      setSizeError("Choose size");
    }
    if (colorIndex === null) {
      setColorError("Choose color");
    }

    if (sizeIndex && colorIndex) {
      AddToCart({
        quantity: quantity,
        color: colorIndex,
        size: sizeIndex,
        subTotal,
        productId: product.id,
        userId,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setShowModal(false);
    }
  }, [isSuccess]);

  const successMessage = "product added to your cart successfully";
  useToastAndApiHandler(
    {
      data,
      isSuccess,
      isError,
      isLoading,
      error,
    },
    successMessage
  );

  return (
    <>
      {showModal ? (
        <div className="fixed z-50 inset-0 overflow-hidden flex items-center justify-center m-4">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity"
            onClick={() => setShowModal(false)}
          ></div>

          <div className="bg-white rounded-lg overflow-hidden transform">
            <div className="bg-white p-4 w-full max-w-[750px]">
              <h3 className="text-3xl text-black font-semibold my-4 text-center border-b-2 border-gray-200 pb-3">
                Product Details
              </h3>
              {/* product details */}
              <div className="flex flex-col md:flex-row gap-4 border-b-2 border-gray-200 pb-3">
                <div className="basis-1/4 border-r-2 border-gray-200 pr-5">
                  <h4 className="text-lg mb-3 font-bold">{product.title}</h4>
                  <img
                    src="https://fabrilife.com/products/61961a4db1cd1-square.jpg?v=20"
                    alt="image"
                  />
                </div>
                <div className="basis-full flex gap-3">
                  <div className="border-r-2 border-gray-200 pr-4 basis-1/2">
                    <p className="text-lg font-bold">Choose size</p>
                    {/* size handle */}
                    <div className="flex gap-3">
                      {product.size.map((s: string, idx: number) => (
                        <div
                          onClick={() => handleSize(s)}
                          key={idx}
                          className={`px-7 cursor-pointer py-3 text-lg my-4 border-2 border-gray-300 ${
                            s == sizeIndex ? "bg-green-500" : ""
                          }`}
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                    {sizeError && <p className="text-red-500">{sizeError}</p>}
                    {/* color handle */}
                    <p className="text-lg font-bold">Choose Color</p>
                    <div className="flex gap-3">
                      {product.color.map((clr: string, idx: number) => {
                        return (
                          <div
                            onClick={() => handleColor(clr)}
                            key={idx}
                            className={`px-7 cursor-pointer py-3 text-lg my-4 border-2 border-gray-300 ${
                              clr == colorIndex ? "bg-green-500" : ""
                            }`}
                          >
                            {clr}
                          </div>
                        );
                      })}
                    </div>
                    {colorError && <p className="text-red-500">{colorError}</p>}
                  </div>
                  <div>
                    <p className="text-lg font-bold">Quantity:</p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleDecrease()}
                        disabled={quantity === 1}
                        className={`px-7 cursor-pointer py-3 text-lg my-4 border-2 border-gray-300 ${
                          quantity === 1 ? "bg-gray-300" : ""
                        }`}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <div className="px-7 cursor-pointer py-3 text-lg my-4 border-2 border-gray-300">
                        {" "}
                        {quantity}{" "}
                      </div>
                      <button
                        onClick={() => handleIncrease()}
                        className="px-7 cursor-pointer py-3 text-lg my-4 border-2 border-gray-300"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <div className="flex gap-3">
                      <div className="border-r-2 border-gray-300 pr-3">
                        <p className="text-lg font-bold">Unit Price:</p>
                        <p className="text-green-600 font-bold text-xl">
                          ৳{product.price}
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-bold">Sub Total:</p>
                        <p className="text-green-600 font-bold text-xl">
                          ৳{subTotal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* add to cart btn */}
              <div className="py-3 flex justify-between">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleAddToCart()}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  {isLoading ? "Loading..." : "Add To Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
