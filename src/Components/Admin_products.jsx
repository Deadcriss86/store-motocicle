import { useState } from "react";
import EditProductForm from "./Edit_product_form";

const Admin_products = ({
  id,
  name,
  price,
  stock,
  description,
  images,
  onDelete,
}) => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = () => {
    setEditingProduct({
      id,
      name,
      price,
      stock,
      description,
    });
  };

  return (
    <div className="p-2 flex mb-3 rounded-lg bg-[#3F3F3F] lg:text-lg text-white text-base">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={images} alt="Product" />
        </div>
      </div>
      <div className="card_info flex flex-row justify-between w-full">
        <div className="info ml-6 flex flex-col justify-center content-center min-h-full">
          <h2>{name}</h2>
          <h2 className="font-thin">Id:{id}</h2>
        </div>
        <div className="price_container flex flex-col justify-center items-center min-h-full ml-6">
          <p>Precio:</p>
          <h2 className="price">${price}</h2>
        </div>
        <div className="stock_container flex flex-col justify-center items-center min-h-full ml-6">
          <p>Stock:</p>
          <h2 className="stock">{stock}</h2>
        </div>
        <div className="description_container flex flex-col justify-center items-center min-h-full ml-6">
          <p>Descripción:</p>
          <h2 className="description font-thin">{description}</h2>
        </div>
        <div className="crud_container flex justify-center items-center min-h-full ml-6 space-x-3">
          <button onClick={handleEdit}>Editar</button>
          <button onClick={() => onDelete(id)}>Eliminar</button>
        </div>
      </div>

      {editingProduct && (
        <dialog open className="modal bg-[#000000c7]">
          <div className="modal-action">
            <EditProductForm
              product={editingProduct}
              closeModal={() => setEditingProduct(null)}
            />
            <button
              className="btn border-2 border-[#0EFF06] rounded-lg p-3"
              onClick={() => setEditingProduct(null)}
            >
              Cancelar
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Admin_products;
