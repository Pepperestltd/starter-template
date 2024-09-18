import React from "react";
import CheckoutForm from "../forms/CheckoutForm";
import ServiceCheckoutForm from "../forms/ServiceCheckoutForm";
import DigitalProductCheckoutForm from "../forms/DigitalProductCheckoutForm"
import SubscriptionCheckoutForm from "../forms/SubscriptionCheckoutForm";
import { useSearchParams } from "next/navigation";

const CheckoutDetail = ({ setStep, step }) => {
  const searchParams = useSearchParams();
  const checkoutType = searchParams.get("type");
  return (
    <div className="">
      {checkoutType == "products" ? (
        <p>Render physical product checkout form here</p>
      ) :
       
      (
        checkoutType == "digital-products" ? 
        
        <p>Render digital product checkout form here</p>
      :
      (
        checkoutType == "services" ? 
        
        <p>Render services checkout form here</p>
        :

        <p>Render subscription product checkout form here</p>
        
      ) 
      )
      }
    </div>
  );
};

export default CheckoutDetail;