import { useEffect, useState } from "react";
import axios from "axios";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm({ items }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const apiUrl = import.meta.env.VITE_APIBACK_URL;

  useEffect(() => {
    if (!stripe) return;

    const createPaymentIntent = async () => {
      try {
        const response = await axios.post(
          `${apiUrl}/api/create-payment-intent`,
          { items },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = response.data;

        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          throw new Error("No se pudo obtener el clientSecret del servidor.");
        }
      } catch (error) {
        setMessage("Error al crear el PaymentIntent: " + error.message);
      }
    };

    createPaymentIntent();
  }, [items, stripe]);

  useEffect(() => {
    if (!stripe || !clientSecret) return;

    const clientSecretFromURL = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecretFromURL) return;

    stripe
      .retrievePaymentIntent(clientSecretFromURL)
      .then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("¡Pago exitoso!");
            break;
          case "processing":
            setMessage("Tu pago está siendo procesado.");
            break;
          case "requires_payment_method":
            setMessage("Tu pago no fue exitoso, por favor intenta de nuevo.");
            break;
          default:
            setMessage("Algo salió mal.");
            break;
        }
      });
  }, [stripe, clientSecret]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      setMessage("Faltan Stripe, elements o clientSecret.");
      return;
    }

    setIsLoading(true);

    // Primero, se llama a elements.submit() para validar el formulario
    const { error: submitError } = await elements.submit();

    if (submitError) {
      setMessage(submitError.message);
      setIsLoading(false);
      return;
    }

    // Después de que elements.submit() se complete con éxito, confirmamos el pago
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://store-motocicle-six.vercel.app/Shopping",
      },
      clientSecret, // Asegúrate de pasar el clientSecret aquí
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("Ocurrió un error inesperado.");
      }
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="">
      {clientSecret && (
        <>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <button
            disabled={isLoading || !stripe || !elements}
            className="bg-[#0eff06] w-full text-black font-bold px-4 py-2 rounded-xl mt-4 hover:text-white hover:bg-gradient-to-r from-[#06ff6e] to-[#0eff06]"
            id="submit"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pagar ahora"
              )}
            </span>
          </button>
          {message && <div id="payment-message">{message}</div>}
        </>
      )}
    </form>
  );
}
