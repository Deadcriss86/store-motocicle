import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { registerSchema } from "../../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Message } from "../../Components/ui/Message";
import logo from "../../../dist/assets/logo_ars.png";

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

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gradient-to-r-transparent border-2 border-[#0eff06] p-8 rounded-xl shadow-lg w-full max-w-sm">
        <img className="p-5" src={logo} alt="logo" />
        <h2 className="text-2xl text-white mb-6 text-center">Regístrate</h2>
        {registerErrors &&
          registerErrors.map((error, i) => <Message message={error} key={i} />)}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="username"
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
              htmlFor="confirmPassword"
            >
              Confirmar Contraseña
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline mb-4"
              type="password"
              placeholder="Confirmar Contraseña"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="terms"
              className="mr-2 leading-tight"
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="text-gray-300 text-sm">
              Acepto los{" "}
              <button
                type="button"
                className="text-green-500 underline"
                onClick={() => setShowTermsModal(true)}
              >
                términos y condiciones
              </button>
            </label>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="group inline-flex min-w-0 items-center gap-2 rounded-lg bg-[#0eff06] px-6 py-3 text-sm font-semibold text-black transition-all hover:shadow-lg hover:shadow-[#0eff06]-500/60 active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              disabled={!termsAccepted}
            >
              Registro
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
          <p className="text-gray-300 mt-2">
            <a href="#" className="text-green-500">
              Olvidé mi contraseña
            </a>
          </p>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-300">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-green-500">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>

      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">Términos y Condiciones</h3>
            <p className="text-gray-700 mb-4 text-justify">
              <strong> 1. Generalidades</strong> <br />
              Bienvenido a ARS Racing, una tienda en línea dedicada a la venta
              de accesorios y sliders personalizados para motocicletas. Al
              acceder y utilizar nuestra página web, usted acepta y se
              compromete a cumplir con los siguientes Términos y Condiciones. Si
              no está de acuerdo con alguna parte de estos términos, no debe
              utilizar nuestro sitio. <br />
              <strong>2. Registro de Usuarios</strong>
              <br />
              Para realizar compras en nuestro sitio web, los usuarios deben
              crear una cuenta proporcionando información personal precisa y
              actualizada. Al registrarse, usted se compromete a: Proporcionar
              información veraz, precisa, actual y completa. Mantener y
              actualizar la información de su cuenta para que sea siempre
              precisa y actual. Proteger la confidencialidad de su cuenta,
              contraseña e información de inicio de sesión. El usuario es
              responsable de todas las actividades que ocurran en su cuenta. ARS
              Racing no se hace responsable de ningún uso no autorizado de su
              cuenta.
              <br /> <strong>3. Uso de Información Personal</strong>
              <br /> En el proceso de registro y compra, recopilamos información
              personal, que puede incluir, pero no se limita a:
              <br />- Nombre completo Dirección de correo electrónico
              <br />- Número de teléfono
              <br />- Dirección de envío
              <br />
              - Información de pago (tarjetas de crédito, cuentas de PayPal,
              etc.)
              <br />
              Esta información es utilizada exclusivamente para procesar y
              completar sus pedidos, así como para comunicarnos con usted sobre
              su cuenta o compras.
              <br /> <strong> 4. Pagos y Seguridad</strong>
              <br /> ARS Racing toma la seguridad de sus transacciones en línea
              muy en serio. Ofrecemos opciones de pago seguras a través de
              proveedores de servicios de pago externos certificados. Al hacer
              un pedido, acepta que podemos almacenar y procesar su información
              de pago en cumplimiento con las normativas aplicables de seguridad
              de datos. Toda la información confidencial relacionada con los
              pagos, incluidas las tarjetas de crédito o débito, es tratada de
              manera segura a través de la tecnología de encriptación estándar
              en la industria. Sin embargo, ARS Racing no se responsabiliza por
              daños o pérdidas causadas por el uso no autorizado de su
              información financiera.
              <br /> <strong>5. Política de Devoluciones y Reembolsos</strong>
              <br /> Dado que la mayoría de nuestros productos son
              personalizados y hechos a medida, no ofrecemos devoluciones a
              menos que el producto recibido sea defectuoso o no corresponda con
              el pedido realizado. Para iniciar una solicitud de reembolso o
              cambio, el cliente debe contactarnos dentro de los primeros 7 días
              hábiles desde la recepción del pedido.
              <br />
              <strong>6. Propiedad Intelectual</strong>
              <br /> Todo el contenido de este sitio web, incluyendo pero no
              limitado a imágenes, gráficos, textos y logotipos, es propiedad de
              ARS Racing y está protegido por las leyes de propiedad intelectual
              vigentes.
              <br /> No está permitido reproducir, distribuir, modificar o
              utilizar el contenido sin nuestro consentimiento expreso por
              escrito.
              <br />{" "}
              <strong>7. Modificaciones de los Términos y Condiciones</strong>
              <br /> ARS Racing se reserva el derecho de modificar estos
              Términos y Condiciones en cualquier momento.
              <br /> Las actualizaciones serán publicadas en esta página y
              entrarán en vigor inmediatamente. Se recomienda revisar esta
              página periódicamente para estar informado de los cambios.
              <br /> <strong>8. Contacto</strong>
              <br /> Si tiene alguna pregunta sobre estos Términos y
              Condiciones, puede contactarnos a través de:
              <br /> Correo electrónico: <strong>correo@empresa.com</strong>
              <br /> Teléfono: <strong> 5610544410</strong>
            </p>
            <button
              className="bg-[#0eff06] w-full text-black font-bold px-4 py-2 rounded-xl mb-4 hover:text-white hover:bg-gradient-to-r from-[#06ff6e] to-[#0eff06]"
              onClick={() => setShowTermsModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
