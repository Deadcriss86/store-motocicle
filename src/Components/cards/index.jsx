function CardsEnvio() {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row justify-around items-center text-black px-4 md:px-10  my-4 lg:mx-40 2xl:mx-96 *:">
        {/* Tarjeta de pagos */}
        <div className="border-2 border-[#0eff06] rounded-lg w-full max-w-xs md:max-w-sm lg:w-80 h-48 bg-white text-justify card-compact mb-4 lg:mb-0">
          <h3 className="border-b-2 border-[#0eff06] text-center font-bold p-2">
            Pagos a crédito o débito
          </h3>
          <p className="flex flex-row justify-items-center mt-2 mr-4">
            <img
              className="w-20 h-10 mt-6 mr-2"
              src="https://avatarmotoapi.s3.us-east-2.amazonaws.com/Assets/cardcredit.png"
            />
            Con Mercado Pago, tienes pagos con tarjetas de débito y meses sin
            intereses con tarjeta de crédito. ¡Y siempre es seguro!
          </p>
        </div>

        {/* Tarjeta de compras protegidas */}
        <div className="border-2 border-[#0eff06] rounded-lg w-full max-w-xs md:max-w-sm lg:w-80 h-48 bg-white text-justify card-compact mb-4 lg:mb-0">
          <h3 className="border-b-2 border-[#0eff06] text-center font-bold p-2">
            Compras protegidas
          </h3>
          <p className="flex flex-row justify-items-center mt-2 mr-4">
            <img
              className="w-20 h-16 mt-4 mr-2"
              src="https://avatarmotoapi.s3.us-east-2.amazonaws.com/Assets/locked.webp"
            />
            Te acompañaremos hasta que recibas lo que compraste. Y si no es lo
            que esperabas, te devolvemos el dinero.
          </p>
        </div>
        {/* Tarjeta de envíos seguros */}
        <div className="border-2 border-[#0eff06] rounded-lg w-full max-w-xs md:max-w-sm lg:w-80 h-48 bg-white text-justify card-compact">
          <h3 className="border-b-2 border-[#0eff06] text-center font-bold p-2">
            Envíos seguros
          </h3>
          <p className="flex flex-row justify-items-center mt-2 mr-4">
            <img
              className="w-20 h-20 mt-2 mr-2"
              src="https://avatarmotoapi.s3.us-east-2.amazonaws.com/Assets/truck1.jpg"
            />
            Elige Mercado Envíos y sigue tu compra hasta que llegue a tus manos.
            Tienes envíos gratis en productos seleccionados.
          </p>
        </div>
      </div>
    </>
  );
}
export default CardsEnvio;
