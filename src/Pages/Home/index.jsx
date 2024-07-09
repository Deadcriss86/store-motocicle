import { NavLink } from "../../Components/Navbar_";
import { Footer } from "../../Components/footer";
import imgfondo from "../../../dist/assets/img_fondo.png";
import { IoLogoWhatsapp, IoArrowForwardCircle } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { ProductsPage } from "../../Components/Products";
import Carousel from "../../Components/carousel";

function Home() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <NavLink />
        <div className="relative w-full h-[calc(100vh-56px)]">
          <img
            className="w-full h-full object-cover opacity-90"
            alt="Imagen de fondo"
            src={imgfondo}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Venta de accesorios para tu motocicleta
            </h1>
            <div className="text-base sm:text-lg flex items-center space-x-2">
              <span>Conoce nuestros productos</span>
              <IoArrowForwardCircle size="1.5rem" className="text-[#0eff06]" />
            </div>
            <a
              className="flex items-center space-x-2 text-base sm:text-lg pt-10"
              href="#"
            >
              <span>Contactanos para pedidos personalizados</span>
              <IoLogoWhatsapp
                size="1.5rem"
                className="text-[#0eff06] hover:text-[#0eff06]"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-auto py-9 bg-black px-4">
          <div className="text-center text-white max-w-4xl space-y-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#0eff06] border-[#0eff06] p-2">
              Quienes somos
            </p>
            <p className="border-b-2 border-[#0eff06] p-2 text-lg sm:text-xl md:text-2xl">
              Somos una empresa dedicada a la fabricación de accesorios y
              defensas para cualquier tipo de motocicleta. Nuestro principal
              objetivo es que nuestros clientes se sientan satisfechos con la
              estética personalizada de su moto.
              <br />
              <SlBadge size="2rem" className="text-[#0eff06] inline-block" />
            </p>
          </div>
        </div>

        <div className="text-center text-xl text-white font-bold py-2 bg-black w-full">
          Lo más nuevo
        </div>

        <Carousel />

        <div className="bg-black flex flex-col items-center py-10 px-4">
          <h2 className="text-center text-2xl font-bold mb-4 text-[#0eff06] py-4">
            Comentario de nuestros clientes
          </h2>
          <div className="w-1/2 h-1 bg-[#0eff06] mb-8"></div>
          <div className="bg-white w-full max-w-lg rounded-lg shadow-xl p-6 flex flex-col items-center">
            <img
              className="rounded-lg mb-4 w-full"
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="imgprod"
            />
            <div className="border-b-2 border-[#0eff06] text-center py-2 w-full">
              <h2 className="text-xl md:text-2xl">ALEJANDRO ROMERO</h2>
            </div>
            <p className="py-4 text-center">
              La reja me pareció muy bonita. Le da ese aspecto rudo y le da un
              gran realce. El portacelular no lo pude poner porque los
              tornillos que trae de origen no son lo suficientemente largos
              para agarrar las tres piezas: portacelular, reja y plásticos.
            </p>
            <div className="flex justify-center space-x-1">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#0eff06]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#0eff06]"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#0eff06]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#0eff06]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#0eff06]"
              />
            </div>
            <div className="card-actions justify-center py-4">
              <button
                type="button"
                className="text-gray-900 bg-[#0eff06] hover:bg-[#0eff06b4] focus:ring-1 focus:outline-none focus:ring-[#0eff06] font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#0eff06] dark:hover:bg-[#0eff069d] dark:focus:ring-[#0eff06]"
              >
                Ver producto
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black flex justify-center w-full py-6 gap-2 text-[#0eff06]">
          <a href="#item1" className="btn btn-xs hover:bg-white">
            1
          </a>
          <a href="#item2" className="btn btn-xs hover:bg-white">
            2
          </a>
          <a href="#item3" className="btn btn-xs hover:bg-white">
            3
          </a>
          <a href="#item4" className="btn btn-xs hover:bg-white">
            4
          </a>
        </div>

        <div>
          <ProductsPage />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

