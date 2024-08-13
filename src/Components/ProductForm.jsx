import { useForm } from "react-hook-form";
import axios from "axios";

export const ProductForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("subcategory", data.subcategory);
    formData.append("image", data.image[0]);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/newproduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setResponseMessage("ok");
    } catch (error) {
      console.error("Error al subir el producto:", error);
      setResponseMessage("error");
    }
  };

  return (
    <div className="border-2 border-[#0EFF06] rounded-lg p-3 bg-black text-lg">
      <h2 className="text-center text-[#0eff06] text-xl font-bold mb-4">
        Nuevo Producto
      </h2>
      <form
        className="mt-2 px-4"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div>
          <input
            placeholder="Nombre del producto"
            className="bg-gray-800 text-white p-2 rounded-r w-full ml-1 focus:outline-none"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <br />

        <div>
          <input
            placeholder="Precio"
            className="bg-gray-800 text-white p-2 rounded-r w-full ml-1 focus:outline-none"
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
            className="bg-gray-800 text-white p-2 rounded-r w-full ml-1 focus:outline-none"
            type="number"
            id="stock"
            {...register("stock")}
          />
        </div>
        <br />

        <div>
          <textarea
            className="textarea ml-1 w-full bg-gray-800 text-white p-2 rounded-r focus:outline-none"
            placeholder="Descripción del producto"
            id="description"
            {...register("description")}
            rows="4"
            cols="50"
          />
        </div>
        <br />

        <div>
          <input
            placeholder="Categoria"
            className="bg-gray-800 text-white p-2 rounded-r w-full ml-1 focus:outline-none"
            type="text"
            id="category"
            {...register("category")}
          />
        </div>
        <br />

        <div>
          <input
            placeholder="Subcategoria"
            className="bg-gray-800 text-white p-2 rounded-r w-full ml-1 focus:outline-none"
            type="text"
            id="subcategory"
            {...register("subcategory")}
          />
        </div>
        <br />

        <div>
          <label htmlFor="image">Cargar fotos:</label>
          <input
            className="file-input w-full max-w-xs ml-2 bg-gray-800 text-white"
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
      </form>
    </div>
  );
};
