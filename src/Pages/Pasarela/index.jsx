import CheckoutForm from "../../Components/Checkoutforms";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./styles.css";

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
  items: [
    { id: "xl-tshirt", amount: 10.99 },
    { id: "sm-tshirt", amount: 5.99 },
  ],
};

export const Pasarela = () => {
  const amount = calculateOrderAmount(items.items);

  return (
    <div className="App">
      <p>Por favor paga: ${amount / 100}</p>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: amount,
          currency: "mxn",
          appearance: { theme: "night" },
        }}
      >
        <CheckoutForm items={items}></CheckoutForm>
      </Elements>
    </div>
  );
};
