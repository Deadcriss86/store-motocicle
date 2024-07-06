import { ProductForm } from "../../Components/ProductForm";
import Admin_products from "../../Components/Admin_products";

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
  return (
    <div>
      <div className="main min-h-screen min-w-screen bg-black justify-center items-center flex flex-col">
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
              <ProductForm />
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
