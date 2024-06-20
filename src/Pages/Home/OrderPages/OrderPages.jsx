import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from '../../../Components/SearchInput'
import '/Users/dxnte/Desktop/Kodeawards/store-motocicle/src/Pages/Home/OrderPages/styleOrder.css'

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
          <p className='textMain'>Resultado de la busqueda: {searchQuery}</p>
        </main>
        <footer className='footer'>
          <button className='buttonProduct'>Productos</button>
        </footer>        
    </div>
  )
}

export default OrderPages
