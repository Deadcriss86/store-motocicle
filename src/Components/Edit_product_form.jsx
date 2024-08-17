import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ModalMessage } from "../Components/pop-up";

const EditProductForm = ({ product, closeModal }) => {
  const { register, handleSubmit } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleFormSubmit = async (data) => {
    console.log(data);
    try {
      await axios.put(
        `http://localhost:3000/api/products/${product.id}`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setModalMessage("Product updated!");
      setShowModal(true);

      // Recarga la página después de un breve retraso para que el usuario vea el mensaje
      setTimeout(() => {
        window.location.reload();
      }, 1000); // Puedes ajustar el tiempo según lo que necesites
    } catch (error) {
      setModalMessage("Error updating product");
      setShowModal(true);
    }
  };

  return (
    <div className="border-2 border-[#0EFF06] rounded-lg p-3 bg-black text-lg ">
      <h2 className="text-center text-[#0eff06] text-xl font-bold mb-4">
        Editar Producto
      </h2>
      <form
        className="mt-2 px-4"
        onSubmit={handleSubmit(handleFormSubmit)}
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="name">Nombre del producto:</label>
          <input
            className="bg-gray-800 text-white p-2 rounded-lg w-full ml-1 focus:outline-none"
            type="text"
            id="name"
            {...register("name", { required: true })}
            placeholder={product.name}
          />
        </div>
        <br />
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            className="bg-gray-800 text-white p-2 rounded-lg w-full ml-1 focus:outline-none"
            type="number"
            id="price"
            {...register("price", { required: true })}
            placeholder={product.price}
            step="0.01"
          />
        </div>
        <br />
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            className="bg-gray-800 text-white p-2 rounded-lg w-full ml-1 focus:outline-none"
            type="number"
            id="stock"
            {...register("stock", { required: true })}
            placeholder={product.stock}
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">Descripción del producto:</label>
          <textarea
            className="textarea ml-1 w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none"
            id="description"
            {...register("description", { required: true })}
            placeholder={product.description}
            rows="4"
            cols="50"
          />
        </div>
        <br />

        <br />
        <button
          className="bg-[#0EFF06] rounded-lg p-2 text-black font-bold text-xl hover:bg-white w-full"
          type="submit"
        >
          Guardar cambios
        </button>
        {showModal && (
          <ModalMessage
            message={modalMessage}
            onClose={() => setShowModal(false)}
          />
        )}
      </form>
    </div>
  );
};

export default EditProductForm;
