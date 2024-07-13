import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import Login from "../LoginUser";
import Signup from "../Register"; // Corregido de Singup a Signup
import ProductPage from "../Details";
import "./App.css";
import Shopping_cart from "../Shopping_cart";
import OrderPages from '../Home/OrderPages/OrderPages';
import CostumerSer from '../Home/CostumerServicePage/CostumerSer';
import Editor_user from "../UserEditor";
import Productos from "../Productos";
import { AuthProvider } from "../../context/AuthContext";
import { ProtectedRoute } from "../../routes";
import Shopping from "../Myshopping";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> }, // Corregido de /Singup a /signup
    { path: "/detail", element: <ProductPage /> }, // Corregido de /Detail a /detail
    { path: "/productos", element: <Productos /> }, // Corregido de /Productos a /productos
    {
      element: <ProtectedRoute />,
      children: [
        { path: "/editoruser", element: <Editor_user /> }, // Corregido de /Editoruser a /editoruser
        { path: "/carrito", element: <Shopping_cart /> },
      ],
    },
    { path: "/Singup", element: <Singup /> },
    { path: "/Detail", element: <ProductPage /> },
    { path: "/Order", element: <OrderPages/>},
    { path: "/serviceAtention", element:<CostumerSer/>}, 
    { path: "/Editoruser", element: <Editor_user /> },
    { path: "/Productos", element: <Productos /> },
    { path: "/Shopping", element: <Shopping /> },
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
