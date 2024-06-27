import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const items = [
    {
      image: "https://via.placeholder.com/150",
      label: "Porta equipaje lateral",
    },
    {
      image: "https://via.placeholder.com/150",
      label: "Parrilla con respaldo",
    },
    {
      image: "https://via.placeholder.com/150",
      label: "Slider tipo jaula",
    },
    {
      image: "https://via.placeholder.com/150",
      label: "Porta equipaje lateral",
    },
    {
      image: "https://via.placeholder.com/150",
      label: "Parrilla con respaldo",
    },
    {
      image: "https://via.placeholder.com/150",
      label: "Slider tipo jaula",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

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
    <div className="relative w-full max-w-4xl mx-auto my-10 bg-white rounded-xl p-4">
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-400"
        >
          <FaChevronLeft />
        </button>
        <div className="flex-1 flex justify-center items-center overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex / itemsToShow) * 100}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center p-2 box-border"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-48 object-contain w-full rounded-sm"
                />
                <p className="text-center mt-2 text-">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          aria-label="Next"
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-400"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
