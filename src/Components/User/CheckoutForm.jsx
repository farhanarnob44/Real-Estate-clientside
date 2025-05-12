import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { form } from "motion/react-client";
import React, { useContext, useEffect, useState } from "react";
import UseeAxiosSecure from "../UseeAxiosSecure";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({ price ,propertyTitle , propertyImage}) => {
  console.log(price);

  console.log(propertyTitle)

    const [menu, setMenu] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/wishlist/")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setMenu(data);
        });
    }, []);
    console.log(menu);





  const { user } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const [clientSecrett, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseeAxiosSecure();
  // const price =

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecrett, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "annonymus",
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log("confirm Error");
    } else {
      console.log("payment intent", paymentIntent);

      if (paymentIntent.status === "succeeded") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Payment Successful`,
          showConfirmButton: false,
          timer: 1500,
        });
        setTransactionId(paymentIntent.id);

        // now save the payment to the database

        const payment = {
          propertyTitle : propertyTitle,
          propertyImage : propertyImage,
          email: user.email,
          price: price,
          transactionId : paymentIntent.id,
          date: new Date(), // utc date convert. use momentjs
          wishlisthId: menu.map((item) => item._id),
          propertyId: menu.map((item) => item.id),
          status: "pending",

          
        };

       const res = await axiosSecure.post('/payments',payment)
       console.log('payment saved', res);

      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="h-10"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe} className="btn btn-primary">
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && (
        <p className="text-green-700 font-bold">
          Your Transaction Id is {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
