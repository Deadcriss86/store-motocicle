import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors = [] } = useAuth(); // Inicializar como array vacío
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl text-white mb-6 text-center">Registrate</h2>
        {registerErrors.length > 0 &&
          registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          ))}
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="user"
            >
              Usuario
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline mb-4"
              id="user"
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-red-500">Username is required</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline mb-4"
              id="email"
              type="email"
              placeholder="Correo"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline mb-4"
              id="password"
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
          </div>
          <div className="flex items-center justify-center mb-4">
            <button className="bg-black text-white font-bold py-2 px-4 rounded-full w-full flex items-center justify-center gap-2">
              <img
                src="ruta/a/tu/imagen/google.png"
                alt="Google"
                className="w-6 h-6"
              />
              Registrarme con Google
            </button>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-gray-300 mx-2">o</span>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Registro
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-300">
            ¿Aún no tienes cuenta?{" "}
            <a href="#" className="text-green-500">
              Regístrate
            </a>
          </p>
          <p className="text-gray-300 mt-2">
            <a href="#" className="text-green-500">
              Olvidé mi contraseña
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
