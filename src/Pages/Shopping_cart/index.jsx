import { useState, useEffect } from "react";
import CartItem from "../../Components/Cart_item";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles_cart.css";
import { Navlink } from "../../Components/Navbar_";
import { Footer } from "../../Components/footer";
import axios from "axios";

function Shopping_cart() {
  const [cartItems, setCartItems] = useState([]);

  const initialCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/pedido", {
        withCredentials: true,
      });
      const pedidos = response.data;
      const items = pedidos.flatMap((pedido) =>
        pedido.productos.map((producto) => ({
          id: producto._id,
          name: producto.product_name,
          quantity: producto.cantidad,
          price: producto.precio,
          image: producto.image,
          pedido_delete: pedido._id,
        }))
      );
      setCartItems(items);
      console.log(pedidos);
    } catch (error) {
      console.error("Error al obtener los pedidos:", error);
    }
  };

  useEffect(() => {
    initialCartItems();
  }, []);

  const handleDelete = async (productoId, pedidoId) => {
    try {
      await axios.delete(`http://localhost:3000/api/pedido/${pedidoId}`, {
        withCredentials: true,
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

  const totalPriceProducts = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const shippingCost = 300;

  const totalFinal = totalPriceProducts + shippingCost;

  return (
    <div className="main flex flex-col bg-black min-h-screen">
      <Navlink />
      <br />
      <br />
      <br />
      <div className="flex-grow bg-gradient-to-t from-black via-[#0faf09] p-4 sm:p-12 flex flex-col items-center">
        <h1 className="text-center text-3xl text-[#0eff06] mb-8">
          Carrito de compras
        </h1>
        <div className="bg-[#00000060] rounded-xl p-4 sm:p-12 w-full sm:w-11/12">
          <div className="bg-black rounded-xl p-4 sm:p-12">
            <div className="flex flex-col sm:flex-row text-white">
              <div className="cards_container w-full sm:w-3/5 flex flex-col py-6 px-3">
                <TransitionGroup>
                  {cartItems.map((item) => (
                    <CSSTransition
                      key={item.id}
                      timeout={500}
                      classNames="item"
                    >
                      <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onDelete={() =>
                          handleDelete(item.id, item.pedido_delete)
                        }
                        onQuantityChange={handleQuantityChange}
                        image={item.image}
                      />
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </div>

              <div className="price_container w-full sm:w-2/5 p-4">
                <div className="price border-4 rounded-lg p-4 mt-2 border-[#0EFF06]">
                  <h2 className="text-white mb-4 text-2xl sm:text-3xl">
                    Envío
                  </h2>
                  <div className="adrees_container mb-4 text-lg sm:text-xl font-thin italic">
                    <h2 className="text-white mb-2">
                      Calle: Ignacio Allende 5739 1202
                    </h2>
                    <h2 className="text-white mb-2">San Manuel</h2>
                    <h2 className="text-white mb-2">72560</h2>
                    <h2 className="text-white">Puebla, Pue.</h2>
                    <button className="text-blue-500 mt-4 text-base sm:text-lg">
                      Agregar otra dirección
                    </button>
                  </div>
                  <div className="total_container text-xl sm:text-2xl flex flex-col">
                    <p className="text-white mb-2">
                      Productos{" "}
                      <span className="total_productos">
                        ${totalPriceProducts}
                      </span>
                    </p>
                    <p className="text-white mb-2">
                      Envío{" "}
                      <span className="total_shipping">${shippingCost}</span>
                    </p>
                    <p className="text-[#0EFF06] mb-2 text-center">
                      Total <span className="total_final">${totalFinal}</span>
                    </p>
                    <div className="button_container">
                      <button className="p-2 bg-[#0EFF06] rounded-lg w-full text-black mt-6">
                        Continuar con la compra
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shopping_cart;
