import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import axios from "axios"; // Asegúrate de haber importado axios

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-black">
      <h1 className="text-[#0eff06] text-3xl font-bold flex justify-center">
        Algunos de nuestros productos
      </h1>
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        A R S<span className="text-[#0eff06]">_</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);
  const [items, setItems] = useState([]);
  const apiUrl = import.meta.env.VITE_APIBACK_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/getproducts`);
        console.log(response.data);
        setItems(response.data);
      } catch (error) {
        console.error("Error al obtener datos: ", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {items.slice(0, 15).map(
        (
          item,
          index // Limitar a los primeros 10 elementos
        ) => (
          <Card
            key={index}
            containerRef={containerRef}
            src={item.images} // Asumiendo que el objeto `item` tiene una propiedad `images`
            alt={item.name || "Product image"}
            rotate={`${(index % 2 === 0 ? 1 : -1) * (index * 5)}deg`} // Rotación basada en el índice
            top={`${(index % 5) * 15 + 20}%`} // Distribución vertical de las tarjetas
            left={`${(index % 3) * 20 + 20}%`} // Distribución horizontal de las tarjetas
            className="w-36 md:w-56"
          />
        )
      )}
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};
