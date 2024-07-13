import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { registerSchema } from "../../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Message } from "../../Components/ui/Message";

const SignUp = () => {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl text-white mb-6 text-center">Registrate</h2>
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="user"
            >
              Usuario
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline mb-4"
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            {errors.username?.message && (
              <p className="text-red-500">{errors.username?.message}</p>
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
              type="email"
              placeholder="Correo"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
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
              type="password"
              placeholder="Contraseña"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              confirmar password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline mb-4"
              type="password"
              placeholder="Contraseña"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
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
import logo from '../../../dist/assets/logo_ars.png'

const SingUp = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="bg-gradient-to-r-transparent border-2 border-[#0eff06] p-8 rounded-xl shadow-lg w-full max-w-sm">
          <img className='p-5' src={logo} alt="logo" />
          <h2 className="text-2xl text-white mb-6 text-center">Registrate</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              ></label>
              <input
                className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Correo"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold"
                htmlFor="password"
              ></label>
              <input
                className="w-full px-3 py-2 mb-4 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Contraseña"
              />
              <input
                className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Confirmar Contraseña"
              />
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 leading-tight"
              />
              <label htmlFor="rememberMe" className="text-gray-300 text-sm">
                Recordarme
              </label>
            </div>
            <div className="flex items-center justify-center mb-4">
              <button className="bg-transparent hover:bg-[#0FFF07] hover:text-black transition-colors duration-300 text-white border-2 border-white font-bold py-2 px-4 rounded-full w-full flex items-center justify-center gap-2">
                <img src="" alt="Google" className="w-6 h-6" />
                Registrarme con Google
              </button>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-gray-300 mx-2">o</span>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button className="bg-transparent hover:bg-[#0FFF07] hover:text-black transition-colors duration-300 text-white border-2 border-white font-bold py-2 px-4 rounded-full w-full flex items-center justify-center gap-2">
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
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-300">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-green-500">
              Inicia sesion
            </Link>
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
