import { Footer } from "../../Components/footer";
import imgfondo from "../../../dist/assets/img_fondo.png";
import { IoLogoWhatsapp, IoArrowForwardCircle } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import Carousel from "../../Components/carousel";
import { Card_coment } from "../../Components/card_coment";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom/dist";
import { Navlink } from "../../Components/Navbar_";
import { TextRevealCard } from "../../Components/TextRevealCard";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = Cookies.get("isadmin");
    if (isAdmin === "true") {
      navigate("/productos");
    }
  }, [navigate]);

  return (
    <>
      <Navlink />
      <div className="bg-black min-h-screen overflow-x-hidden">
        <div className="relative w-full h-screen">
          <img
            className="w-full h-full object-cover opacity-90"
            alt="Imagen de fondo"
            src={imgfondo}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 m-4">
            <TextRevealCard
              text="Venta de accesorios para tu motocicleta"
              className="font-bold py-20 text-green bg-clip-text"
            />
            <div className="text-base sm:text-lg flex items-center space-x-2 text-white">
              <span>Conoce nuestros productos</span>
              <Link to="/Menu">
                <IoArrowForwardCircle
                  size="2.5rem"
                  className="text-[#0eff06] hover:text-white"
                />
              </Link>
            </div>
            <a
              className="flex items-center space-x-2 text-base sm:text-lg pt-10 text-white"
              href="https://api.whatsapp.com/send?phone=5610544410&text=Hola%2C%20me%20gustaría%20saber%20cúales%20accesorios%20personalizados%20recomiendan%20para%20mejorar%20el%20estilo%20y%20la%20funcionalidad%20de%20mi%20motocicleta."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Contáctanos para pedidos personalizados</button>
              <IoLogoWhatsapp
                size="2.5rem"
                className="animate-bounce text-[#0eff06] hover:text-white"
              />
            </a>
          </div>
        </div>
        <div className="bg-black text-white py-5 flex flex-col items-center justify-center">
          <div className="text-center text-white max-w-4xl space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#0eff06] border-[#0eff06] p-2">
              Quiénes somos
            </h2>
            <div className="border-b-2 border-[#0eff06] p-2 text-lg sm:text-xl md:text-2xl">
              <p>
                Somos una empresa dedicada a la fabricación de accesorios y
                defensas para cualquier tipo de motocicleta. Nuestro principal
                objetivo es que nuestros clientes se sientan satisfechos con la
                estética personalizada de su moto.
              </p>
            </div>
            <SlBadge size="2rem" className="text-[#0eff06] inline-block" />
          </div>
        </div>
        <div className="bg-black flex flex-col items-center justify-center h-screen">
          <div className="text-[#0eff06] text-3xl font-bold py-4 text-center">
            Alguno de nuestros productos
          </div>
          <Carousel />
        </div>
        <div className="bg-black flex flex-col items-center justify-center h-screen">
          <h2 className="text-white text-3xl font-bold py-8 text-center">
            Comentarios de nuestros clientes
          </h2>
          <Card_coment />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
