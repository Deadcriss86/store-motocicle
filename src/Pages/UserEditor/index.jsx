import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Navlink } from "../../Components/Navbar_";
import { Footer } from "../../Components/footer";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ModalMessage } from "../../Components/pop-up"; // Asegúrate de importar el componente

const EditProfileForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await axios.put("http://localhost:3000/api/auth/update", data, {
        withCredentials: true,
      });
      setModalMessage("Perfil actualizado con éxito!");
      setShowModal(true);
      reset(); // Limpiar los campos del formulario
    } catch (error) {
      setModalMessage("Error al actualizar el perfil: " + error.message);
      setShowModal(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se verifica la autenticación
  }

  if (!isAuthenticated) {
    return <div>Please log in to edit your profile.</div>; // Mostrar mensaje si no está autenticado
  }

  return (
    <div>
      <Navlink />
      <div className="min-h-screen flex items-center justify-center pb-8 bg-gradient-to-t from-black to-[#085405cc]">
        <div className="bg-gray-500 bg-opacity-20 rounded-lg p-8">
          <div className="bg-black bg-opacity-75 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-center text-[#0eff06] text-xl font-bold mb-4">
              Editar perfil
            </h2>
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 flex">
                <input
                  type="text"
                  {...register("nombre")}
                  placeholder="Nombre"
                  className="bg-gray-800 text-white p-2 rounded-l w-1/2 mr-1 focus:outline-none"
                />
                <input
                  type="text"
                  {...register("apellidos")}
                  placeholder="Apellidos"
                  className="bg-gray-800 text-white p-2 rounded-r w-1/2 ml-1 focus:outline-none"
                />
              </div>
              <div className="mb-4 flex">
                <input
                  type="text"
                  {...register("nacionalidad")}
                  placeholder="Nacionalidad"
                  className="bg-gray-800 text-white p-2 rounded w-1/2 focus:outline-none"
                />
                <input
                  type="text"
                  {...register("movil")}
                  placeholder="Móvil"
                  className="bg-gray-800 text-white p-2 rounded-r w-full ml-1 focus:outline-none"
                />
              </div>
              <div className="mb-4 flex">
                <input
                  type="text"
                  {...register("cp")}
                  placeholder="CP"
                  className="bg-gray-800 text-white p-2 rounded-l w-1/3 mr-1 focus:outline-none"
                />
                <input
                  type="text"
                  {...register("calle")}
                  placeholder="Calle"
                  className="bg-gray-800 text-white p-2 rounded-r w-2/3 ml-1 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  {...register("delegacion")}
                  placeholder="Delegación"
                  className="bg-gray-800 text-white p-2 rounded w-full focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  {...register("referencias")}
                  placeholder="Referencias"
                  className="bg-gray-800 text-white p-2 rounded w-full focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0eff06] text-black p-2 rounded hover:bg-green-600 focus:outline-none"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal para mostrar mensajes */}
      {showModal && (
        <ModalMessage
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
      <Footer />
    </div>
  );
};

export default EditProfileForm;
