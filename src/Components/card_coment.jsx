import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Card_coment = () => {
  const [items, setItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(3);
  useEffect(() => {
    console.log("Items have been set: ", items);
  }, [items]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecuta la función al montar el componente para establecer el número correcto de elementos

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(items.length - itemsToShow, 0) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.max(items.length - itemsToShow, 0) ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-10 bg-transparent rounded-xl p-6 shadow-lg shadow-[#0eff06]">
      <div className="flex items-center justify-center">
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="p-2 bg-transparent text-[#0eff06]
     rounded-full hover:bg-gray-400 mx-10"
        >
          <FaChevronLeft
            size="1.5rem"
            className="bg-transparent text-[#0eff06]"
          />
        </button>
        <div className="card card-body bg-base-100 w-96 h-96 flex justify-center">
          <img
            className="relative w-60 h-60 rounded-xl"
            src="https://motoapiprueba2.s3.amazonaws.com/IMG_5388.JPEG"
            alt="Product"
          />
          <div className="card-body">
            <h2 className="card-title flex justify-center border-b-2 border-[#0eff06] text-[#0eff06]">
              NOMBRE DEL CLIENTE
            </h2>
            <p className="text-justify">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500.
            </p>
            <div className="w-full my-2">
              <Link
                to="/Menu"
                className="nav-button hover:drop-shadow-lg flex w-full items-center justify-center rounded-full border border-[#0eff06e9] bg-[#0eff06] bg-gradient-to-tr from-[#38ff26] to-[#78c048] px-7 py-2.5 text-base font-bold text-slate-800 ring-lime-600 ring-offset-2 ring-offset-slate-700 drop-shadow-[0px_1px_2px_rgb(0,0,0,0.3)] active:ring-1"
              >
                <span>Ver Producto</span>
              </Link>
            </div>
          </div>
        </div>
        <button
          onClick={handleNext}
          aria-label="Next"
          className="p-2 bg-transparent text-[#0eff06]
     rounded-full hover:bg-gray-400 mx-10"
        >
          <FaChevronRight
            size="1.5rem"
            className="bg-transparent text-[#0eff06]"
          />
        </button>
      </div>
    </div>
  );
};
