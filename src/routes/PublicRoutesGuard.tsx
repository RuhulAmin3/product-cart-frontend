import { FC, ReactNode } from "react";

import { Navigate } from "react-router-dom";
import { isLoggin } from "../utils";
interface Props {
  children: ReactNode;
}
const PublicRouteGuard: FC<Props> = ({ children }) => {
  if (!isLoggin("accessToken")) {
    return children;
  } else {
    return <Navigate to="/products" />;
  }
};

export default PublicRouteGuard;
