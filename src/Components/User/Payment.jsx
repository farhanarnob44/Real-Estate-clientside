import React from "react";
import SectionTitle from "../SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();

  const { item } = location.state;
  console.log(item)
  const price = item.priceRange;
  const propertyTitle = item.propertyTitle;
  const propertyImage = item.propertyImage
  console.log(propertyTitle)

  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

  console.log(stripePromise);

  return (
    <div>
      <SectionTitle
        heading="Pay Items"
        subHeading="Faster and eaiser"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} propertyTitle={propertyTitle} propertyImage= {propertyImage}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
