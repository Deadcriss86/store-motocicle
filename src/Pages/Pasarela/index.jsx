import CheckoutForm from "../../Components/Checkoutforms";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PoIHhRvRsZDGGXQtFoKdaPS4R5wx1JPv6LBB4sxo2VeNNgmGMVxHftnGvFbsCTQzhBxumNoAej9ysuid53PFomE00JEY4rQYf"
);

const calculateOrderAmount = (itemsArray) => {
  let total = 0;
  itemsArray.forEach((item) => {
    total += item.amount;
  });
  return Math.round(total * 100);
};

const items = {
  orderId: 100,
  items: [
    { product_name: "Coca de 2 litros", amount: 10.99, cantidad: 1 },
    { product_name: "Doritos Nacho", amount: 5.99, cantidad: 2 },
  ],
  total: 16.98,
  username_author: "Valentin",
};

export const Pasarela = () => {
  const amount = calculateOrderAmount(items.items);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-50">
      <div className="w-[30vw] min-w-[500px] p-10 shadow-lg rounded-lg bg-white">
        <p className="text-lg font-semibold text-center text-gray-700 mb-4">
          Por favor paga: ${amount / 100}
        </p>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: amount,
            currency: "mxn",
            appearance: { theme: "night" },
          }}
        >
          <CheckoutForm items={items} />
        </Elements>
      </div>
    </div>
  );
};
