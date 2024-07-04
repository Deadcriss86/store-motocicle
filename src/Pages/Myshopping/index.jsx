import React, { useState } from "react";
import DetalleModal from "./DetalleModal";

const MisCompras = () => {
  const compras = [
    { id: "89634", name: "Parrilla thunderstar", price: 999 },
    { id: "89634", name: "Parrilla trasera Vento", price: 599 },
    { id: "89634", name: "Parrilla crossmax", price: 799 },
    {
      id: "89634",
      name: "Parrilla crossmax pero no se si se va a justar",
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-[#0eff06d3]">
      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8 w-auto ">
        {" "}
        <h1 className="text-center text-3xl text-[#0eff06] mb-8">
          Mis compras
        </h1>
        <div className="w-full max-w-3xl ">
          {compras.map((compra, index) => (
            <div
              key={index}
              className="bg-gray-800 mb-4 p-4 rounded-lg flex justify-between items-center"
            >
              <div className="flex items-center ">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <img
                    src={`/path/to/image/${compra.name}.png`}
                    alt={compra.name}
                    className="w-12 h-12"
                  />
                </div>
              </div>{" "}
              <div className="ml-4">
                <h2 className="text-xl text-white text-ellipsis">
                  {compra.name}
                </h2>
                <p className="text-gray-400 text-sm">id:{compra.id}</p>
              </div>
              <div className="px-6 flex-initial">
                <p className="text-xl text-white px-2">
                  Importe total: ${compra.price}
                </p>
              </div>
              <button
                onClick={() => handleVerDetalle(compra)}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                Ver detalle
              </button>
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
  );
};

export default MisCompras;
