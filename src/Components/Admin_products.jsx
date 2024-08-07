const Admin_products = (props) => {
  return (
    <div className="p-2 flex mb-3 rounded-lg bg-[#3F3F3F] lg:text-lg text-white text-base">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={props.images} alt="Product" />
        </div>
      </div>
      <div className="card_info flex flex-row justify-between w-full">
        <div className="info ml-6 flex flex-col justify-center content-center min-h-full">
          <h2>{props.name}</h2>
          <h2 className="font-thin">Id:{props.id}</h2>
        </div>
        <div className="price_container flex flex-col justify-center items-center min-h-full ml-6">
          <p>Precio:</p>
          <h2 className="price">${props.price}</h2>
        </div>
        <div className="stock_container flex flex-col justify-center items-center min-h-full ml-6">
          <p>Stock:</p>
          <h2 className="stock">{props.stock}</h2>
        </div>
        <div className="description_container flex flex-col justify-center items-center min-h-full ml-6">
          <p>Descripcion:</p>
          <h2 className="description font-thin">{props.description}</h2>
        </div>
        <div className="crud_container flex justify-center items-center min-h-full ml-6 space-x-3">
          <button>Editar</button>
          <button>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default Admin_products;
