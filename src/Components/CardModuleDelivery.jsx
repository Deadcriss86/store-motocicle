import { CiEdit } from "react-icons/ci";
import '../Pages/Home/OrderPages/styleOrder.css'

const CardDelivery = ({ deliveryDescription, nameClient, priceDelivery, descriptionGuide }) => {
    return(
        <div className="cardContainer">
            <div className="noPedido">Pedido No. {deliveryDescription}</div>
            <div className="clientName">Nombre : {nameClient}</div>
            <div className="mountTotal">Monto total: {priceDelivery}</div>
            <div className="guideNumber">No.guia:
                <div className="numberGuide">{descriptionGuide}</div>
            </div>
            <div className="saveButton bg-transparent hover:bg-[#0FFF07] hover:text-black transition-colors duration-300">
                <button className="bg-transparent hover:bg-[#0FFF07] hover:text-black transition-colors duration-300">Guardar</button>
            </div>
            <button className="editButton bg-transparent hover:bg-[#0FFF07] hover:text-black transition-colors duration-300"><CiEdit /></button>
        </div>
    )
}
export default CardDelivery;
