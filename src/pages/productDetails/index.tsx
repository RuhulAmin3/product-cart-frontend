import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useGetSingleProductQuery } from "../../redux/features/products/products.api";
import CardSkeleton from "../../components/CardSkeleton";
import Modal from "../../components/Modal";
import { useState } from "react";

const ProductDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams() || {};
  const { data, isLoading } = useGetSingleProductQuery(id as string);
  const { title, category, image, size, color, price, description } =
    data?.data || {};
  return (
    <>
      <Header />
      <section className="container mt-6 font-Inter">
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <div className="flex flex-col md:flex-row gap-10">
            {/* image part */}
            <div className="basis-1/2">
              <img src={image[0]} alt="t-shirt" />

              <div className="flex flex-row gap-2">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="w-1/2 p-2 sm:w-1/4 my-4 cursor-pointer"
                  >
                    <div className="block border hover:border-primary p-2">
                      <img
                        src={image[0]}
                        alt="image"
                        className="object-cover w-full lg:h-32 "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* content part */}
            <div>
              <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold md:text-4xl">
                {title}
              </h2>

              <p className="max-w-md mb-8 text-gray-700">{description}</p>
              <p className="inline-block text-lg">
                Category:{" "}
                <span className="text-gray-700 font-semibold">{category}</span>
              </p>
              <p className="inline-block text-lg text-gray-700 border-b-2 border-gray-200 w-full mb-3 py-5">
                Price: <span className="font-semibold"> ৳ {price}</span>
              </p>
              <div className="mb-8">
                <h2 className="mb-2 text-[28px] font-bold ">Color</h2>
                <div className="flex flex-wrap -mb-2">
                  {color &&
                    color?.map((clr: string) => {
                      return (
                        <div
                          key={clr}
                          className="p-1 mb-2 cursor-pointer mr-2 border border-transparent rounded-full hover:border-gray-400"
                        >
                          <div
                            className={`w-6 h-6 bg-${clr}-500 rounded-full`}
                          ></div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="pb-6 mb-8 border-b border-gray-300">
                <h2 className="mb-2 text-[28px] font-bold">Size</h2>
                <div className="flex flex-wrap -mb-2">
                  {size?.map((s: string) => (
                    <button
                      key={s}
                      className="py-1 mb-2 mr-1 border w-16 hover:border-primary hover:text-primary"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-4 mr-4 lg:mb-0">
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-gray-800 hover:bg-gray-900 w-full h-10 p-2 mr-4 text-gray-50"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <Modal
              product={data?.data}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default ProductDetails;
