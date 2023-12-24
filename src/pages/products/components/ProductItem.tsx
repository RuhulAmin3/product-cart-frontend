import { useState } from "react";
import Modal from "../../../components/Modal";
import { Link } from "react-router-dom";

const ProductItem = ({ product }: any) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="shadow-lg bg-violet-300 p-3 rounded overflow-hidden shadow-lg">
        <Link to={`/products/${product.id}`}>
          <img className="w-full" src={product?.image[0]} alt="{title}" />
          <div className="px-6 py-4">
            <div className="font-bold text-lg mb-2">{product.title}</div>
            <p className="text-gray-700 text-base">{product.price}</p>
            <p className="text-gray-700 text-base">{product.category}</p>
          </div>
        </Link>
        <div className="px-6 py-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Buy Now
          </button>
        </div>
      </div>
      <Modal
        product={product}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default ProductItem;
