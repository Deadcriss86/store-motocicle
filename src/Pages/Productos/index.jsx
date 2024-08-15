import { ProductForm } from "../../Components/ProductForm";
import Admin_products from "../../Components/Admin_products";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";

const Productos = () => {
  const [responseMessage, setResponseMessage] = useState(null);
  const [products, setProducts] = useState([]);
  const [deletingProductId, setDeletingProductId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/getproducts"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (productId) => {
    setDeletingProductId(productId);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/api/products/${deletingProductId}`
      );
      setProducts(
        products.filter((product) => product._id !== deletingProductId)
      );
      setDeletingProductId(null);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleAddSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/newproduct",
        formData
      );
      setProducts([...products, response.data.product]);
      setResponseMessage("ok");
    } catch (error) {
      console.error("Error adding product:", error);
      setResponseMessage("error");
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log(response.data);
      navigate("/");
      window.location.reload(true);
    } catch (error) {
      console.error("Error during logout:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      }
    }
  };

  return (
    <div>
      <div className="main min-h-screen min-w-screen bg-black justify-center items-center flex flex-col p-8">
        {responseMessage === "ok" ? (
          <div role="alert" className="alert alert-success bg-[#0EFF06] mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Archivo agregado correctamente!</span>
          </div>
        ) : responseMessage ? (
          <div>Algo salió mal.</div>
        ) : null}
        <div className="container flex justify-end py-2">
          <h2 className=" text-white font-bold p-4 text-2xl">
            Administrador ARS
          </h2>{" "}
          <button
            className="border-2 border-[#0eff06] px-4 py-2 rounded-xl font-bold text-white mx-6 hover:bg-[#0eff06]"
            onClick={logout}
          >
            Cerrar sesion
          </button>
        </div>
        <div className="container bg-[#202020] space-x-6 text-2xl p-4 mb-4 rounded-lg text-white flex justify-center">
          <button
            to="/Order"
            className="border-2 border-[#0eff06] text-[#0eff06] px-4 py-2 rounded-xl font-bold hover:text-gray-800 hover:bg-gradient-to-r from-orange-300 to-[#0eff06] mx-8"
          >
            Pedidos
          </button>
          <button
            className="border-2 border-[#0eff06] text-[#0eff06] px-4 py-2 rounded-xl font-bold hover:text-gray-800 hover:bg-gradient-to-r from-orange-300 to-[#0eff06] mx-8"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Agregar Producto
          </button>

          <dialog id="my_modal_4" className="modal bg-[#000000c7]">
            <div className="modal-action">
              <ProductForm
                onSubmit={handleAddSubmit}
                setResponseMessage={setResponseMessage}
              />
              <form method="dialog">
                <button className="btn border-2 border-[#0EFF06] rounded-lg p-3">
                  Cancelar
                </button>
              </form>
            </div>
          </dialog>
        </div>
        <div className="container bg-[#202020] p-4 rounded-lg border-2 border-[#0EFF06]">
          {products.map((product) => (
            <Admin_products
              key={product._id}
              id={product._id}
              name={product.productName}
              price={product.price}
              stock={product.stock}
              description={product.description}
              questions={
                <ul>
                  {product.questions.map((q, index) => (
                    <li key={index}>{q.body}</li>
                  ))}
                </ul>
              }
              images={product.images}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      {deletingProductId && (
        <dialog id="delete_modal" className="modal bg-[#000000c7]" open>
          <div className="modal-action text-white">
            <p>¿Estás seguro de que deseas eliminar este producto?</p>
            <button
              className="btn bg-red-500 text-white p-3 rounded-lg"
              onClick={confirmDelete}
            >
              Confirmar
            </button>
            <button
              className="btn border-2 border-[#0EFF06] rounded-lg p-3"
              onClick={() => setDeletingProductId(null)}
            >
              Cancelar
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Productos;
