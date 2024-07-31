import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navlink } from "../../Components/Navbar_";
import { Footer } from "../../Components/footer";

const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    nacionalidad: "",
    movil: "",
    cp: "",
    calle: "",
    delegacion: "",
    referencias: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    if (!token) {
      console.error("No token found in cookies");
      return;
    }
    try {
      const response = await axios.put(
        "http://localhost:3000/api/auth/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      <div>
        <Navlink />
      </div>
      <div className="min-h-screen flex items-end justify-center pb-8 bg-gradient-to-t from-black to-[#085405cc]">
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
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="bg-gray-800 text-white p-2 rounded-l w-1/2 mr-1 focus:outline-none"
                />
                <input
                  type="text"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  placeholder="Apellidos"
                  className="bg-gray-800 text-white p-2 rounded-r w-1/2 ml-1 focus:outline-none"
                />
              </div>
              <div className="mb-4 flex">
                <input
                  type="text"
                  name="nacionalidad"
                  value={formData.nacionalidad}
                  onChange={handleChange}
                  placeholder="Nacionalidad"
                  className="bg-gray-800 text-white p-2 rounded w-1/2 focus:outline-none"
                />
                <input
                  type="text"
                  name="movil"
                  value={formData.movil}
                  onChange={handleChange}
                  placeholder="Móvil"
                  className="bg-gray-800 text-white p-2 rounded-r w-full ml-1 focus:outline-none"
                />
              </div>

              <div className="mb-4 flex">
                <input
                  type="text"
                  name="cp"
                  value={formData.cp}
                  onChange={handleChange}
                  placeholder="CP"
                  className="bg-gray-800 text-white p-2 rounded-l w-1/3 mr-1 focus:outline-none"
                />
                <input
                  type="text"
                  name="calle"
                  value={formData.calle}
                  onChange={handleChange}
                  placeholder="Calle"
                  className="bg-gray-800 text-white p-2 rounded-r w-2/3 ml-1 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="delegacion"
                  value={formData.delegacion}
                  onChange={handleChange}
                  placeholder="Delegación"
                  className="bg-gray-800 text-white p-2 rounded w-full focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="referencias"
                  value={formData.referencias}
                  onChange={handleChange}
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
      <Footer />
    </div>
  );
};

export default EditProfileForm;
