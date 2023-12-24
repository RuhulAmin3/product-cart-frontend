import CardSkeleton from "../../components/CardSkeleton";

import Header from "../../components/Header";
import ProductNotFound from "../../components/ProductNotFound";
import { useDebounced } from "../../hooks/useDebounced";
import { useAppSelector } from "../../redux/app/hooks";
import { useGetAllProductsQuery } from "../../redux/features/products/products.api";
import ProductItem from "./components/ProductItem";

const Products = () => {
  const { searchText } = useAppSelector((state) => state.product) || {};

  const query: Record<string, any> = {};

  const debouncedTerm = useDebounced({
    searchQuery: searchText as unknown as string,
    delay: 600,
  });

  if (debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading, isError } = useGetAllProductsQuery({ ...query });

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
        {data?.data.length === 0 && <ProductNotFound />}
      </div>
    </>
  );
};

export default Products;
