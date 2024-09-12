import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "postcss";

export const Footer = () => {
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <footer>
      <div className="relative flex flex-col lg:flex-row justify-around items-center text-black px-4 md:px-10 bg-black my-4">
        {/* Tarjeta de pagos */}
        <div className="border-2 border-[#0eff06] rounded-lg w-full max-w-xs md:max-w-sm lg:w-80 h-48 bg-white text-justify card-compact mb-4 lg:mb-0">
          <h3 className="border-b-2 border-[#0eff06] text-center font-bold p-2">
            Pagos a crédito o débito
          </h3>
          <p className="flex flex-row justify-items-center mt-2 mr-4">
            <img
              className="w-20 h-10 mt-6 mr-2"
              src="https://avatarmotoapi.s3.us-east-2.amazonaws.com/Assets/cardcredit.png"
            />
            Con Mercado Pago, tienes pagos con tarjetas de débito y meses sin
            intereses con tarjeta de crédito. ¡Y siempre es seguro!
          </p>
        </div>

        {/* Tarjeta de compras protegidas */}
        <div className="border-2 border-[#0eff06] rounded-lg w-full max-w-xs md:max-w-sm lg:w-80 h-48 bg-white text-justify card-compact mb-4 lg:mb-0">
          <h3 className="border-b-2 border-[#0eff06] text-center font-bold p-2">
            Compras protegidas
          </h3>
          <p className="flex flex-row justify-items-center mt-2 mr-4">
            <img
              className="w-20 h-16 mt-4 mr-2"
              src="https://avatarmotoapi.s3.us-east-2.amazonaws.com/Assets/locked.webp"
            />
            Te acompañaremos hasta que recibas lo que compraste. Y si no es lo
            que esperabas, te devolvemos el dinero.
          </p>
        </div>
        {/* Tarjeta de envíos seguros */}
        <div className="border-2 border-[#0eff06] rounded-lg w-full max-w-xs md:max-w-sm lg:w-80 h-48 bg-white text-justify card-compact">
          <h3 className="border-b-2 border-[#0eff06] text-center font-bold p-2">
            Envíos seguros
          </h3>
          <p className="flex flex-row justify-items-center mt-2 mr-4">
            <img
              className="w-20 h-20 mt-2 mr-2"
              src="https://avatarmotoapi.s3.us-east-2.amazonaws.com/Assets/truck1.jpg"
            />
            Elige Mercado Envíos y sigue tu compra hasta que llegue a tus manos.
            Tienes envíos gratis en productos seleccionados.
          </p>
        </div>
      </div>

      <div className="w-full bg-black text-sm text-white flex flex-col md:flex-row justify-between items-start p-6">
        <div className="w-full flex flex-col md:flex-row justify-between md:gap-20 p-3 border-t-2 border-[#0eff06]">
          <div className="flex items-center border-b-2 md:border-b-0 md:border-r-2 border-[#0eff06] p-3 md:p-9 h-full">
            <h1 className="font-playfair text-4xl md:text-7xl text-white">
              ARS
            </h1>
          </div>
          <div className="flex flex-col gap-2 p-3 md:p-0">
            <h6 className="footer-title text-base">CONTACTO</h6>
            <div className="flex flex-col gap-1">
              <a className="link link-hover flex items-start gap-2">
                <SlLocationPin size="1.5rem" className="text-[#0eff06] mt-1" />
                DIRECCIÓN
                <br />
                Calle cerrada camino canteras No.9
                <br />
                Santiago Tecalpatlalpan, Xochimilco CDMX
              </a>
              <a className="link link-hover flex items-start gap-2">
                <CiMail size="1.5rem" className="text-[#0eff06] mt-1" />
                CORREO
                <br />
                motoarsbussines@gmail.com
              </a>
              <a className="link link-hover flex items-start gap-2">
                <FiPhone size="1.5rem" className="text-[#0eff06] mt-1" /> Móvil
                <br />
                +52 5564646565
              </a>{" "}
            </div>{" "}
            <button
              type="button"
              className="text-[#0eff06] underline p-2"
              onClick={() => setShowTermsModal(true)}
            >
              Términos y condiciones
            </button>{" "}
          </div>
          <div className="flex gap-4 p-4 border-t-2 md:border-t-0 md:border-l-2 border-[#0eff06] flex-col">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-[#0eff06] link link-hover hover:animate-bounce"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-[#0eff06] link link-hover hover:animate-bounce"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-[#0eff06] link link-hover hover:animate-bounce"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <img
              className="w-auto h-20 xs:1/3 "
              src="https://avatarmotoapi.s3.us-east-2.amazonaws.com/Assets/powered-by-stripe.png"
            />
          </div>
          {showTermsModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
                <h3 className="text-lg font-bold mb-4 text-black">
                  Términos y condiciones de uso del Sitio
                </h3>
                <p className="text-gray-700 mb-4 text-justify">
                  <strong> 1. Generalidades</strong> <br />
                  Bienvenido a ARS Racing, una tienda en línea dedicada a la
                  venta de accesorios y sliders personalizados para
                  motocicletas. Al acceder y utilizar nuestra página web, usted
                  acepta y se compromete a cumplir con los siguientes Términos y
                  Condiciones. Si no está de acuerdo con alguna parte de estos
                  términos, no debe utilizar nuestro sitio. <br />
                  <strong>2. Registro de Usuarios</strong>
                  <br />
                  Para realizar compras en nuestro sitio web, los usuarios deben
                  crear una cuenta proporcionando información personal precisa y
                  actualizada. Al registrarse, usted se compromete a:
                  Proporcionar información veraz, precisa, actual y completa.
                  Mantener y actualizar la información de su cuenta para que sea
                  siempre precisa y actual. Proteger la confidencialidad de su
                  cuenta, contraseña e información de inicio de sesión. El
                  usuario es responsable de todas las actividades que ocurran en
                  su cuenta. ARS Racing no se hace responsable de ningún uso no
                  autorizado de su cuenta.
                  <br /> <strong>3. Uso de Información Personal</strong>
                  <br /> En el proceso de registro y compra, recopilamos
                  información personal, que puede incluir, pero no se limita a:
                  <br />- Nombre completo Dirección de correo electrónico
                  <br />- Número de teléfono
                  <br />- Dirección de envío
                  <br />
                  - Información de pago (tarjetas de crédito, cuentas de PayPal,
                  etc.)
                  <br />
                  Esta información es utilizada exclusivamente para procesar y
                  completar sus pedidos, así como para comunicarnos con usted
                  sobre su cuenta o compras.
                  <br /> <strong> 4. Pagos y Seguridad</strong>
                  <br /> ARS Racing toma la seguridad de sus transacciones en
                  línea muy en serio. Ofrecemos opciones de pago seguras a
                  través de proveedores de servicios de pago externos
                  certificados. Al hacer un pedido, acepta que podemos almacenar
                  y procesar su información de pago en cumplimiento con las
                  normativas aplicables de seguridad de datos. Toda la
                  información confidencial relacionada con los pagos, incluidas
                  las tarjetas de crédito o débito, es tratada de manera segura
                  a través de la tecnología de encriptación estándar en la
                  industria. Sin embargo, ARS Racing no se responsabiliza por
                  daños o pérdidas causadas por el uso no autorizado de su
                  información financiera.
                  <br />{" "}
                  <strong>5. Política de Devoluciones y Reembolsos</strong>
                  <br /> Dado que la mayoría de nuestros productos son
                  personalizados y hechos a medida, no ofrecemos devoluciones a
                  menos que el producto recibido sea defectuoso o no corresponda
                  con el pedido realizado. Para iniciar una solicitud de
                  reembolso o cambio, el cliente debe contactarnos dentro de los
                  primeros 7 días hábiles desde la recepción del pedido.
                  <br />
                  <strong>6. Propiedad Intelectual</strong>
                  <br /> Todo el contenido de este sitio web, incluyendo pero no
                  limitado a imágenes, gráficos, textos y logotipos, es
                  propiedad de ARS Racing y está protegido por las leyes de
                  propiedad intelectual vigentes.
                  <br /> No está permitido reproducir, distribuir, modificar o
                  utilizar el contenido sin nuestro consentimiento expreso por
                  escrito.
                  <br />{" "}
                  <strong>
                    7. Modificaciones de los Términos y Condiciones
                  </strong>
                  <br /> ARS Racing se reserva el derecho de modificar estos
                  Términos y Condiciones en cualquier momento.
                  <br /> Las actualizaciones serán publicadas en esta página y
                  entrarán en vigor inmediatamente. Se recomienda revisar esta
                  página periódicamente para estar informado de los cambios.
                  <br /> <strong>8. Privacidad de datos</strong>
                  <br />
                  En ARS Racing hacemos un uso responsable de la información
                  personal, protegiendo la privacidad de las Personas Usuarias
                  que nos confiaron sus datos
                  <br /> <strong>9. Contacto</strong>
                  <br /> Si tiene alguna pregunta sobre estos Términos y
                  Condiciones, puede contactarnos a través de:
                  <br /> Correo electrónico:{" "}
                  <strong>motoarsbussines@gmail.com</strong>
                  <br /> Teléfono: <strong> 5564646565</strong>
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
      </div>
    </footer>
  );
};
