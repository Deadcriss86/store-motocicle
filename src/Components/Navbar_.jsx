import { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../../dist/assets/logo2.png";

export const Navlink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-[#076404] via-[#076404cc] to-[#07640400]">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} className="h-16" alt="logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
        </a>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-100 p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex justify-center flex-1">
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-100 hover:text-[#0eff06] md:hover:bg-transparent dark:text-white"
            >
              Productos
            </a>
            <a
              href="#"
              className="text-gray-100 hover:text-[#0eff06] md:hover:bg-transparent dark:text-white"
            >
              Atención al cliente
            </a>
            <a
              href="#"
              className="text-gray-100 hover:text-[#0eff06] md:hover:bg-transparent dark:text-white"
            >
              Mis compras
            </a>
            <a
              href="#"
              className="text-gray-100 hover:text-[#0eff06] md:hover:bg-transparent dark:text-white flex gap-3 items-start"
            >
              Mi perfil <FaRegUser className='mt-1' />
            </a>
            <button>
              <IoCartOutline
                size={24}
                className="text-gray-100 hover:text-[#0eff06] md:hover:bg-transparent dark:text-white"
              />
            </button>
          </div>
        </div>
        <div className="hidden md:flex">
          <button
            type="button"
            className="text-gray-900 bg-[#0eff06] hover:bg-[#0eff06b4] focus:ring-1 focus:outline-none focus:ring-[#0eff06] font-medium rounded-xl text-sm px-4 py-2 dark:bg-[#0eff06] dark:hover:bg-[#0eff069d] dark:focus:ring-[#0eff06]"
          >
            Login
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`w-full md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 bg-[#076404] py-4`}>
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a
                href="#"
                className="text-gray-100 hover:text-[#0eff06] dark:text-white"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-100 hover:text-[#0eff06] dark:text-white"
              >
                Atención al cliente
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-100 hover:text-[#0eff06] dark:text-white"
              >
                Mis compras
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-100 hover:text-[#0eff06] dark:text-white"
              >
                Mi perfil <FaRegUser />
              </a>
            </li>
            <li>
              <button>
                <IoCartOutline
                  size={24}
                  className="text-gray-100 hover:text-[#0eff06] dark:text-white"
                />
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-gray-900 bg-[#0eff06] hover:bg-[#0eff06b4] focus:ring-1 focus:outline-none focus:ring-[#0eff06] font-medium rounded-xl text-sm px-4 py-2 dark:bg-[#0eff06] dark:hover:bg-[#0eff069d] dark:focus:ring-[#0eff06]"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
