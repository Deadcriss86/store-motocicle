import { useState } from "react";
import EditProductForm from "./Edit_product_form";
import Swal from "sweetalert2";
import axios from "axios";

const Admin_products = ({
  id,
  productName,
  price,
  stock,
  description,
  images,
  onDelete,
  questions,
}) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [showQuestionsModal, setShowQuestionsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const apiUrl = import.meta.env.VITE_APIBACK_URL;

  const handleEdit = () => {
    setEditingProduct({
      id,
      productName,
      price,
      stock,
      description,
      questions,
    });
    setShowEditModal(true);
  };

  const handleDelete = async (productId) => {
    // Eliminación de producto
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const mobileProductName = truncateText(productName, 15); // Truncar el nombre del producto en mobile

  return (
    <div className="p-4 flex flex-col lg:flex-row lg:justify-between mb-3 rounded-lg">
      <table className="table w-full text-white bg-black opacity-75 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-black uppercase text-sm text-center">
          <tr>
            <th className="p-4 text-left hidden lg:table-cell">Producto</th>
            <th className="p-4 text-center hidden lg:table-cell">Stock</th>
            <th className="p-4 text-center lg:hidden">
              {mobileProductName}
            </th>{" "}
            {/* Mostrar productName truncado en mobile */}
            <th className="p-4 text-center hidden lg:table-cell">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-4 hidden lg:table-cell">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12 bg-white">
                    <img src={images} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">
                    {truncateText(productName, 20)}
                  </div>
                  <div className="text-white">
                    Precio: $
                    {price.toLocaleString("es-MX", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </div>
            </td>
            <td className="p-4 text-center font-bold hidden lg:table-cell">
              {stock}
            </td>
            <td className="p-4 text-center">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  className="bg-[#0eff06] w-auto text-black font-bold px-2 py-2 rounded-xl hover:text-white hover:bg-gradient-to-r from-[#06ff6e] to-[#0eff06]"
                  onClick={() => setShowQuestionsModal(true)}
                >
                  Ver preguntas
                </button>
                <button
                  className="bg-[#0eff06] w-auto text-black font-bold px-4 py-2 rounded-xl mb-4 hover:text-white hover:bg-gradient-to-r from-[#06ff6e] to-[#0eff06]"
                  onClick={handleEdit}
                >
                  Editar
                </button>
                <button
                  className="bg-[#0eff06] w-auto text-black font-bold px-4 py-2 rounded-xl mb-4 hover:text-white hover:bg-gradient-to-r from-[#ff8b06] to-[#ff4006]"
                  onClick={() => handleDelete(id)}
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Modal para preguntas */}
      {showQuestionsModal && (
        <dialog
          open
          className="modal bg-[#000000c7] fixed inset-0 flex justify-center items-center z-50"
        >
          <div className="modal-action p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Preguntas</h2>
            <p>{questions}</p>
            <button
              className="btn border-2 border-[#0EFF06] rounded-lg p-3 mt-4 text-black"
              onClick={() => setShowQuestionsModal(false)}
            >
              Cerrar
            </button>
          </div>
        </dialog>
      )}

      {/* Modal para edición */}
      {showEditModal && editingProduct && (
        <dialog
          open
          className="modal bg-[#000000c7] fixed inset-0 flex justify-center items-center z-50"
        >
          <div className="modal-action p-4 bg-transparent rounded-lg shadow-lg">
            <EditProductForm
              product={editingProduct}
              closeModal={() => setShowEditModal(false)}
            />
            <button
              className="btn border-2 border-[#0EFF06] rounded-lg p-3 mt-4 text-black"
              onClick={() => setShowEditModal(false)}
            >
              Cancelar
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Admin_products;
