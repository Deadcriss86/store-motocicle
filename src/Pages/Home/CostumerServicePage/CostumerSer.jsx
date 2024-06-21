import { CiUser } from "react-icons/ci";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import logo from '../../../assets/logo2.png'
import './styleCust.css';

function CostumerSer() {
  return (
    <div className='containerFather'>
      <div className='containerNavbar'>
        <img className='h-20' src={logo} alt="logo" />
        <nav>
          <a href="#">Productos</a>
          <a href="#">Atencion al cliente</a>
          <a href="#">Mis compras</a>
          <a href="#">Perfil<CiUser /></a>
          <button><LiaCartArrowDownSolid /></button>
        </nav>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default CostumerSer
