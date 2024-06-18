import React, { useState } from "react";

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
    <div className="p-2 flex mb-3 rounded-lg bg-[#1f1f1f] text-lg">
      <div className="avatar">
        <div className="w-24 rounded">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="Product"
          />
        </div>
      </div>
      <div className="card_info flex flex-row justify-between w-full">
        <div className="info ml-6 flex flex-col justify-center content-center min-h-full">
          <h2>{name}</h2>
          <h2 className="font-thin">id:{id}</h2>
        </div>
        <div className="flex justify-center items-center min-h-full ml-6">
          <button className="mr-6" onClick={handleIncrease}>
            +
          </button>
          <h2 className="quantity">{itemQuantity}</h2>
          <button className="ml-6" onClick={handleDecrease}>
            -
          </button>
        </div>
        <div className="price_container flex justify-center items-center min-h-full ml-6">
          <h2 className="price">${getTotalPrice()}</h2>
        </div>
        <div className="delete_container ml-6 flex justify-center items-center min-h-full">
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
