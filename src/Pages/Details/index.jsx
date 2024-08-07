import { Navlink } from "../../Components/Navbar_";
import { Resenasforms } from "../../Components/resenas_forms";
import { Footer } from "../../Components/footer";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Notification from "../../Components/notification";
import StarRating from "../../Components/Stars_rating";

const ProductPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("id");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);

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
      setResponseMessage("Producto agregado al carrito!");
    } catch (error) {
      console.error("Error al agregar el producto al carrito:", error);
      setResponseMessage("Error al agregar el producto al carrito.");
    }
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/products/${value}/questions`,
        data,
        {
          withCredentials: true,
        }
      );
      console.log("Pregunta enviada:", response.data);
      setResponseMessage("Pregunta enviada con éxito!");
      reset();
    } catch (error) {
      console.error("Error al enviar la pregunta:", error);
      setResponseMessage("Error al enviar la pregunta.");
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
                className="bg-[#0eff06] text-black font-bold py-2 px-4 rounded-full mb-4 hover:text-white hover:bg-gradient-to-r from-orange-300 to-[#0eff06]"
              >
                Agregar al carrito
              </button>
              <div className="flex items-center mb-4 w-1/2 bg-white">
                <img
                  src="https://autofinish.mx/wp-content/uploads/2022/05/iconpayautofinishpng.png"
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
              <ul className="text-gray-300 text-justify m-4">
                {product?.description ||
                  "Descripción no disponible. Slider tipo jaula. Hecho de acero industrial y con pintura electrostática para mayor duración, incluso en climas costeros..."}
              </ul>
            </details>
            <details className="tabs mb-4">
              <summary className="px-4 py-2 bg-[#0eff06] text-gray-900 font-bold rounded-xl">
                Comentarios
              </summary>
              {product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="text-gray-300 text-justify m-4 border-b-2 border-green-500 text-lg"
                  >
                    <div className="flex">
                      <h2 className="text-green-500 mr-4">{review.username}</h2>
                      <StarRating rating={review.rating}></StarRating>
                    </div>
                    <p>{review.opinion}</p>
                  </div>
                ))
              ) : (
                <div className="text-gray-300 text-justify m-4">
                  Todavía no hay reseñas sobre este producto :(
                </div>
              )}
            </details>
            <details className="tabs mb-4">
              <summary className="px-4 py-2 bg-[#0eff06] text-gray-900 font-bold rounded-xl">
                Información del envío
              </summary>
              <ul className="text-gray-300 text-justify m-4">
                - OPCIONES DE ENVIO:
                <br />
                La tarifa dentro de la CDMX es de $210.00, la tarifa al exterior
                de la republica $510.00 <br />
                - TIEMPOS DE ENTREGA ESTIMADOS: <br />
                Dentro de la CDMX tenemos un tiempo de entrega de 2 a 3 dias
                habiles, al exterior de 4 a 5 dias habiles.
                <br /> - SEGUIMIENTO DE ENVIOS: <br />
                Se podran consultar en MIS COMPRAS dentro de la pagina web con
                el numero de guia.
              </ul>
            </details>
          </div>

          {responseMessage && (
            <Notification
              message={responseMessage}
              type={responseMessage.includes("Error") ? "error" : "success"}
              onClose={() => setResponseMessage(null)}
            />
          )}

          <div className="flex justify-center m-8 ">
            <Link
              to="/Menu"
              className="border-2 border-[#0eff06] text-[#0eff06] px-4 py-2 rounded-xl font-bold hover:text-gray-800 hover:bg-gradient-to-r from-orange-300 to-[#0eff06] mx-8"
            >
              Regresar al menu
            </Link>{" "}
            <button
              className="border-2 border-[#0eff06] text-[#0eff06] px-4 py-2 rounded-xl font-bold hover:text-gray-800 hover:bg-gradient-to-r from-orange-300 to-[#0eff06]"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Agregar Reseña
            </button>
          </div>

          <dialog id="my_modal_5" className="modal bg-[#000000c7]">
            <div className="modal-action">
              <Resenasforms
                setResponseMessage={setResponseMessage}
                id={value}
                closeModal={() => document.getElementById("my_modal_5").close()}
              />
              <form method="dialog">
                <button className="btn border-2 border-[#0EFF06] rounded-lg p-3">
                  Cancelar
                </button>
              </form>
            </div>
          </dialog>

          <div className="bg-gray-800 p-4 mt-8 rounded-lg">
            <h2 className="text-xl mb-4">Hacer una pregunta</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-2">
              <input
                {...register("body", { required: true })}
                className="w-full px-3 py-2 text-gray-900 rounded-lg"
                type="text"
                placeholder="Hacer una pregunta..."
              />
              <button
                type="submit"
                className="border-2 border-[#0eff06] text-[#0eff06] px-4 py-2 rounded-xl font-bold hover:text-gray-800 hover:bg-gradient-to-r from-orange-300 to-[#0eff06]"
              >
                Enviar Pregunta
              </button>
            </form>
            <details className="tabs mb-4 mt-4">
              <summary className="px-4 py-2 bg-[#0eff06] text-gray-900 font-bold rounded-xl">
                Preguntas
              </summary>
              {product.questions.length > 0 ? (
                product.questions.map((questions, index) => (
                  <div
                    key={index}
                    className="text-gray-300 text-justify m-4 border-b-2 border-green-500 text-lg flex"
                  >
                    <h2 className="text-green-500 mr-4">{questions.author}:</h2>

                    <p>{questions.body}</p>
                  </div>
                ))
              ) : (
                <div className="text-gray-300 text-justify m-4">
                  Todavía no hay preguntas sobre este producto :(
                </div>
              )}
            </details>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
