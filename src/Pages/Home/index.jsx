import { Navlink } from "../../Components/Navbar_";
import { Footer } from "../../Components/footer";
// import imgfondo from "../../assets/Images/img_fondo.jpg";
//import { HiChevronDoubleRight } from "react-icons/hi";
//import { iconWhats } from "../../Components/icon_whats.jsx";

function Home() {
  return (
    <>
      <div>
        <Navlink />
      </div>
      <div className="w-screen h-screen relative">
        <img
          className="w-1320px h-full object-cover opacity-95"
          alt="Imagen de fondo"
          src=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Venta de accesorios para tu motocicleta
          </h1>
          <p className="text-lg">Conoce nuestros productos</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end"></div>
      </div>
      <div className="b h-1/2 w-1/2  rounded-sm px-10">
        <ul className="text-white flex justify-between">
          <img className="" alt="" src="" />
        </ul>
      </div>
      <h1 className=""></h1>
      <Footer />/
    </>
  );
}

export default Home;
