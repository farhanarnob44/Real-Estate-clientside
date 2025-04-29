import React from "react";
import SectionTitle from "../SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {

  const stripePromise =  loadStripe('');


  return (
    <div>
      <SectionTitle
        heading="Pay Items"
        subHeading="Faster and eaiser"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
