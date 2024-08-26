import { useState, useEffect } from "react";
import axios from "axios";
import DetalleModal from "./DetalleModal";
import { Footer } from "../../Components/footer";
import { Navlink } from "../../Components/Navbar_";
import { FaRegFrown } from "react-icons/fa";

const MisCompras = () => {
  const apiUrl = import.meta.env.VITE_APIBACK_URL;
  const [compras, setCompras] = useState(null);
  const [selectedCompra, setSelectedCompra] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/order/find`, {
          withCredentials: true,
        });
        setCompras(response.data);
      } catch (error) {
        console.error("Error fetching compras:", error);
        setError(true);
      }
    };

    fetchCompras();
  }, []);

  const handleVerDetalle = (compra) => {
    setSelectedCompra(compra);
  };

  const handleCloseModal = () => {
    setSelectedCompra(null);
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-black to-[#148710]">
        <Navlink />
        <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8 w-full max-w-6xl mx-4 sm:mx-8 lg:mx-auto my-10">
          <h1 className="text-center text-3xl text-[#0eff06] mb-8">
            Mis compras
          </h1>
          <div className="w-full">
            {error ? (
              <div className="text-center text-xl text-white flex justify-center items-center ">
                Todavía no tienes compras
                <br />
                <FaRegFrown size="2rem" className="text-[#0eff06] m-4" />
              </div>
            ) : (
              compras &&
              compras.map((compra, index) => (
                <div
                  key={index}
                  className="bg-gray-800 mb-4 p-4 rounded-lg flex flex-col sm:flex-col justify-between items-start"
                >
                  <div className="flex items-center border-b-2 border-grey-300 w-full">
                    <div className="ml-4">
                      {compra.items.map((item, index) => (
                        <h2
                          className="text-xl my-3 text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-xs"
                          key={index}
                        >
                          PEDIDO {index + 1}
                        </h2>
                      ))}
                    </div>
                  </div>
                  <div className=" flex justify-center mb-4 sm:mb-0 ">
                    <div className=" ml-4">
                      {compra.items.map((item, index) => (
                        <h2
                          className="text-xl my-3 text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-xs"
                          key={index}
                        >
                          {item.product_name}{" "}
                        </h2>
                      ))}
                      <p className="text-gray-400 text-sm">id: {compra._id}</p>{" "}
                      <p className="text-xl text-white px-2 mb-2 sm:mb-0">
                        Importe total: ${compra.total}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleVerDetalle(compra)}
                      className="px-4 py-2 bg-[#0eff06] text-gray-900 rounded-lg hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                    >
                      Ver detalle
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <DetalleModal
            isOpen={!!selectedCompra}
            onClose={handleCloseModal}
            compra={selectedCompra}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MisCompras;
