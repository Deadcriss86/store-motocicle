import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import Swal from "sweetalert2";

const CardDelivery = ({
  orderId,
  deliveryDescription,
  nameClient,
  priceDelivery,
  descriptionGuide,
  parcelService,
  shippingDate,
  productName,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [newDescriptionGuide, setNewDescriptionGuide] = useState(
    descriptionGuide || ""
  );
  const [newParcelService, setNewParcelService] = useState(parcelService || "");
  const [newShippingDate, setNewShippingDate] = useState(shippingDate || "");

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  const openDetailsModal = () => {
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
  };

  const apiUrl = import.meta.env.VITE_APIBACK_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "descriptionGuide") {
      setNewDescriptionGuide(value);
    } else if (name === "parcelService") {
      setNewParcelService(value);
    } else if (name === "shippingDate") {
      setNewShippingDate(value);
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (!orderId) {
      console.error("El orderId es undefined");
      return;
    }

    try {
      await axios.put(`${apiUrl}/api/orders/${orderId}`, {
        numero_guia: newDescriptionGuide,
        paqueteria: newParcelService,
        fecha_de_envio: newShippingDate,
      });

      Swal.fire({
        title: "Información actualizada",
        text: "El pedido se actualizó correctamente.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#0FFF07",
      });
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un error al actualizar el pedido.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#FF0000",
      });
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="p-4 text-white rounded-lg shadow-lg space-y-4 mx-auto max-w-lg lg:max-w-full lg:flex lg:items-start lg:justify-center">
      <table className="table w-full bg-[#3F3F3F] rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-gray-700 text-gray-300 text-sm">
          <tr>
            <th className="p-2"></th>
            <th className="p-2 text-left">Pedido No.</th>
            <th className="p-2 text-left hidden lg:table-cell">Nombre</th>
            <th className="p-2 text-left hidden lg:table-cell">Producto</th>
            <th className="p-2 text-left hidden lg:table-cell">Monto Total</th>
            <th className="p-2 text-left hidden lg:table-cell">No. de guía</th>
            <th className="p-2 text-left hidden lg:table-cell">Paquetería</th>
            <th className="p-2 text-left hidden lg:table-cell">Fecha de envío</th>
            <th className="p-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-600 hover:bg-gray-800 transition-colors">
            <td className="p-2"></td>
            <td className="p-2 font-semibold">{deliveryDescription}</td>
            <td className="p-2 hidden lg:table-cell">{nameClient}</td>
            <td className="p-2 hidden lg:table-cell">
              {truncateText(productName, 20)}
            </td>
            <td className="p-2 hidden lg:table-cell">${priceDelivery}</td>
            <td className="p-2 hidden lg:table-cell">{descriptionGuide}</td>
            <td className="p-2 hidden lg:table-cell">{parcelService}</td>
            <td className="p-2 hidden lg:table-cell">{formatDate(shippingDate)}</td>
            <td className="p-2 flex justify-center lg:justify-end space-x-2 lg:space-x-4">
              <button
                className="editButton bg-transparent hover:bg-[#0FFF07] text-gray-300 hover:text-black transition-colors duration-300 px-4 py-2 rounded-lg"
                onClick={handleEditClick}
              >
                <CiEdit size={24} />
              </button>
              <button
                className="detailsButton bg-transparent hover:bg-[#0FFF07] text-gray-300 hover:text-black transition-colors duration-300 px-4 py-2 rounded-lg lg:hidden"
                onClick={openDetailsModal}
              >
                Ver más
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {isDetailsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-xl font-semibold mb-4">Detalles del Pedido</h2>
            <p><strong>Nombre:</strong> {nameClient}</p>
            <p><strong>Producto:</strong> {truncateText(productName, 20)}</p>
            <p><strong>Monto Total:</strong> ${priceDelivery}</p>
            <p><strong>No. de guía:</strong> {descriptionGuide}</p>
            <p><strong>Paquetería:</strong> {parcelService}</p>
            <p><strong>Fecha de envío:</strong> {formatDate(shippingDate)}</p>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="btn bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
                onClick={closeDetailsModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-xl font-semibold mb-4">Editar Pedido</h2>
            <form onSubmit={handleSaveChanges}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  No. de guía:
                </label>
                <input
                  className="input w-full bg-[#2e2e2e] text-white border-gray-600 rounded-lg"
                  type="text"
                  name="descriptionGuide"
                  value={newDescriptionGuide}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Paquetería:
                </label>
                <input
                  className="input w-full bg-[#2e2e2e] text-white border-gray-600 rounded-lg"
                  type="text"
                  name="parcelService"
                  value={newParcelService}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Fecha de envío:
                </label>
                <input
                  className="input w-full bg-[#2e2e2e] text-white border-gray-600 rounded-lg"
                  type="date"
                  name="shippingDate"
                  value={newShippingDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="btn bg-gray-600 text-white mr-4 rounded-lg hover:bg-gray-500 transition-colors"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn bg-[#0FFF07] text-black rounded-lg hover:bg-green-600 transition-colors"
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
