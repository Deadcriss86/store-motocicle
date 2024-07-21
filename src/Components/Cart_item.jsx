import { useState } from "react";

const CartItem = ({
  id,
  name,
  quantity,
  price,
  onDelete,
  onQuantityChange,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    onQuantityChange(id, newQuantity);
  };

  const handleDecrease = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      onQuantityChange(id, newQuantity);
    }
  };

  const getTotalPrice = () => {
    return itemQuantity * price;
  };

  return (
    <div className="p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center bg-[#1f1f1f] text-lg mb-3 rounded-lg max-w-4xl mx-auto lg:space-x-4">
      <p className="">Contactanos</p>
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto mb-4 lg:mb-0">
        <div className="avatar w-full lg:w-24 h-24 lg:h-auto mb-4 lg:mb-0 flex justify-center items-center">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="Product"
            className="w-full h-full rounded object-cover"
          />
        </div>
        <div className="info ml-4 lg:ml-6 flex flex-col justify-center items-center lg:items-start w-full lg:w-auto">
          <h2 className="text-base lg:text-lg text-center lg:text-left">{name}</h2>
          <p className="text-sm font-thin text-center lg:text-left">ID: {id}</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-auto lg:space-x-4">
        <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto justify-center lg:justify-start">
          <button
            className="p-2 bg-gray-700 text-white rounded"
            onClick={handleDecrease}
          >
            -
          </button>
          <h2 className="quantity mx-4">{itemQuantity}</h2>
          <button
            className="p-2 bg-gray-700 text-white rounded"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        <div className="price_container flex justify-center items-center w-full lg:w-auto mb-4 lg:mb-0">
          <h2 className="price text-white">${getTotalPrice()}</h2>
        </div>

        <div className="delete_container mt-4 lg:mt-0 flex justify-center lg:justify-end items-center w-full lg:w-auto">
          <button
            className="p-2 text-red-500 hover:text-red-700"
            onClick={() => onDelete(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};


export default CartItem;
