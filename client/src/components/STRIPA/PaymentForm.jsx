import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../../api/axios";
import './Hey.css'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElements),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("successfull payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log(error + "error");
      }
    }
  };

  return (
  <div>
    {!success? 
    <form onSubmit={handleSubmit} >
        <fieldset className="FormGroup"></fieldset>
        <div className="FormRow bg-black">
            <CardElement options={CARD_OPTIONS}/>
        </div>
    </form>    
 : <h2>YOU JUST BOUGHT SPATULA CONGRATS THIS IS THE </h2> }
  </div>
  )
}

export default PaymentForm;
