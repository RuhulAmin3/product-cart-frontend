const CartSkeleton = () => {
  return (
    <div
      role="status"
      className="max-w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse"
    >
      {Array.from({ length: 10 }).map((_, idx) => (
        <div key={idx} className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
            <div className="w-full h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
        </div>
      ))}
    </div>
  );
};

export default CartSkeleton;
