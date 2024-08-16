import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!stripe) return;

    const createPaymentIntent = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/create-payment-intent",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items }),
          }
        );

        const data = await response.json();

        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          throw new Error("Failed to retrieve clientSecret from the server.");
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
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
  }, [stripe, clientSecret]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      setMessage("Stripe, elements, or clientSecret is missing.");
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
        return_url: "http://localhost:3000",
      },
      clientSecret, // Asegúrate de pasar el clientSecret aquí
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {clientSecret && (
        <>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pay now"
              )}
            </span>
          </button>
          {message && <div id="payment-message">{message}</div>}
        </>
      )}
    </form>
  );
}
