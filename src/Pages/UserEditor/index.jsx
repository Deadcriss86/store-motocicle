import React from "react";
import { Navlink } from "../../Components/Navbar_";
import { Footer } from "../../Components/footer";

const EditProfileForm = () => {
  return (
    <div>
      <div>
        <Navlink />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-green-900">
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
            <form>
              <div className="mb-4 flex">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="bg-gray-800 text-white p-2 rounded-l w-1/2 mr-1 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Apellidos"
                  className="bg-gray-800 text-white p-2 rounded-r w-1/2 ml-1 focus:outline-none"
                />
              </div>
              <div className="mb-4 flex">
                <input
                  type="text"
                  placeholder="+52"
                  className="bg-gray-800 text-white p-2 rounded-l w-1/3 mr-1 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Móvil"
                  className="bg-gray-800 text-white p-2 rounded-r w-2/3 ml-1 focus:outline-none"
                />
              </div>
              <div className="mb-4 flex">
                <input
                  type="text"
                  placeholder="CP"
                  className="bg-gray-800 text-white p-2 rounded-l w-1/3 mr-1 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Calle"
                  className="bg-gray-800 text-white p-2 rounded-r w-2/3 ml-1 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Delegación"
                  className="bg-gray-800 text-white p-2 rounded w-full focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
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
