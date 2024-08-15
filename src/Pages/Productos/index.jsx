import { ProductForm } from "../../Components/ProductForm";
import Admin_products from "../../Components/Admin_products";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Productos = () => {
  const [responseMessage, setResponseMessage] = useState(null);
  const [products, setProducts] = useState([]);
  const [deletingProductId, setDeletingProductId] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);
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

  const handleResponseSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const responseText = formData.get("response");

    if (!selectedQuestion) {
      console.error("No se ha seleccionado ninguna pregunta.");
      return;
    }

    const { productId, _id: questionId } = selectedQuestion;

    if (!productId || !questionId) {
      console.error("ID del producto o de la pregunta no están definidos.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `http://localhost:3000/api/products/${productId}/questions/${questionId}/response`,
        { response: responseText },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        console.log("Respuesta añadida con éxito:", res.data);
        setIsResponseModalOpen(false);
      } else {
        console.error("Error al agregar la respuesta:", res.data.message);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
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
      <div className="main min-h-screen min-w-screen bg-black justify-center items-center flex flex-col p-6">
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
        <div className="container bg-[#202020] space-x-4 text-2xl p-2 mb-4 rounded-lg text-white">
          <button className="border-2 border-[#0EFF06] rounded-lg p-2">
            Pedidos
          </button>
          <button
            className="border-2 border-[#0EFF06] rounded-lg p-2"
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
          <button
            className="bg-red-400 text-white p-2 rounded-lg"
            onClick={logout}
          >
            Logout
          </button>
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
                <ul className="flex flex-col justify-center items-center">
                  {product.questions.map((q) => (
                    <li key={q._id}>
                      {q.body}
                      <button
                        className="bg-yellow-300 text-black p-2 rounded-lg m-1"
                        onClick={() => {
                          setSelectedQuestion({
                            productId: product._id, // Asegúrate de que el productId se defina aquí
                            _id: q._id,
                          });
                          setIsResponseModalOpen(true);
                        }}
                      >
                        Responder
                      </button>
                    </li>
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

      {isResponseModalOpen && (
        <dialog id="response_modal" className="modal bg-[#000000c7]" open>
          <div className="modal-action text-white p-4 bg-[#202020] rounded-lg">
            <h2 className="text-lg font-bold mb-4">Responder Pregunta</h2>
            <form onSubmit={handleResponseSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Respuesta
                </label>
                <input
                  name="response"
                  type="text"
                  className="border border-gray-300 rounded-lg p-2 w-full text-black"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="btn border-2 border-[#0EFF06] rounded-lg p-3 mr-2"
                  onClick={() => setIsResponseModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn bg-blue-500 text-white p-3 rounded-lg"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Productos;
