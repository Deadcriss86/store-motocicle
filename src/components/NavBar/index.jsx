import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-5 text-sm font-light'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
                <NavLink to='/Shopi'>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink to='/All'>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to='/Clothes'>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink to='/Electronics'>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/Fornitures'>
                    Fornitures
                </NavLink>
            </li>
            <li>
                <NavLink to='/Toys'>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink to='/'>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-3'>
            <li>
                example@exm.com
            </li>
            <li>
                <NavLink to='/My-orders'>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account'>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/SigIn'>
                    Sig In
                </NavLink>
            </li>
            <li>
                carrito 0
            </li>
        </ul>
    </nav>
  )
}

export default NavBar