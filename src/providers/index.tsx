import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { routes } from "../routes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/app/store";
type ProviderPropsType = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProviderPropsType) => {
  return (
    <>
      <ReduxProvider store={store}>
        <Toaster />
        <RouterProvider router={routes} />
        {children}
      </ReduxProvider>
    </>
  );
};

export default Provider;
