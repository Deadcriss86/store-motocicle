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
          <div className="overflow-x-auto">
            {error ? (
              <div className="text-center text-xl text-white flex justify-center items-center ">
                Todavía no tienes compras
                <br />
                <FaRegFrown size="2rem" className="text-[#0eff06] m-4" />
              </div>
            ) : compras ? (
              <table className="table bg-gray-800 mb-4 p-4 rounded-lg w-full">
                <thead>
                  <tr className=" text-lg font-bold text-[#0eff06]">
                    <th>No. pedido</th>
                    <th>Productos</th>
                    <th>Importe</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className=" border-grey-300">
                  {compras.map((compra, index) => (
                    <tr key={index}>
                      <td className="text-xl my-3 text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-xs">
                        {index + 1}
                      </td>
                      <td className="text-sm my-3 text-white text-ellipsis overflow-hidden whitespace-nowrap flex flex-col">
                        {compra.items.map((item, idx) => (
                          <span key={idx}>{item.product_name}</span>
                        ))}
                      </td>
                      <td className="text-sm text-white px-2 mb-2 sm:mb-0">
                        Importe total: ${compra.total}
                      </td>
                      <td>
                        <button
                          onClick={() => handleVerDetalle(compra)}
                          className="px-4 py-2 bg-[#0eff06] text-gray-900 rounded-lg hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                        >
                          Seguimiento
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
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
