import { CiEdit } from "react-icons/ci";
import '../Pages/Home/OrderPages/styleOrder.css'

const CardDelivery = ({ deliveryDescription, nameClient, priceDelivery, descriptionGuide }) => {
    return(
        <div className="cardContainer">
            <div className="noPedido">Pedido No. 13432</div>
            <div className="clientName">Nombre : Alejandro Medina</div>
            <div className="mountTotal">Monto total:$ 5,000.00</div>
            <div className="guideNumber">No.guia:
                <div className="numberGuide"></div>
            </div>
            <div className="saveButton">
                <button>Guardar</button>
            </div>
            <button className="editButton"><CiEdit /></button>
        </div>
    )
}
export default CardDelivery;
