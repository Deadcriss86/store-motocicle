import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { PlusIcon } from "@heroicons/react/24/solid";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <div
        className="bg-white cursor-pointer w-56 h-60"
        onClick={() => context.openProductDetail()}
      >
        <figure className="relative mb-2 w-full h-4/5">
          <span className="absolute bottom-0 left-0 px-3 py-0.5 bg-white/60 rounded-lg text-black text-xs m-2">
            {data.data.category}
          </span>
          <img
            src={data.data.image}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div
            className="absolute top-0 right-0 flex justify-center bg-white w-6 h-6 rounded-full m-2"
            onClick={() => context.setCount(context.count + 1)}
          >
            <PlusIcon className="w-6 h-6 text-black"></PlusIcon>
          </div>
        </figure>
        <p className="flex justify-between">
          <span className="text-sm font light">{data.data.title}</span>
          <span className="text-lg font-medium">${data.data.price}</span>
        </p>
      </div>
    </>
  );
};
export default Card;
