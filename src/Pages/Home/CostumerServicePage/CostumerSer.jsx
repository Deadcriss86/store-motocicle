import FormService from "../../../Components/FormClient";
import { Navlink } from "../../../Components/Navbar_";
import { Footer } from "../../../Components/footer";
import imgFondo from "../../../../dist/assets/fondo_service.png";

function CostumerSer() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-black bg-gradient-to-t from-black to-[#0f630c]">
        <Navlink />
        <br />
        <br />
        <br />
        <h1 className="text-4xl font-bold text-center text-[#0eff06] py-2">
          Atención al cliente
        </h1>
        <div className="flex flex-1 flex-col md:flex-row p-4 md:p-8 lg:p-16 xl:p-24 gap-4">
          <div className="hidden md:flex md:w-1/2 justify-center items-center">
            <img src={imgFondo} alt="Image" className="max-w-full h-auto" />
          </div>
          <div className="flex-1 flex justify-center items-center md:w-1/2">
            <FormService />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CostumerSer;
