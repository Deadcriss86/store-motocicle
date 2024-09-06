import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import axios from "axios";

const FormService = () => {
  const apiUrl = import.meta.env.VITE_APIBACK_URL;
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    select: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${apiUrl}/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userProfile = response.data;
        setUser(userProfile);
        const fullname = userProfile.nombre + " " + userProfile.apellido;
        setFormData({
          nombre: fullname || "",
          email: userProfile.email || "",
          telefono: userProfile.celular || "",
          select: "",
        });
      })
      .catch((error) => {
        console.error("Error al obtener el perfil:", error);
      });
  }, [apiUrl]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!formData.email) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Debe ser un correo electrónico válido.";
    }

    if (!formData.telefono) {
      newErrors.telefono = "El teléfono es obligatorio.";
    }

    if (!formData.select) {
      newErrors.select = "Debe seleccionar una opción.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const refForm = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await emailjs.sendForm(
          "service_e46mezl",
          "template_p61qp9f",
          refForm.current,
          "OZ3hx585btyjsk5Bq"
        );

        swal({
          title: "Enviado!",
          text: "Su mensaje fue enviado con éxito.",
          icon: "success",
          button: "Ok",
        });

        setFormSubmitted(true);
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          select: "",
        });

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } catch (error) {
        swal({
          title: "Error",
          text: "Hubo un error al enviar el mensaje.",
          icon: "error",
          button: "Ok",
        });
      }
    }
  };

  return (
    <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8">
      <div className="bg-black bg-opacity-75 rounded-lg p-6 w-full max-w-md">
        <form
          ref={refForm}
          onSubmit={handleSubmit}
          className="text-center max-w-md mx-auto p-4 bg-transparent rounded-md"
        >
          <p className="text-center text-[#0eff06] text-xl mb-4">Contáctanos</p>
          <fieldset className="mb-4">
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="bg-gray-800 text-white p-2 rounded-lg w-full"
              placeholder="Nombre"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
            )}
          </fieldset>
          <fieldset className="mb-4">
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 text-white p-2 rounded-lg w-full"
              placeholder="E-mail"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </fieldset>
          <fieldset className="mb-4">
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="bg-gray-800 text-white p-2 rounded-lg w-full"
              placeholder="Teléfono"
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
            )}
          </fieldset>
          <fieldset className="mb-4">
            <select
              id="select"
              name="select"
              value={formData.select}
              onChange={handleChange}
              className="bg-gray-800 text-white p-2 rounded-lg w-full"
            >
              <option value="">Seleccione una opción</option>
              <option value="Problemas con mi pago">
                Problemas con mi pago
              </option>
              <option value="No me llego mi pedido">
                No me llego mi pedido
              </option>
              <option value="Problemas con mi instalación">
                Problemas con mi instalación
              </option>
              <option value="Problemas con el envío">
                Problemas con el envío
              </option>
            </select>
            {errors.select && (
              <p className="text-red-500 text-sm mt-1">{errors.select}</p>
            )}
          </fieldset>
          <button
            type="submit"
            className="bg-[#0eff06] w-full text-black font-bold px-4 py-2 rounded-xl mb-4"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormService;
