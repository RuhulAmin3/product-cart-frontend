import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useGetSingleProductQuery } from "../../redux/features/products/products.api";

const ProductDetails = () => {
  const { id } = useParams() || {};
  const { data } = useGetSingleProductQuery(id);
  const { title, image, slug, category, size, color, price, description } =
    data?.data || {};
  return (
    <>
      <Header />
      <section className="container">
        <div className="flex gap-7">
          {/* image part */}
          <div className="basis-1/2">
            <img
              src="https://fabrilife.com/products/61961a4db1cd1-square.jpg?v=20"
              alt="t-shirt"
            />
          </div>
          {/* content part */}
          <div>
            <h3 className="text-xl text-gray-700">{title}</h3>
            <p className="text-lg text-gray-700 my-4">Price: ৳ {price}</p>
            <p className="text-lg font-bold text-gray-700">Select Size:</p>
            <div className="flex gap-3">
              {size?.map((s, idx) => (
                <div
                  // onClick={() => handleSize(s)}
                  key={idx}
                  className={`px-7 cursor-pointer py-3 text-lg my-4 border-2 border-gray-300`}
                >
                  {s}
                </div>
              ))}
            </div>
            <p className="text-lg font-bold text-gray-700">Select Color:</p>
            <div className="flex gap-3">
              {color?.map((clr, idx) => (
                <div
                  // onClick={() => handleSize(s)}
                  key={idx}
                  className={`px-7 cursor-pointer py-3 text-lg my-4 border-2 border-gray-300`}
                >
                  {clr}
                </div>
              ))}
            </div>

            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
