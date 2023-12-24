const ProductNotFound = () => {
  return (
    <div className="flex items-center justify-center h-[50vh] ">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-500">
          Product Not Found
        </h1>
        <p className="text-lg text-gray-600">
          Sorry, the product you are looking for does not exist or has been
          removed.
        </p>
      </div>
    </div>
  );
};

export default ProductNotFound;
