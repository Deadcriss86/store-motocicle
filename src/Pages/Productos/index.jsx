import { ProductForm } from "../../Components/ProductForm";
import Admin_products from "../../Components/Admin_products";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Producto 1",
    price: 100,
    stock: 4,
    description: "Esta es una descripción corta",
  },
  {
    id: 2,
    name: "Producto 2",
    price: 200,
    stock: 6,
    description: "Esta es una descripción corta",
  },
  {
    id: 3,
    name: "Producto 3",
    price: 300,
    stock: 9,
    description: "Esta es una descripción corta",
  },
];

const Productos = () => {
  const [responseMessage, setResponseMessage] = useState(null);

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
              <ProductForm setResponseMessage={setResponseMessage} />
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
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
