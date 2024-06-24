import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const items = [
    {
      images: "https://via.placeholder.com/150",
      label: "Porta equipaje lateral",
    },
    {
      images: "https://via.placeholder.com/150",
      label: "Parrilla con respaldo",
    },
    {
      images: "https://via.placeholder.com/150",
      label: "Slider tipo jaula",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8">
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-400"
        >
          <FaChevronLeft />
        </button>
        <div className="flex-1 flex justify-center items-center overflow-hidden">
          <div
            className="flex space-x-4 transform transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.images}
                  alt={item.label}
                  className="h-48 object-contain w-full"
                />
                <p className="text-center mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-400"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
