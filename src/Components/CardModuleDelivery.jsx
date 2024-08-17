import { CiEdit } from "react-icons/ci";
import "../Pages/Home/OrderPages/styleOrder.css";

const CardDelivery = ({
  deliveryDescription,
  nameClient,
  priceDelivery,
  descriptionGuide,
}) => {
  return (
    <div className="cardContainer p-4 bg-[#1f1f1f] text-white rounded-lg shadow-lg space-y-4 max-w-lg mx-auto lg:max-w-full lg:flex lg:items-start lg:justify-between">
      <div className="space-y-2 lg:space-y-0 lg:space-x-6 lg:flex lg:items-center">
        <div className="noPedido text-sm md:text-base lg:text-lg font-semibold">
          Pedido No. {deliveryDescription}
        </div>
        <div className="clientName text-sm md:text-base lg:text-lg">
          Nombre: {nameClient}
        </div>
        <div className="mountTotal text-sm md:text-base lg:text-lg">
          Monto total: {priceDelivery}
        </div>
      </div>
      <div className="guideNumber text-sm md:text-base lg:text-lg">
        No. de guía:
        <span className="numberGuide font-bold ml-2">{descriptionGuide}</span>
      </div>
      <div className="flex justify-between items-center w-full lg:w-auto space-x-4 mt-4 lg:mt-0">
        <button className="saveButton bg-transparent hover:bg-[#0FFF07] hover:text-black transition-colors duration-300 px-4 py-2 rounded-lg">
          Guardar
        </button>
        <button className="editButton bg-transparent hover:bg-[#0FFF07] hover:text-black transition-colors duration-300 px-4 py-2 rounded-lg">
          <CiEdit />
        </button>
      </div>
    </div>
  );
};

export default CardDelivery;
