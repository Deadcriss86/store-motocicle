import { ProductForm } from "../../Components/ProductForm";
import Admin_products from "../../Components/Admin_products";
import { useForm } from "react-hook-form";
import { Navlink } from "../../Components/Navbar_";
import { Footer } from "../../Components/footer";
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
      <Navlink />
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
              <div className="border-2 border-[#0EFF06] rounded-lg p-3 bg-black text-lg">
                <h2 className="text-xl">Nuevo Producto</h2>
                <form
                  className="mt-2"
                  onSubmit={handleSubmit(onSubmit)}
                  encType="multipart/form-data"
                >
                  <div>
                    <label htmlFor="name"></label>
                    <input
                      placeholder="Nombre del producto"
                      className="input input-bordered w-full max-w-xs"
                      type="text"
                      id="name"
                      {...register("name")}
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="price"></label>
                    <input
                      placeholder="Precio"
                      className="input input-bordered w-full max-w-xs"
                      type="number"
                      id="price"
                      {...register("price")}
                      step="0.01"
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="stock"></label>
                    <input
                      placeholder="Stock"
                      className="input input-bordered w-full max-w-xs"
                      type="number"
                      id="stock"
                      {...register("stock")}
                    />
                  </div>
                  <br />
                  <div className="text-white">
                    <label htmlFor="description"></label>
                    <textarea
                      className="textarea textarea-bordered ml-2"
                      placeholder="Descripción del producto"
                      id="description"
                      {...register("description")}
                      rows="4"
                      cols="50"
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="image">Fotos del producto:</label>
                    <input
                      className="file-input file-input-bordered w-full max-w-xs ml-2"
                      type="file"
                      id="image"
                      {...register("image")}
                      accept="image/jpeg"
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="manual">Instructivo:</label>
                    <input
                      className="file-input file-input-bordered w-full max-w-xs ml-2"
                      type="file"
                      id="manual"
                      {...register("manual")}
                      accept="application/pdf"
                    />
                  </div>
                  <br />
                  <button
                    className="bg-[#0EFF06] rounded-lg p-2 text-black font-bold text-xl hover:bg-white"
                    type="submit"
                  >
                    Agregar Producto
                  </button>
                </form>
              </div>
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
      <Footer />
    </div>
  );
};

export default Productos;
