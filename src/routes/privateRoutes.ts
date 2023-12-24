import Carts from "../pages/cart";
import ProductDetails from "../pages/productDetails";
import Products from "../pages/products";

export const privateRoutes = [
  {
    path: "/products",
    element: Products,
  },
  {
    path: "/products/:id",
    element: ProductDetails,
  },
  {
    path: "/carts",
    element: Carts,
  },
];
