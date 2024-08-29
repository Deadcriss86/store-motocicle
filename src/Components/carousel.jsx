import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_APIBACK_URL;

const Carousel = () => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = useRef({ desktop: 3, tablet: 2, mobile: 1 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/getproducts`);
        setItems(response.data);
      } catch (error) {
        console.error("Error al obtener datos: ", error);
      }
    };

    fetchData();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : items.length - getItemsToShow()
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < items.length - getItemsToShow() ? prev + 1 : 0
    );
  };

  const getItemsToShow = () => {
    if (window.innerWidth >= 1024) return itemsPerPage.current.desktop;
    if (window.innerWidth >= 768) return itemsPerPage.current.tablet;
    return itemsPerPage.current.mobile;
  };

  const visibleItems = items.slice(
    currentIndex,
    currentIndex + getItemsToShow()
  );

  return (
    <div className="relative flex justify-end items-center">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        <FaChevronLeft size={24} />
      </button>
      <div className="flex overflow-hidden w-full">
        {visibleItems.map((item, index) => {
          const id = item._id.toString();

          return (
            <div
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
              key={index}
            >
              <div className="bg-white rounded-xl shadow-md">
                <Link to={`/detail?id=${id}`}>
                  <img
                    className="w-full h-48 object-cover rounded-xl"
                    src={item.images}
                    alt={`Image ${index}`}
                  />
                </Link>
              </div>
              <h2 className="text-white text-center">{item.productName}</h2>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
