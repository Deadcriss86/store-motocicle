import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import Login from "../LoginUser";
import Singup from "../Register";
import ProductPage from "../Details";
import "./App.css";
import Shopping_cart from "../Shopping_cart";
import Editor_user from "../UserEditor";
import Productos from "../Productos";
import { AuthProvider } from "../../context/AuthContext";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "/carrito", element: <Shopping_cart /> },
    { path: "/login", element: <Login /> },
    { path: "/Signup", element: <Singup /> },
    { path: "/Detail", element: <ProductPage /> },
    { path: "/Editoruser", element: <Editor_user /> },
    { path: "/Productos", element: <Productos /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
