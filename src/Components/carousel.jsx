import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const Carousel = () => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/getproducts"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

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
              transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center p-2 box-border"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <img
                  src={item.images}
                  alt={item.productName}
                  className=" relative h-48 object-contain w-50 overflow-hidden bg-white border-0 border-gray-200 rounded-badge"
                />
                <p className="text-center mt-2">{item.productName}</p>
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
