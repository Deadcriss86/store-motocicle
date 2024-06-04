import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import "./App.css";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
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
