import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import "../Pages/Home/OrderPages/styleOrder.css";

const CardDelivery = ({
  orderId, // Aquí recibes el orderId
  deliveryDescription,
  nameClient,
  priceDelivery,
  descriptionGuide,
  productName,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newDescriptionGuide, setNewDescriptionGuide] = useState(
    descriptionGuide || ""
  );

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  const handleInputChange = (e) => {
    setNewDescriptionGuide(e.target.value);
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (!orderId) {
      console.error("El orderId es undefined");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/api/orders/${orderId}`,
        {
          numero_guia: newDescriptionGuide,
        }
      );
      window.location.reload();
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
    }
  };

  return (
    <div className="cardContainer p-4 bg-[#1f1f1f] text-white rounded-lg shadow-lg space-y-4 max-w-lg mx-auto lg:max-w-full lg:flex lg:items-start lg:justify-between">
      <div className="space-y-2 lg:space-y-0 lg:space-x-6 lg:flex lg:items-center">
        <div className="noPedido text-sm md:text-base lg:text-lg font-semibold">
          Pedido No. {deliveryDescription}
        </div>
        <div className="clientName text-sm md:text-base lg:text-lg">
          Nombre: {nameClient}
        </div>
        <div className="clientName text-sm md:text-base lg:text-lg">
          Producto: {productName}
        </div>
        <div className="mountTotal text-sm md:text-base lg:text-lg">
          Monto total: {priceDelivery}
        </div>
      </div>
      <div className="guideNumber text-sm md:text-base lg:text-lg">
        No. de guía:
        <span className="numberGuide font-bold ml-2">{descriptionGuide}</span>
      </div>
      <div className="flex justify-between items-center w-full lg:w-auto space-x-4 mt-4 lg:mt-0">
        <button className="saveButton bg-transparent hover:bg-[#0FFF07] hover:text-black transition-colors duration-300 px-4 py-2 rounded-lg">
          Guardar
        </button>
        <button
          className="editButton bg-transparent hover:bg-[#0FFF07] hover:text-black transition-colors duration-300 px-4 py-2 rounded-lg"
          onClick={handleEditClick}
        >
          <CiEdit />
        </button>
      </div>

      {/* Pop-up de edición */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Editar Pedido</h2>
            <form onSubmit={handleSaveChanges}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  No. de guía:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={newDescriptionGuide}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDelivery;
