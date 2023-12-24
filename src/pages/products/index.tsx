import CardSkeleton from "../../components/CardSkeleton";

import Header from "../../components/Header";
import { useGetAllProductsQuery } from "../../redux/features/products/products.api";
import ProductItem from "./components/ProductItem";

const Products = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery(undefined);

  return (
    <>
      <Header />
      <div className="container">
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-5">
          {isError && <h3 className="text-red-700">Someting is wrong</h3>}
          {isLoading
            ? Array.from({ length: 8 }).map((_, idx) => (
                <CardSkeleton key={idx} />
              ))
            : data?.data.map((prod: any) => (
                <ProductItem key={prod.id} product={prod} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Products;
