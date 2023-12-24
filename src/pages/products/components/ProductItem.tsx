import { useState } from "react";
import Modal from "../../../components/Modal";
import { Link } from "react-router-dom";
import ShoppingCart from "../../../assets/icons/ShoppingCart";

const ProductItem = ({ product }: any) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="shadow-md overflow-hidden border border-transparent hover:border-primary hover:shadow-xl">
        <Link to={`/products/${product.id}`}>
          <img className="w-full" src={product?.image[0]} alt="{title}" />
          <div className="px-6 py-4 text-center">
            <h3 className="font-bold text-lg">{product.title}</h3>
            <p className="text-gray-700 text-base">৳ {product.price}</p>
            <p className="text-gray-700 text-base">{product.category}</p>
          </div>
        </Link>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 w-full flex items-center justify-center gap-3"
        >
          <ShoppingCart size={1} />
          Buy Now
        </button>
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
