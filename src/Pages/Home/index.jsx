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
import CardsEnvio from "../../Components/cards";

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
              text="Personaliza y protege tu moto"
              className="font-bold py-8 text-green bg-clip-text w-1/1 text-center"
            />
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-white opacity-60 text-center">
              Sliders personalizados y accesorios para todas las marcas <br />
              ¡Transforma tu moto hoy mismo!
            </h2>
            <div className="text-base sm:text-lg flex items-center space-x-2 text-white py-8">
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
              href="https://api.whatsapp.com/send?phone=5610544410&text=Hola%2C%20me%20gustaría%20saber%20cuáles%20accesorios%20personalizados%20recomiendan%20para%20mejorar%20el%20estilo%20y%20la%20funcionalidad%20de%20mi%20motocicleta."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="animate-bounce font-bold text-[#0eff06] hover:text-white">
                Contáctanos para pedidos personalizados
              </button>
              <IoLogoWhatsapp
                size="2.5rem"
                className="text-[#0eff06] hover:text-white animate-bounce"
              />
            </a>
          </div>
        </div>
        <div className="bg-black text-white py-5 flex flex-col items-center justify-center">
          <div className="text-center text-white max-w-4xl space-y-4 py-5 mb-8">
            <div className="border-b-2 border-[#0eff06] p-2 text-lg sm:text-xl md:text-2xl py-10">
              <h2 className="text-4xl sm:text-3xl md:text-6xl font-bold mb-1 text-[#0eff06] border-[#0eff06] p-2 py-10">
                Quiénes somos
              </h2>
              <p className="text-sm sm:text-3xl md:text-xl">
                Somos ARS Racing, tu taller de personalización para
                motocicletas. Nos dedicamos a crear piezas de alta calidad,
                diseñadas para proteger y personalizar tu moto.
              </p>
              <h2 className="text-4xl sm:text-3xl md:text-6xl font-bold mb-1 text-[#0eff06] border-[#0eff06] py-10">
                Nuestra misión
              </h2>
              <p className="text-sm sm:text-3xl md:text-xl">
                Nuestra pasión es proporcionar a los motociclistas de toda la
                República Mexicana accesorios de alta calidad, diseñados para
                mejorar tu experiencia de conducción, garantizando la seguridad
                y el estilo en cada viaje. Nos esforzamos por ofrecer productos
                personalizados que se ajusten a las necesidades únicas de cada
                cliente, brindando un servicio excepcional, confiable y
                accesible para todos los apasionados por las motocicletas.
              </p>
            </div>
            <SlBadge size="60px" className="text-[#0eff06] inline-block " />
          </div>
        </div>
        <div className="bg-black flex flex-col items-center justify-center my-4">
          <div className="text-[#0eff06] text-2xl font-bold py-2 text-center">
            ¡Transforma tu motocicleta hoy con alguno de estos productos!
            <br />
            <br />
            Contamos con:
          </div>
          <div className="text-white text-justify w-10/12 mb-4 text-sm md:text-xl lg:text-xl lg:w-1/2 md:w-1/2">
            <br />{" "}
            <strong className="text-[#0eff06]">
              - Parrillas deportivas y de carga{" "}
            </strong>
            pide la que mejor se ajuste a tus necesidades
            <br />{" "}
            <strong className="text-[#0eff06]">
              - Sliders delanteros y traseros
            </strong>{" "}
            que te ayudarán a proteger tu moto de caídas
            <br /> <strong className="text-[#0eff06]">- Cubre faros</strong> que
            le pueden dar a tu moto un estilo único y de paso protección
            antirrobo <br />{" "}
            <strong className="text-[#0eff06]">Y más...</strong>
          </div>
          <Carousel />
        </div>
        <div className="bg-black flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl font-bold text-center my-4">
            Comentarios de nuestros clientes
          </h2>
          <Card_coment />
        </div>
        <CardsEnvio />
        <Footer />
      </div>
    </>
  );
}

export default Home;
