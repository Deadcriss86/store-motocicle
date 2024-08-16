import { useState } from "react";
import SearchBar from "../../../Components/SearchInput";
import CardDelivery from "../../../Components/CardModuleDelivery";
import "../OrderPages/styleOrder.css";
import { Link } from "react-router-dom";

function OrderPages() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("buscando", query);
  };

  return (
    <div className="orderPages">
      <nav className="navbar">
        <p className="textNav">Pedidos</p>
        <SearchBar onSearch={handleSearch} />
      </nav>
      <main className="mainContent">
        <div className="containerText">
          <p className="textMain">Resultado de la busqueda: {searchQuery}</p>
        </div>
        <CardDelivery
          deliveryDescription="Descripción del pedido 1"
          nameClient="Cliente 1"
          priceDelivery="5000"
          descriptionGuide="GU123456"
        />
        <CardDelivery
          deliveryDescription="Descripción del pedido 2"
          nameClient="Cliente 2"
          priceDelivery="3000"
          descriptionGuide="GU654321"
        />
        <CardDelivery
          deliveryDescription="Descripción del pedido 3"
          nameClient="Cliente 3"
          priceDelivery="7000"
          descriptionGuide="GU111111"
        />
      </main>
      <footer className="footer">
        <Link
          to="/Productos"
          className="buttonProduct border-2 border-[#0eff06] text-[#0eff06] rounded-xl font-bold hover:text-gray-800 hover:bg-gradient-to-r from-orange-300 to-[#0eff06]"
        >
          Ir a productos
        </Link>
      </footer>
    </div>
  );
}

export default OrderPages;
