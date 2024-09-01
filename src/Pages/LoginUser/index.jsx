import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/auth";
import { Message } from "../../Components/ui/Message";
import logo from "../../../dist/assets/logo_ars.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gradient-to-r-transparent border-2 border-[#0eff06] p-8 rounded-xl shadow-lg w-full max-w-sm">
        <img className="p-5" src={logo} alt="logo" />
        <h2 className="text-2xl text-white mb-6 text-center">Inicia sesión</h2>
        {loginErrors &&
          loginErrors.map((error, i) => <Message message={error} key={i} />)}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Correo"
              {...register("email", { required: true })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && <p>{errors.password.message}</p>}
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
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="group inline-flex min-w-0 items-center gap-2 rounded-lg bg-[#0eff06] px-6 py-3 text-sm font-semibold text-black transition-all hover:shadow-lg hover:shadow-[#0eff06]-500/60 active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Iniciar sesión
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 w-0 transition-all group-hover:w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-300">
            ¿Aún no tienes cuenta?{" "}
            <Link to="/signup" className="text-green-500">
              Regístrate
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

export default Login;
