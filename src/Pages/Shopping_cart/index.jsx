import { useState, useEffect } from "react";
import CartItem from "../../Components/Cart_item";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Navlink } from "../../Components/Navbar_";
import { Footer } from "../../Components/footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../Components/Checkoutforms";
import { BiCool } from "react-icons/bi";
import CardsEnvio from "../../Components/cards";

const stripePromise = loadStripe(
  "pk_test_51PoIHhRvRsZDGGXQtFoKdaPS4R5wx1JPv6LBB4sxo2VeNNgmGMVxHftnGvFbsCTQzhBxumNoAej9ysuid53PFomE00JEY4rQYf"
);

const ShoppingCart = () => {
  const apiUrl = import.meta.env.VITE_APIBACK_URL;
  const [cartItems, setCartItems] = useState([]);
  const [profileData, setProfileData] = useState(null);
  const [showPayment, setShowPayment] = useState(false); // Nuevo estado para mostrar el formulario
  const [paymentItems, setPaymentItems] = useState(null); // Estado para almacenar los datos de pago
  const [shippingCost, setShippingCost] = useState(0);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del perfil", error);
      });
  }, []);

  const initialCartItems = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/pedido`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const pedidos = response.data;
      const items = pedidos.flatMap((pedido) =>
        pedido.productos.map((producto) => ({
          id: producto.producto,
          name: producto.product_name,
          quantity: producto.cantidad,
          price: producto.precio,
          image: producto.image,
          product_stock: producto.product_stock,
          pedido_delete: pedido._id,
        }))
      );
      setCartItems(items);
      if (items.length > 0) {
        setShippingCost(300);
      } else {
        setShippingCost(0);
      }
    } catch (error) {
      console.error("Error al obtener los pedidos:", error);
    }
  };

  useEffect(() => {
    initialCartItems();
  }, []);

  const handleDelete = async (productoId, pedidoId) => {
    try {
      await axios.delete(`${apiUrl}/api/pedido/${pedidoId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCartItems(cartItems.filter((item) => item.id !== productoId));
    } catch (error) {
      console.error("Error al eliminar el pedido:", error);
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    const items = {
      orderId: Math.floor(Math.random() * 1000), // Ejemplo de generación de orderId. Puedes cambiarlo según tu lógica.
      items: cartItems.map((item) => ({
        product_name: item.name,
        amount: item.price,
        cantidad: item.quantity,
        itemId: item.id,
      })),
      total: totalFinal, // Usa el total calculado
    };

    setPaymentItems(items); // Establecer los datos para el formulario de pago
    setShowPayment(true); // Mostrar el formulario de pago
  };

  const totalPriceProducts = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const totalFinal = totalPriceProducts + shippingCost;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-black to-[#0f680c]">
      <Navlink />
      <br />
      <br />
      <div className="flex-grow sm:p-12 flex flex-col items-center">
        <h1 className="text-center text-[#0eff06] text-3xl font-bold mb-4">
          Carrito de compras
        </h1>
        <div className="bg-[#00000060] rounded-xl p-4 sm:p-12 w-full sm:w-11/12">
          <div className="bg-black rounded-xl p-4 sm:p-12">
            <div className="flex flex-col sm:flex-row text-white">
              <div className="cards_container w-full sm:w-3/5 flex flex-col py-6 px-3">
                {cartItems.length > 0 ? (
                  <TransitionGroup>
                    {cartItems.map((item) => (
                      <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="item"
                      >
                        <CartItem
                          id={item.id}
                          name={item.name}
                          quantity={item.quantity}
                          price={item.price}
                          product_stock={item.product_stock}
                          onDelete={() =>
                            handleDelete(item.id, item.pedido_delete)
                          }
                          onQuantityChange={handleQuantityChange}
                          image={item.image}
                        />
                      </CSSTransition>
                    ))}
                  </TransitionGroup>
                ) : (
                  <p className="text-white text-center flex justify-center p-2">
                    Todavía no has añadido productos a tu carrito{" "}
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
                )}
              </div>

              <div className="price_container w-full sm:w-2/5 p-4">
                <div className="price border-2 rounded-lg p-4 mt-2 border-[#0EFF06]">
                  <h2 className="text-[#0EFF06] mb-4 text-2xl sm:text-3xl">
                    Envío
                  </h2>
                  <div className="adrees_container mb-4 text-lg sm:text-xl font-thin">
                    {profileData && profileData.ciudad ? (
                      <>
                        <h2 className="text-white mb-2">
                          Ciudad:{" "}
                          <span className="text-white">
                            {profileData.ciudad}
                          </span>
                        </h2>
                        <h2 className="text-white mb-2">
                          Calle:{" "}
                          <span className="text-white">
                            {profileData.calle}
                          </span>
                        </h2>
                        <h2 className="text-white mb-2">
                          Estado:{" "}
                          <span className="text-white">
                            {profileData.delegacion}
                          </span>
                        </h2>
                        <h2 className="text-white mb-2">
                          Código postal:
                          <span className="text-white"> {profileData.cp}</span>
                        </h2>
                        <h2 className="text-white mb-2">
                          Referencia:{" "}
                          <span className="text-white">
                            {profileData.referencias}
                          </span>
                        </h2>
                        <div className="total_container text-xl sm:text-2xl flex flex-col">
                          <p className="text-white mb-2">
                            Productos{" "}
                            <span className="total_productos text-white">
                              $
                              {totalPriceProducts.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </p>
                          <p className="text-white mb-2">
                            Envío{" "}
                            <span className="total_shipping text-white">
                              $
                              {shippingCost.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </p>
                          <p className="text-white mb-2 text-center p-4">
                            Total pedido{" "}
                            <span className="text-[#0EFF06] font-bold">
                              $
                              {totalFinal.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </p>
                          <div className="button_container">
                            {!showPayment ? (
                              <button
                                className="bg-[#0eff06] w-full text-black font-bold px-4 py-2 rounded-xl mb-4 hover:text-white hover:bg-gradient-to-r from-[#06ff6e] to-[#0eff06]"
                                onClick={handleCheckout}
                                disabled={totalFinal <= 300}
                              >
                                Continuar con la compra
                              </button>
                            ) : (
                              <Elements
                                stripe={stripePromise}
                                options={{
                                  mode: "payment",
                                  amount: paymentItems.total * 100,
                                  currency: "mxn",
                                  appearance: { theme: "night" },
                                }}
                              >
                                <CheckoutForm items={paymentItems} />
                              </Elements>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-white">
                          Antes de continuar, por favor completa tu perfil con
                          tus datos de envío{" "}
                          <BiCool className="text-[#0EFF06]" />
                        </p>
                        <Link
                          to="/editoruser"
                          className="text-blue-500 mt-6 text-base sm:text-lg"
                        >
                          Completar perfil
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardsEnvio />
      <Footer />
    </div>
  );
};

export default ShoppingCart;
