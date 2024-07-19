import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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
    <div className="flex items-center space-x-8">
      <li className="text-gray-100 hover:text-[#0eff06] dark:text-white flex gap-3 items-start">
        Welcome {user.username}
      </li>
      <Link
        to="/productos"
        className="text-gray-100 hover:text-[#0eff06] dark:text-white"
      >
        Productos
      </Link>
      <Link
        to="/serviceAtention"
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
    </div>
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
        className="text-gray-900 bg-[#0eff06] hover:bg-[#0eff06b4] focus:ring-1 focus:outline-none focus:ring-[#0eff06] font-medium rounded-xl text-sm px-4 py-2 mx-2 dark:bg-[#0eff06] dark:hover:bg-[#0eff069d] dark:focus:ring-[#0eff06]"
      >
        login
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
        <li>
          <Link
            to="/productos"
            className="text-gray-100 hover:text-[#0eff06] dark:text-white"
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            to="/atencion-al-cliente"
            className="text-gray-100 hover:text-[#0eff06] dark:text-white"
          >
            Atención al cliente
          </Link>
        </li>
        <li>
          <Link
            to="/mis-compras"
            className="text-gray-100 hover:text-[#0eff06] dark:text-white"
          >
            Mis compras
          </Link>
        </li>
        <li>
          <Link
            to="/mi-perfil"
            className="text-gray-100 hover:text-[#0eff06] dark:text-white flex items-center"
          >
            Mi perfil <FaRegUser className="ml-1" />
          </Link>
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
      {isAuthenticated ? <AuthenticatedLinks /> : <GuestLinks />}
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
              Mi perfil <FaRegUser className="mt-1" />
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
          <button className="nav-button hover:drop-shadow-lg flex w-full items-center justify-center rounded-full border border-[#0eff06e9] bg-[#0eff06] bg-gradient-to-tr from-[#0eff06] to-[#78c048]/70 px-7 py-2.5 text-base font-bold text-slate-800 ring-lime-600 ring-offset-2 ring-offset-slate-700 drop-shadow-[0px_1px_2px_rgb(0,0,0,0.3)] active:ring-1">
            <span>Login</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className="ml-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </button>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};
