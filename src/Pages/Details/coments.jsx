import React from "react";
import { RiTruckLine } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { SlWallet } from "react-icons/sl";

const Coments = ({ isOpen, onClose, coments }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center border-bg-[#0eff06]">
      <div className="bg-gray-800 text-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-[#0eff06]">Detalles de envío</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#0eff06] focus:outline-none text-xl"
          >
            &times;
          </button>
        </div>
        <div className="mb-4 border-2 p-2 rounded-md border-[#0eff06]">
          <div className="flex flex-grow space-x-2">
            <FaShoppingBag size="1.5rem" className="text-[#0eff06] text-xl" />
            <h3 className="text-lg mb-2">Pedido creado</h3>
          </div>
          <p>{coments.name}</p>
          <p className="text-gray-400 flex flex-end">Mar 15, 14:00 hrs</p>
        </div>
        <div className="mb-4 border-2 p-2 rounded-md border-[#0eff06] ">
          <div className="flex flex-grow space-x-2">
            <RiTruckLine size="1.5rem" className="text-[#0eff06] text-xl" />
            <h3 className="text-lg mb-2">Enviado</h3>
          </div>
          <p>DHL</p>
          <p>Número de guía: 201769794</p>
          <p className="text-gray-400">
            Rastrea tu pedido desde la página de la paquetería ingresando tu
            número de guía
          </p>
          <p className="text-gray-400">Mar 16, 17:00 hrs</p>
        </div>
        <div className="mb-4 border-2 p-2 rounded-md border-[#0eff06] flex flex-grow space-x-4 ">
          <SlWallet size="1.5rem" className="text-[#0eff06] text-xl" />
          <h3 className="text-lg mb-2">Total:</h3>
          <p>${coments.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Coments;
