import { useForm } from "react-hook-form";
import axios from "axios";

export const Resenasforms = ({ id, closeModal, setResponseMessage }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    if (!data.rating) {
      data.rating = 5;
    }

    try {
      const response = await axios.post(
        `http://localhost:3000/api/products/${id}/reviews`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      reset();
      setResponseMessage("Reseña agregada!");
      closeModal();
    } catch (error) {
      console.error("Error al agregar la reseña:", error);
    }
  };

  return (
    <div className="border-2 border-[#0EFF06] rounded-lg p-3 bg-gray-800 text-lg">
      <h2 className="text-xl">Nueva Reseña</h2>
      <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="opinion">Opinión:</label>
          <textarea
            className="textarea textarea-bordered ml-2"
            placeholder="Escribe tu opinión aquí"
            id="opinion"
            {...register("opinion")}
            rows="4"
            cols="50"
          />
        </div>
        <br />

        <div>
          <label htmlFor="rating">Calificación:</label>
          <div className="rating gap-1">
            <input
              type="radio"
              id="rating-1"
              value="1"
              {...register("rating")}
              className="mask mask-heart bg-green-400"
            />
            <input
              type="radio"
              id="rating-2"
              value="2"
              {...register("rating")}
              className="mask mask-heart bg-lime-400"
            />
            <input
              type="radio"
              id="rating-3"
              value="3"
              {...register("rating")}
              className="mask mask-heart bg-yellow-400"
            />
            <input
              type="radio"
              id="rating-4"
              value="4"
              {...register("rating")}
              className="mask mask-heart bg-orange-400"
            />
            <input
              type="radio"
              id="rating-5"
              value="5"
              {...register("rating")}
              className="mask mask-heart bg-red-400"
              defaultChecked
            />
          </div>
        </div>
        <br />

        <button
          className="bg-[#0EFF06] rounded-lg p-2 text-black font-bold text-xl hover:bg-white"
          type="submit"
        >
          Agregar Reseña
        </button>
      </form>
    </div>
  );
};
