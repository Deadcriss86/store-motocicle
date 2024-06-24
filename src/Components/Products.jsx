import React, { useState } from "react";
import productsData from "./products.json";
import { AccordionHeader } from "@material-tailwind/react";

const categories = {
  Slider_superior: [
    "Dinamo",
    "Honda",
    "Italika",
    "Mbmotors",
    "Suzuki",
    "Veloci",
    "Vento",
    "Yamaha",
    "Universal",
  ],
  Slider_inferior: [
    "Dinamo",
    "Honda",
    "Italika",
    "Mbmotors",
    "Suzuki",
    "Veloci",
    "Vento",
    "Yamaha",
    "Universal",
  ],
  Slider_trasero: [
    "Dinamo",
    "Honda",
    "Italika",
    "Mbmotors",
    "Suzuki",
    "Veloci",
    "Vento",
    "Yamaha",
    "Universal",
  ],
  Parrilla_carga: [
    "Dinamo",
    "Honda",
    "Italika",
    "Mbmotors",
    "Suzuki",
    "Veloci",
    "Vento",
    "Yamaha",
    "Universal",
  ],
  Parrilla_respaldo: [
    "Dinamo",
    "Honda",
    "Italika",
    "Mbmotors",
    "Suzuki",
    "Veloci",
    "Vento",
    "Yamaha",
    "Universal",
  ],
  Porta_alforjas: [
    "Dinamo",
    "Honda",
    "Italika",
    "Mbmotors",
    "Suzuki",
    "Veloci",
    "Vento",
    "Yamaha",
    "Universal",
  ],
  Protector_de_faro: [
    "Dinamo",
    "Honda",
    "Italika",
    "Mbmotors",
    "Suzuki",
    "Veloci",
    "Vento",
    "Yamaha",
    "Universal",
  ],
};

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Sliders");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const filteredProducts = productsData.filter(
    (product) =>
      product.category === selectedCategory &&
      (selectedSubcategory === "" ||
        product.subcategory === selectedSubcategory)
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-r-2 bg-[#0eff06">
        <h2 className="text-[#0eff06] text-4xl font-bold mb-4 pb-8 bg-black flex justify-center py-4 border-[#0eff06] border-t-2 p-2">
          Productos
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="bg-black text-white rounded-lg p-4 w-64 border-2 border-[#0eff06]">
          <h2 className="text-2xl font-bold mb-4 text-[#0eff06] text-center">
            Categorías
          </h2>
          <div className="border-b border-[#0eff06]">
            <ul className="menu bg-base-200 w-56 rounded-box">
              {Object.keys(categories).map((category) => (
                <li key={category}>
                  <div
                    className={`cursor-pointer py-2 px-4 rounded hover:bg-[#0eff06] hover:text-black ${
                      selectedCategory === category
                        ? "bg-[#0eff06] text-black"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedSubcategory("");
                    }}
                  >
                    {category}
                  </div>

                  {selectedCategory === category &&
                    categories[category].length > 0 && (
                      <ul className="ml-4 mt-2">
                        {categories[category].map((subcategory) => (
                          <li
                            key={subcategory}
                            className={`cursor-pointer py-1 px-4 rounded hover:bg-[#0eff06] hover:text-black ${
                              selectedSubcategory === subcategory
                                ? "bg-[#0eff06] text-black"
                                : ""
                            }`}
                            onClick={() => setSelectedSubcategory(subcategory)}
                          >
                            {subcategory}
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Products */}
        <div className="w-full px-10">
          <h2 className="text-2xl font-bold mb-4 text-[#0eff06] text-center ">
            {selectedCategory}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.productid}
                className="bg-white text-black rounded-lg shadow-lg p-4"
              >
                <img
                  src={product.images}
                  alt={product.productName}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />{" "}
                <p className="text-green-500 font-bold">
                  Precio: ${product.price} MXN
                </p>
                <h3 className="font-bold text-lg mb-2">
                  {product.productName}
                </h3>
                <p className="text-red-500">{product.stock} Disponibles</p>
                <button className="mt-4 w-full bg-gray-900 hover:bg-[#0eff06] text-white hover:text-black py-2 rounded-lg">
                  Ver más
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
