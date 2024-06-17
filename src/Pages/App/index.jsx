import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import "./App.css";
import Shopping_cart from "../Shopping_cart";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "carrito", element: <Shopping_cart /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
