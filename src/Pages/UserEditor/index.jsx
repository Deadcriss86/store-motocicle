import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Navlink } from "../../Components/Navbar_";
import { Footer } from "../../Components/footer";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditProfileForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(
    "https://avatarmotoapi.s3.us-east-2.amazonaws.com/avatar1.jpg"
  ); // Avatar predeterminado
  const apiUrl = import.meta.env.VITE_APIBACK_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const data = response.data;

        const capitalizeFirstLetter = (string) =>
          string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

        setProfileData(data);
        setValue("nombre", capitalizeFirstLetter(data.nombre));
        setValue("apellido", capitalizeFirstLetter(data.apellido));
        setValue("nacionalidad", capitalizeFirstLetter(data.nacionalidad));
        setValue("celular", data.celular);
        setValue("cp", data.cp);
        setValue("ciudad", capitalizeFirstLetter(data.ciudad));
        setValue("calle", capitalizeFirstLetter(data.calle));
        setValue("delegacion", capitalizeFirstLetter(data.delegacion));
        setValue("referencias", capitalizeFirstLetter(data.referencias));
        setSelectedAvatar(data.avatar || selectedAvatar);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del perfil", error);
      });
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      await axios.put(
        `${apiUrl}/api/auth/update`,
        { ...data, avatar: selectedAvatar },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      Swal.fire({
        title: "Perfil actualizado",
        text: "¡Tu perfil ha sido actualizado con éxito!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#0eff06",
      });
      reset();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al actualizar tu perfil.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#E4080A",
      });
    }
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in to edit your profile.</div>;
  }

  return (
    <div className="bg-gradient-to-t from-black to-[#148710]">
      <Navlink />
      <br />
      <br />
      <br />
      <br />{" "}
      <h1 className="text-4xl font-bold text-center text-[#0eff06] py-2">
        Editar perfil
      </h1>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6">
          <div className="bg-black bg-opacity-75 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-center text-[#0eff06] text-xl mb-4">
              Selecciona tu avatar
            </h2>
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center">
                <img
                  src={selectedAvatar}
                  alt="Avatar seleccionado"
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img
                src="https://avatarmotoapi.s3.us-east-2.amazonaws.com/avatar1.jpg"
                alt="Avatar 1"
                className={`w-16 h-16 rounded-full mx-2 cursor-pointer ${
                  selectedAvatar ===
                  "https://avatarmotoapi.s3.us-east-2.amazonaws.com/avatar1.jpg"
                    ? "border-4 border-green-500"
                    : ""
                }`}
                onClick={() =>
                  handleAvatarSelect(
                    "https://avatarmotoapi.s3.us-east-2.amazonaws.com/avatar1.jpg"
                  )
                }
              />
              <img
                src="https://avatarmotoapi.s3.us-east-2.amazonaws.com/avatar2.jpg"
                alt="Avatar 2"
                className={`w-16 h-16 rounded-full mx-2 cursor-pointer ${
                  selectedAvatar ===
                  "https://avatarmotoapi.s3.us-east-2.amazonaws.com/avatar2.jpg"
                    ? "border-4 border-green-500"
                    : ""
                }`}
                onClick={() =>
                  handleAvatarSelect(
                    "https://avatarmotoapi.s3.us-east-2.amazonaws.com/avatar2.jpg"
                  )
                }
              />
              <img
                src="https://avatarmotoapi.s3.us-east-2.amazonaws.com/avatar3.jpg"
                alt="Avatar 3"
                className={`w-16 h-16 rounded-full mx-2 cursor-pointer ${
                  selectedAvatar ===
                  "https://avatarmotoapi.s3.us-east-2.amazonaws.com/avatar3.jpg"
                    ? "border-4 border-green-500"
                    : ""
                }`}
                onClick={() =>
                  handleAvatarSelect(
                    "https://avatarmotoapi.s3.us-east-2.amazonaws.com/avatar3.jpg"
                  )
                }
              />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 flex">
                <input
                  type="text"
                  {...register("nombre", {
                    required: "El nombre es obligatorio",
                  })}
                  placeholder={profileData?.nombre || "Nombre"}
                  className="bg-gray-800 text-white p-2 rounded-sm w-1/2 mr-1 focus:outline-none"
                />
                <input
                  type="text"
                  {...register("apellido", {
                    required: "Los apellidos son obligatorios",
                  })}
                  placeholder={profileData?.apellido || "Apellido"}
                  className="bg-gray-800 text-white p-2 rounded-sm w-1/2 ml-1 focus:outline-none"
                />
              </div>
              {errors.nombre && (
                <p className="text-red-500">{errors.nombre.message}</p>
              )}
              {errors.apellido && (
                <p className="text-red-500">{errors.apellido.message}</p>
              )}
              <div className="mb-4 flex">
                <input
                  type="text"
                  {...register("nacionalidad", {
                    required: "La nacionalidad es obligatoria",
                  })}
                  placeholder={profileData?.nacionalidad || "Nacionalidad"}
                  className="bg-gray-800 text-white p-2 rounded-sm w-1/2 focus:outline-none"
                />
                <input
                  type="text"
                  {...register("celular", {
                    required: "El móvil es obligatorio",
                  })}
                  placeholder={profileData?.celular || "Móvil"}
                  className="bg-gray-800 text-white p-2 rounded-sm w-full ml-1 focus:outline-none"
                />
              </div>
              {errors.nacionalidad && (
                <p className="text-red-500">{errors.nacionalidad.message}</p>
              )}
              {errors.celular && (
                <p className="text-red-500">{errors.celular.message}</p>
              )}
              <div className="mb-4 flex">
                <input
                  type="text"
                  {...register("cp", {
                    required: "El código postal es obligatorio",
                  })}
                  placeholder={profileData?.cp || "CP"}
                  className="bg-gray-800 text-white p-2 rounded-sm w-1/3 mr-1 focus:outline-none"
                />
                <input
                  type="text"
                  {...register("calle", {
                    required: "La calle es obligatoria",
                  })}
                  placeholder={profileData?.calle || "Calle"}
                  className="bg-gray-800 text-white p-2 rounded-sm w-2/3 ml-1 focus:outline-none"
                />
              </div>
              {errors.cp && <p className="text-red-500">{errors.cp.message}</p>}
              {errors.calle && (
                <p className="text-red-500">{errors.calle.message}</p>
              )}
              <div className="mb-4 flex flex-row">
                <input
                  type="text"
                  {...register("delegacion", {
                    required: "La delegación es obligatoria",
                  })}
                  placeholder={profileData?.delegacion || "Delegación"}
                  className="bg-gray-800 text-white p-2 rounded-sm w-full focus:outline-none mx-1"
                />
                <input
                  type="text"
                  {...register("ciudad", {
                    required: "La ciudad es obligatoria",
                  })}
                  placeholder={profileData?.ciudad || "Ciudad"}
                  className="bg-gray-800 text-white p-2 rounded-sm w-full focus:outline-none mx-1"
                />
              </div>
              {errors.delegacion && (
                <p className="text-red-500">{errors.delegacion.message}</p>
              )}
              {errors.ciudad && (
                <p className="text-red-500">{errors.ciudad.message}</p>
              )}
              <div className="mb-4">
                <textarea
                  {...register("referencias")}
                  placeholder={profileData?.referencias || "Referencias"}
                  className="bg-gray-800 text-white p-2 rounded-sm w-full focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#148710] to-black hover:from-black hover:to-[#148710] text-white py-2 px-4 rounded-sm focus:outline-none"
              >
                Actualizar perfil
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
