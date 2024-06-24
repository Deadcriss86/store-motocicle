import React from "react";
import { Navlink } from "../../Components/Navbar_";
import { Footer } from "../../Components/footer";
import imgfondo from "../../Assets/img_fondo.png";
import { IoLogoWhatsapp, IoArrowForwardCircle } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { ProductsPage } from "../../Components/Products";
import Carousel from "../../Components/carousel";

function Home() {
  return (
    <>
      <div>
        <div className="">
          <Navlink />
        </div>
        <div className="w-screen h-screen relative">
          <img
            className="w-full h-full object-cover opacity-99"
            alt="Imagen de fondo"
            src={imgfondo}
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end pr-10 pb-10 flex-col text-center text-white">
            <h1 className="text-5xl font-bold mb-4 pb-8">
              Venta de accesorios para tu motocicleta
            </h1>
            <div className="text-lg flex justify-between">
              Conoce nuestros productos
              <IoArrowForwardCircle size="2rem" className="text-[#0eff06]" />
            </div>
            <div className="flex justify-start items-start">
              <div className="flex justify-center text-lg pt-10">
                <IoLogoWhatsapp
                  href="#"
                  size="2rem"
                  className="text-[#0eff06] hover:text-[#0eff06]"
                />
                Contactanos para pedidos personalizados
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-3/4 h-full flex justify-center items-end m-b-4 pb-9">
            <p className="text-4xl font-bold mb-4 text-[#0eff06] border-r-1 border-[#0eff06] border-t-2 p-2">
              Quienes somos
            </p>
            <p className="text-white text-justify border-b-2 border-[#0eff06] p-2 flex ítem-center">
              Somos una empresa dedicada a la fabricación de accesorios y
              defensas para cualquier tipo de motocicleta. Nuestro principal
              objetivo es que nuestros clientes se sientan satisfechos con la
              estética personalizada de su moto.
              <br />
              <SlBadge
                size="4rem"
                className="text-[#0eff06] text-lg flex ítem-center"
              />
            </p>
          </div>
        </div>
        <div className="flex justify-center text-xl text-white w-full font-bold py-2 bg-[#000000]">
          Lo más nuevo
        </div>

        <Carousel />

        <div className="bg-black w-full text-xl text-wrap flex justify-center font-bold text-[#0eff06] py-4">
          Comentarios de nuestros clientes
        </div>
        <div className="bg-black w-full carousel-center py-6 flex justify-center items-center">
          <div className="card card-side bg-base-100 shadow-xl w-1/3">
            <div className="bg-white flex justify-center items-center px-3 rounded-lg">
              <img
                className="rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="imgprod"
              />
              <div className="card-body">
                <div className="border-b-2 border-[#0eff06] text-center py-2">
                  <h2 itemID="name-customer">ALEJANDRO ROMERO</h2>
                </div>
                <p className="coment py-4">
                  La reja me pareció muy bonita. Le da ese aspecto rudo y le da
                  un gran realce. El portacelular no lo pude poner porque los
                  tornillos que trae de origen no son lo suficientemente largos
                  para agarrar las tres piezas: portacelular, reja y plásticos.
                </p>
                <div className="rating flex justify-center">
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
                    className="text-gray-900 bg-[#0eff06] hover:bg-[#0eff06b4] focus:ring-1 focus:outline-none focus:[#0eff06] font-medium rounded-lg text-sm px-4 py-2 text-center dark:[#0eff06] dark:hover:bg-[#0eff069d] dark:focus:ring-[#0eff06]"
                  >
                    Ver producto
                  </button>
                </div>
              </div>
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
