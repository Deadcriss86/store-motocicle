import React, { useState } from "react";
import DetalleModal from "./DetalleModal";
import { Footer } from "../../Components/footer";
import { Navlink } from "../../Components/Navbar_";

const MisCompras = () => {
  const compras = [
    { id: "89634", name: "Parrilla thunderstar", price: 999 },
    { id: "89634", name: "Parrilla trasera Vento", price: 599 },
    { id: "89634", name: "Parrilla crossmax", price: 799 },
    {
      id: "89634",
      name: "Parrilla crossmax",
      price: 8959,
    },
  ];

  const [selectedCompra, setSelectedCompra] = useState(null);

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
            {compras.map((compra, index) => (
              <div
                key={index}
                className="bg-gray-800 mb-4 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center"
              >
                <div className="flex items-center mb-4 sm:mb-0">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                    <img
                      src={`/path/to/image/${compra.name}.png`}
                      alt={compra.name}
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-xs">
                      {compra.name}
                    </h2>
                    <p className="text-gray-400 text-sm">id: {compra.id}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center">
                  <p className="text-xl text-white px-2 mb-2 sm:mb-0">
                    Importe total: ${compra.price}
                  </p>
                  <button
                    onClick={() => handleVerDetalle(compra)}
                    className="px-4 py-2 bg-[#0eff06] text-gray-900 rounded-lg hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    Ver detalle
                  </button>
                </div>
              </div>
            ))}
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
