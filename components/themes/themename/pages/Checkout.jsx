"use client"
import React from "react";
import { useSearchParams } from "next/navigation";

const CheckoutDetail = ({ setStep, step }) => {
  const searchParams = useSearchParams();
  const checkoutType = searchParams.get("type");
  return (
    <div className="flex justify-center">
      {checkoutType == "products" ? (
        <p className="text-center mt-20 text-purple-800">Render physical product checkout form here</p>
      ) :
       
      (
        checkoutType == "digital-products" ? 
        
        <p className="text-center mt-20 text-purple-800">Render digital product checkout form here</p>
      :
      (
        checkoutType == "services" ? 
        
        <p className="text-center mt-20 text-purple-800">Render services checkout form here</p>
        :

        <p className="text-center mt-20 text-purple-800" >Render subscription product checkout form here</p>
        
      ) 
      )
      }
    </div>
  );
};

export default CheckoutDetail;