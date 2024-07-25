import { Navlink } from "../../Components/Navbar_";
import { Resenasforms } from "../../Components/resenas_forms";
import { Footer } from "../../Components/footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import axios from "axios";

const ProductPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("id");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (value) {
      console.log("Fetching product with id:", value);
      axios
        .get(`http://localhost:3000/api/getproduct`, { params: { id: value } })
        .then((response) => {
          console.log("API response:", response);
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Error al obtener el producto");
          setLoading(false);
          console.error("Error al obtener el producto:", error);
        });
    }
  }, [value]);

  const onclickcarrito = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/newpedido",
        {
          productos: [
            {
              producto: value,
              cantidad: 1,
              precio: product.price,
              product_name: product.productName,
              image: product.images,
            },
          ],
        },
        {
          withCredentials: true,
        }
      );
      alert("Producto agregado al carrito!");
    } catch (error) {
      setCartError("Error al agregar el producto al carrito");
      console.error("Error al agregar el producto al carrito:", error);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navlink />
      <br />
      <br />
      <br />
      <br />
      <main className="p-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:space-x-8 bg-gray-800 p-4 rounded-lg">
            <div className="lg:w-1/2 bg-gray-400">
              <img
                src={product?.images || "https://via.placeholder.com/400"}
                alt="Producto"
                className="w-full rounded-lg"
              />
            </div>
            <br />
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold mb-2 text-[#0eff06]">
                {product?.productName || "Nombre del producto"}
              </h1>
              <p className="text-white">Precio</p>
              <p className="text-2xl text-[#0eff06] mb-4 border-b-2 border-[#0eff06]">
                ${product?.price?.toFixed(2)} MXN
              </p>
              <p className="text-red-500 mb-4">
                (
                {product?.stock
                  ? `${product.stock} Disponibles`
                  : "Stock no disponible"}
                )
              </p>
              <button
                onClick={onclickcarrito}
                className="bg-[#0eff06] text-black font-bold py-2 px-4 rounded-full mb-4 hover:text-white hover:bg-gradient-to-r from-orange-300 to-[#0eff06] "
              >
                Agregar al carrito
              </button>
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/150x50"
                  alt="Payment Methods"
                />
              </div>
              <p className="mb-4">
                ¡Envío de 3 a 5 días hábiles!* Hasta 12MSI con mercado crédito
              </p>
              <button className="border-2 border-[#0eff06] text-[#0eff06] px-4 py-2 rounded-xl font-bold hover:text-gray-800 hover:bg-gradient-to-r from-orange-300 to-[#0eff06]">
                Manual Instalación
              </button>
            </div>
          </div>

          <div className="bg-gray-800 p-4 mt-8 rounded-lg">
            <details className="tabs mb-4">
              <summary className="px-4 py-2 bg-[#0eff06] text-gray-900 font-bold rounded-xl">
                Descripción
              </summary>
              <ul className=" text-gray-300 text-justify m-4">
                {product?.description ||
                  "Descripción no disponible. Slider tipo jaula. Hecho de acero industrial y con pintura electrostática para mayor duración, incluso en climas costeros..."}
              </ul>
            </details>
            <details className="tabs mb-4">
              <summary className="px-4 py-2 bg-[#0eff06] text-gray-900 font-bold rounded-xl">
                Comentarios
              </summary>
              <ul className=" text-gray-300 text-justify m-4">Hola</ul>
            </details>
            <details className="tabs mb-4">
              <summary className="px-4 py-2 bg-[#0eff06] text-gray-900 font-bold rounded-xl">
                Información del envío
              </summary>
              <ul className=" text-gray-300 text-justify m-4">Hola otra vez</ul>
            </details>
          </div>
          <div className="flex justify-betwen m-8 ">
            <Link
              to="/Menu"
              className="border-2 border-[#0eff06] text-[#0eff06] px-4 py-2 rounded-xl font-bold hover:text-gray-800 hover:bg-gradient-to-r from-orange-300 to-[#0eff06]"
            >
              Regresar al menu
            </Link>
          </div>

          <button
            className="border-2 border-[#0EFF06] rounded-lg p-2"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Agregar Reseña
          </button>
          <dialog id="my_modal_4" className="modal bg-[#000000c7]">
            <div className="modal-action">
              <Resenasforms id={value}></Resenasforms>
              <form method="dialog">
                <button className="btn border-2 border-[#0EFF06] rounded-lg p-3">
                  Cancelar
                </button>
              </form>
            </div>
          </dialog>

          <div className="bg-gray-800 p-4 mt-8 rounded-lg">
            <h2 className="text-xl mb-4">Hacer una pregunta</h2>
            <div className="flex space-x-2">
              <input
                className="w-full px-3 py-2 text-gray-900 rounded-lg"
                type="text"
                placeholder="Hacer una pregunta..."
              />
              <button className="border-2 border-[#0eff06] text-[#0eff06] px-4 py-2 rounded-xl font-bold hover:text-gray-800 hover:bg-gradient-to-r from-orange-300 to-[#0eff06]">
                Enviar Pregunta
              </button>
            </div>
            <a href="#" className="text-[#0eff06] mt-4 block">
              Ver todas las preguntas
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
