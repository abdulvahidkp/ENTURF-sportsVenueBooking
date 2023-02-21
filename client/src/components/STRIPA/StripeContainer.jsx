import React from 'react'
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const Public_key = ""
const stripeTestPromise = loadStripe(Public_key)

function StripeContainer() {
  return (
    <div>
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    </div>
  )
}

export default StripeContainer