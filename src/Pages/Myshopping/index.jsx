import { useState, useEffect } from "react";
import axios from "axios";
import DetalleModal from "./DetalleModal";
import { Footer } from "../../Components/footer";
import { Navlink } from "../../Components/Navbar_";
import { IoBagHandleOutline, IoLocationSharp } from "react-icons/io5";

const MisCompras = () => {
  const apiUrl = import.meta.env.VITE_APIBACK_URL;
  const [compras, setCompras] = useState(null);
  const [selectedCompra, setSelectedCompra] = useState(null);
  const [error, setError] = useState(false);
  const [userdata, setUserdata] = useState(null);
  const [imageUrls, setImageUrls] = useState({});

  const formatDate = (date) => {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return date.toLocaleDateString("en-GB", options);
  };

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/order/find`, {
          withCredentials: true,
        });
        const comprasData = response.data.order;
        setCompras(comprasData);
        setUserdata(response.data.author_adress);

        comprasData.forEach((compra) => {
          compra.items.forEach((item) => {
            dataproduct(item.itemId);
          });
        });
      } catch (error) {
        console.error("Error fetching compras:", error);
        setError(true);
      }
    };

    fetchCompras();
  }, [apiUrl]);

  const handleVerDetalle = (compra) => {
    setSelectedCompra(compra);
  };

  const handleCloseModal = () => {
    setSelectedCompra(null);
  };

  const dataproduct = async (productid) => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/getproduct`, {
        params: { id: productid },
      });
      setImageUrls((prevImages) => ({
        ...prevImages,
        [productid]: data.images,
      }));
    } catch (error) {
      console.error("Error fetching product image:", error);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col bg-gradient-to-t from-black to-[#148710]">
        <Navlink />
        <br />
        <br />
        <br />
        <br />{" "}
        <h1 className="text-3xl font-bold text-center text-[#0eff06]">
          Mis compras
        </h1>
        <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8 w-full max-w-6xl mx-4 sm:mx-8 lg:mx-auto my-6">
          <div className="w-full flex justify-center">
            {error ? (
              <p className="text-white text-center flex justify-center p-2">
                Todavía no tienes compras{" "}
                <svg
                  className="h-8 w-8 text-red-500 ml-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="9" y1="10" x2="9.01" y2="10" />
                  <line x1="15" y1="10" x2="15.01" y2="10" />
                  <path d="M9.5 16a10 10 0 0 1 6 -1.5" />
                </svg>
              </p>
            ) : (
              compras &&
              compras.map((compra, index) => (
                <div
                  key={index}
                  className="bg-gray-900 bg-opacity-50 mb-4 p-4 rounded-lg flex flex-col"
                >
                  <div className="flex w-full justify-between items-center text-white mb-6">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-between items-center">
                        <IoBagHandleOutline
                          size={35}
                          className="text-[#0eff06]"
                        />
                        <p className="ml-2">#{compra.orderId}</p>
                      </div>
                      <p className="ml-8">{formatDate(compra.createdAt)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <IoLocationSharp size={35} className="text-[#0eff06]" />
                      <p className="ml-3">
                        {userdata
                          ? `${userdata.estado}, ${userdata.municipio}`
                          : "Cargando..."}
                      </p>
                    </div>
                  </div>
                  {compra.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-[#1f1f1f] w-full flex rounded-lg mb-3 text-white"
                    >
                      <div className="w-28 rounded-lg bg-gray-100">
                        <img
                          src={imageUrls[item.itemId]}
                          alt={item.product_name}
                          className="object-contain w-28 h-50"
                        />
                      </div>
                      <div className="flex flex-col justify-center ml-3">
                        <p className="font-semibold text-lg">
                          {item.product_name}
                        </p>
                        <p className="font-semibold text-lg ">
                          ${item.amount}{" "}
                          <span className="font-light">x{item.cantidad}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="text-white flex justify-between items-center">
                    <p className="text-lg font-bold text-[#0eff06]">
                      Total: ${compra.total}
                    </p>
                    <button
                      onClick={() => handleVerDetalle(compra)}
                      className="px-4 py-2 bg-[#0eff06] text-gray-900 rounded-lg hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                    >
                      Ver detalle
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <DetalleModal
            isOpen={!!selectedCompra}
            onClose={handleCloseModal}
            compra={selectedCompra}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MisCompras;
