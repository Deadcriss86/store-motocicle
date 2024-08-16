import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ModalMessage } from "../Components/pop-up";

export const ProductForm = ({ product, onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (product) {
      setValue("name", product.productName);
      setValue("price", product.price);
      setValue("stock", product.stock);
      setValue("description", product.description);
      setValue("category", product.category);
      setValue("subcategory", product.subcategory);
    }
  }, [product, setValue]);

  const handleFormSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("subcategory", data.subcategory);
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      await onSubmit(formData, product ? product._id : undefined);
      setModalMessage("Subido con éxito!");
      setShowModal(true);
    } catch (error) {
      setModalMessage("Error al subir");
      setShowModal(true);
    }
  };

  return (
    <div className="border-2 border-[#0EFF06] rounded-lg p-3 bg-black text-lg">
      <h2 className="text-center text-[#0eff06] text-xl font-bold mb-4">
        Nuevo Producto
      </h2>
      <form
        className="mt-2 px-4"
        onSubmit={handleSubmit(handleFormSubmit)}
        encType="multipart/form-data"
      >
        {/* Los campos del formulario */}
        <div>
          <input
            placeholder="Nombre del producto"
            className="bg-gray-800 text-white p-2 rounded-lg w-full ml-1 focus:outline-none"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <br />

        <div>
          <input
            placeholder="Precio"
            className="bg-gray-800 text-white p-2 rounded-lg w-full ml-1 focus:outline-none"
            type="number"
            id="price"
            {...register("price")}
            step="0.01"
          />
        </div>
        <br />

        <div>
          <input
            placeholder="Stock"
            className="bg-gray-800 text-white p-2 rounded-lg w-full ml-1 focus:outline-none"
            type="number"
            id="stock"
            {...register("stock")}
          />
        </div>
        <br />

        <div>
          <textarea
            className="textarea ml-1 w-full bg-gray-800 text-white p-2 focus:outline-none rounded-lg"
            placeholder="Descripción del producto"
            id="description"
            {...register("description")}
            rows="4"
            cols="50"
          />
        </div>
        <br />

        <div>
          <select className="bg-gray-800 text-white p-2 rounded-lg w-full ml-1 focus:outline-none">
            <option disabled selected>
              Categoria
            </option>
            <option>Protector de faro</option>
            <option>Slider superior</option>
            <option>Slider trasero</option>
            <option>Porta alforja</option>
            <option>Parrilla de carga</option>
          </select>
        </div>
        <br />

        <div>
          <select className="bg-gray-800 text-white p-2 rounded-lg w-full ml-1 focus:outline-none">
            <option disabled selected>
              Subcategoria
            </option>
            <option>Vento</option>
            <option>Dinamo</option>
            <option>Hero motos</option>
            <option>Veloci</option>
            <option>Italika</option>
            <option>Yamaha</option>
            <option>MB motor</option>
            <option>Universal</option>
          </select>
        </div>
        <br />

        <div className="text-white">
          <label htmlFor="image">Cargar fotos:</label>
          <input
            className="file-input-primary w-full max-w-xs ml-2 bg-gray-800 text-white"
            type="file"
            id="image"
            {...register("image")}
            accept="image/jpeg"
          />
        </div>
        <br />

        <button
          className="bg-[#0EFF06] rounded-lg p-2 text-black font-bold text-xl hover:bg-white w-full"
          type="submit"
        >
          Agregar Producto
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
