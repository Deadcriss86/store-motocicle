import imgfondo from '@assets/img_fondo.png';
import logo from '@assets/logo_ars.png';

const Unauthorized = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
      <div
        className="absolute bottom-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imgfondo})` }}
      ></div>
      <div className="absolute top-10 left-10 z-10">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      <h1 className="text-9xl font-bold text-[#0eff06] z-10">401</h1>
      <p className="text-xl text-[#0eff06] mt-4 z-10">
        Lo siento no estas autorizado para ver esto.
      </p>
    </div>
  );
};

export default Unauthorized;
