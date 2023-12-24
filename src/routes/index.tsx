import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { publicRoutes } from "./publicRoutes";
import PublicRouteGuard from "./PublicRoutesGuard";
import { privateRoutes } from "./privateRoutes";
import PrivateRouteGuard from "./PrivateRoutesGuard";
import Products from "../pages/products";
import ProductDetails from "../pages/productDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRouteGuard>
        <AuthLayout />
      </PublicRouteGuard>
    ),
    children: publicRoutes.map((route) => ({
      path: route.path,
      element: <route.element />,
    })),
  },

  // add private route
  ...privateRoutes.map((route) => ({
    path: route.path,
    element: (
      <PrivateRouteGuard>
        <route.element />,
      </PrivateRouteGuard>
    ),
  })),

  // general routes

  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
]);
