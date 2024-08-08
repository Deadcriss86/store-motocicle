import { useForm } from "react-hook-form";
import axios from "axios";

const EditProductForm = ({ product, closeModal }) => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.put(
        `http://localhost:3000/api/products/${product.id}`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Product updated:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="border-2 border-[#0EFF06] rounded-lg p-3 bg-black text-lg">
      <h2 className="text-xl">Editar Producto</h2>
      <form
        className="mt-2"
        onSubmit={handleSubmit(handleFormSubmit)}
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="name">Nombre del producto:</label>
          <input
            className="input input-bordered w-full max-w-xs"
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
            className="input input-bordered w-full max-w-xs"
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
            className="input input-bordered w-full max-w-xs"
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
            className="textarea textarea-bordered ml-2"
            id="description"
            {...register("description", { required: true })}
            placeholder={product.description}
            rows="4"
            cols="50"
          />
        </div>
        <br />
        <div>
          <label htmlFor="image">Fotos del producto:</label>
          <input
            className="file-input file-input-bordered w-full max-w-xs ml-2"
            type="file"
            id="image"
            {...register("image")}
            accept="image/jpeg"
          />
        </div>
        <br />
        <button
          className="bg-[#0EFF06] rounded-lg p-2 text-black font-bold text-xl hover:bg-white"
          type="submit"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;
