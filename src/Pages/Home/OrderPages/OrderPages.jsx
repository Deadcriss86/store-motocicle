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
          <CardDelivery/>
          <CardDelivery/>
          <CardDelivery/>
          <CardDelivery/>
        </main>
        <footer className='footer'>
          <button className='buttonProduct'>Productos</button>
        </footer>        
    </div>
  )
}

export default OrderPages
