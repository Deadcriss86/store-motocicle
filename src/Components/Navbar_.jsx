import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import logo from "../../dist/assets/logo2.png";

export const Navlink = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const AuthenticatedLinks = () => (
    <>
      <Link
        to="/productos"
        className="text-gray-100 hover:text-[#0eff06] dark:text-white"
      >
        Productos
      </Link>
      <Link
        to="/atencion-al-cliente"
        className="text-gray-100 hover:text-[#0eff06] dark:text-white"
      >
        Atención al cliente
      </Link>
      <Link
        to="/mi-perfil"
        className="text-gray-100 hover:text-[#0eff06] dark:text-white flex gap-3 items-start"
      >
        Mi perfil <FaRegUser className="mt-1" />
      </Link>
      <button>
        <IoCartOutline
          size={24}
          className="text-gray-100 hover:text-[#0eff06] dark:text-white"
        />
      </button>
      <Link
        to="/"
        className="text-gray-900 bg-[#0eff06] hover:bg-[#0eff06b4] focus:ring-1 focus:outline-none focus:ring-[#0eff06] font-medium rounded-xl text-sm px-4 py-2 dark:bg-[#0eff06] dark:hover:bg-[#0eff069d] dark:focus:ring-[#0eff06]"
        onClick={() => logout()}
      >
        Logout
      </Link>
    </>
  );

  const GuestLinks = () => (
    <>
      <Link
        to="/mis-compras"
        className="text-gray-100 hover:text-[#0eff06] dark:text-white"
      >
        Mis compras
      </Link>
      <Link
        to="/login"
        className="text-gray-900 bg-[#0eff06] hover:bg-[#0eff06b4] focus:ring-1 focus:outline-none focus:ring-[#0eff06] font-medium rounded-xl text-sm px-4 py-2 mx-2 dark:bg-[#0eff06] dark:hover:bg-[#0eff069d] dark:focus:ring-[#0eff06] "
      >
        Login
      </Link>
    </>
  );

  const MobileMenu = () => (
    <div
      className={`w-full md:hidden ${
        isOpen ? "block" : "hidden"
      } absolute top-16 left-0 bg-[#076404] py-4`}
    >
      <ul className="flex flex-col items-center space-y-4">
        {isAuthenticated ? <AuthenticatedLinks /> : <GuestLinks />}
      </ul>
    </div>
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-[#076404] via-[#076404cc] to-[#07640400]">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} className="h-16" alt="logo" />
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
          {isAuthenticated ? (
            <AuthenticatedLinks />
          ) : (
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-100 hover:text-[#0eff06] md:hover:bg-transparent dark:text-white"
              >
                Mis compras
              </a>
              {/* Remove the non-functional button */}
            </div>
          )}
        </div>
        <div className="hidden md:flex">
          {/* Replace the non-functional button with a Link to /login */}
          <Link
            to="/login"
            className="text-gray-900 bg-[#0eff06] hover:bg-[#0eff06b4] focus:ring-1 focus:outline-none focus:ring-[#0eff06] font-medium rounded-xl text-sm px-4 py-2 dark:bg-[#0eff06] dark:hover:bg-[#0eff069d] dark:focus:ring-[#0eff06]"
          >
            Login
          </Link>
        </div>
        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  );
};
