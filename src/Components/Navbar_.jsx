import { IoCartOutline } from "react-icons/io5";
import logo from "../Assets/logo_ars.png";

export const Navlink = () => {
  return (
    <div className="">
      <nav className=" bg-white border-gray-200 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-13" alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-gray-900 bg-[#0eff06] hover:bg-[#0eff06b4] focus:ring-1 focus:outline-none focus:[#0eff06] font-medium rounded-lg text-sm px-4 py-2 text-center dark:[#0eff06] dark:hover:bg-[#0eff069d] dark:focus:ring-[#0eff06]"
            >
              Login
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-[#0eff0642] rounded-lg py-2 px-4"
            id="navbar"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-100 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-3 px-4 md:p-0 md:hover:bg-transparent md:hover:text-[#0eff06] md:dark:hover:text-[#0eff06] dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-3 px-4 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0eff06] md:dark:hover:text-[#0eff06] dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100"
                >
                  Atencion al cliente
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#0eff06] md:dark:hover:text-[#0eff06] dark:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-100"
                >
                  Mis compras
                </a>
              </li>
              <li>
                <button>
                  <IoCartOutline
                    size="2rem"
                    className="text-white hover:text-[#0eff06]"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
