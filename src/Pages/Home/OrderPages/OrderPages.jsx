import { useState } from 'react';
import SearchBar from '../../../Components/SearchInput'
import CardDelivery from '../../../Components/CardModuleDelivery'
import '../OrderPages/styleOrder.css'

function OrderPages() {
  const [searchQuery, setSearchQuery] = useState ('');
  const handleSearch = (query)=> {
    setSearchQuery(query);
    console.log("buscando", query);
  }

  return (
    <div className='orderPages'>
        <nav className='navbar'>
          <p className='textNav'>Pedidos</p>
          <SearchBar onSearch={handleSearch}/>
        </nav>
        <main className='mainContent'>
          <div className='containerText'>
            <p className='textMain'>Resultado de la busqueda: {searchQuery}</p>
          </div>
            <CardDelivery 
              deliveryDescription="Descripción del pedido 1" 
              nameClient="Cliente 1" 
              priceDelivery="5000" 
              descriptionGuide="GU123456"/>
            <CardDelivery 
              deliveryDescription="Descripción del pedido 2" 
              nameClient="Cliente 2" 
              priceDelivery="3000" 
              descriptionGuide="GU654321"/>
            <CardDelivery 
              deliveryDescription="Descripción del pedido 3" 
              nameClient="Cliente 3" 
              priceDelivery="7000" 
              descriptionGuide="GU111111"/>
        </main>
        <footer className='footer'>
          <button className='buttonProduct border-2 border-color-[#0FFF07] bg-transparent hover:bg-[#0FFF07] hover:text-black transition-colors duration-300'>Productos</button>
        </footer>        
    </div>
  )
}

export default OrderPages
