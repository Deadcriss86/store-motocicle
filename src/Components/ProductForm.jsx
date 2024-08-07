import { useForm } from "react-hook-form";
import axios from "axios";

export const ProductForm = (setResponseMessage) => {
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
      <h2 className="text-xl">Nuevo Producto</h2>
      <form
        className="mt-2"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="name">Nombre del producto:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <br />

        <div>
          <label htmlFor="price">Precio:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="number"
            id="price"
            {...register("price")}
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
            {...register("stock")}
          />
        </div>
        <br />

        <div>
          <label htmlFor="description">Descripción del producto:</label>
          <textarea
            className="textarea textarea-bordered ml-2"
            placeholder="Descripción del producto"
            id="description"
            {...register("description")}
            rows="4"
            cols="50"
          />
        </div>
        <br />

        <div>
          <label htmlFor="category">Categoría:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="category"
            {...register("category")}
          />
        </div>
        <br />

        <div>
          <label htmlFor="subcategory">Subcategoría:</label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="subcategory"
            {...register("subcategory")}
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
          Agregar Producto
        </button>
      </form>
    </div>
  );
};
