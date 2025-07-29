// src/AuthWrapper.jsx
import React from "react";
import useAuthObserver from "./hooks/useAuthObserver"; // adjust the path if needed
import MainRoutes from "./routes/MainRoutes.jsx";
import { RouterProvider } from "react-router";

const AuthWrapper = () => {
  useAuthObserver(); // Real-time auth monitoring

  return <RouterProvider router={MainRoutes} />;
};

export default AuthWrapper;
