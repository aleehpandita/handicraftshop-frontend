import React, { useState } from 'react'
import PrintObject from '../components/PrintObject'
import { useTranslation } from 'next-i18next'

import { fetchPostJSON } from '../utils/api-helpers'
import { formatAmountForDisplay } from '../utils/stripe-helpers'
import * as config from '../config'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const CARD_OPTIONS = {
  iconStyle: 'solid' as const,
  style: {
    base: {
      iconColor: '#00000',
      color: '#00000',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '18px',
      fontSmoothing: 'antialiased',
      letterSpacing:'2px',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#00000',
      },
    },
    invalid: {
      iconColor: '#ef2961',
      color: '#ef2961',
    },
  },
}

const ElementsForm = (total) => {
console.log('total en element',total.total)
const { t } = useTranslation('checkout')
  const [input, setInput] = useState({
    customDonation: Math.round((total.total)),
    cardholderName: '',
  })
  const [payment, setPayment] = useState({ status: 'initial' })
  const [errorMessage, setErrorMessage] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const PaymentStatus = ({ status }: { status: string }) => {
    switch (status) {
      case 'processing':
      case 'requires_payment_method':
      case 'requires_confirmation':
        return <h2>Processing...</h2>

      case 'requires_action':
        return <h2>Authenticating...</h2>

      case 'succeeded':
        return <h2>Payment Succeeded 🥳</h2>

      case 'error':
        return (
          <>
            <h2>Error 😭</h2>
            <p className="error-message">{errorMessage}</p>
          </>
        )

      default:
        return null
    }
  }

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    // Abort if form isn't valid
    if (!e.currentTarget.reportValidity()) return
    setPayment({ status: 'processing' })

    // Create a PaymentIntent with the specified amount.
    const response = await fetchPostJSON('/api/payment_intents', {
      amount: total,
    })
    setPayment(response)

    if (response.statusCode === 500) {
      setPayment({ status: 'error' })
      setErrorMessage(response.message)
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements!.getElement(CardElement)

    // Use your card Element with other Stripe.js APIs
    const { error, paymentIntent } = await stripe!.confirmCardPayment(
      response.client_secret,
      {
        payment_method: {
          card: cardElement!,
          billing_details: { name: input.cardholderName },
        },
      }
    )

    if (error) {
      setPayment({ status: 'error' })
      setErrorMessage(error.message ?? 'An unknown error occured')
    } else if (paymentIntent) {
      setPayment(paymentIntent)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      
        
        <fieldset >
          <div className="p-5">
           <label>Cardholder Name</label>
          <input
            placeholder="Cardholder name"
            className="rounded-sm lg:px-4 md:px-4 xl:px-4  md:py-3 lg:py-3 xl:py-3 md:mt-3 lg:mt-3 py-3  xl:mt-3 focus:outline-none bg-gray-100 w-full"
            type="Text"
            name="cardholderName"
            onChange={handleInputChange}
            required
          />
          </div>

          <label> Numero de tarjeta : </label>
          
          <div className="p-5">
            <CardElement
              options={CARD_OPTIONS}
              onChange={(e) => {
                if (e.error) {
                  setPayment({ status: 'error' })
                  setErrorMessage(e.error.message ?? 'An unknown error occured')
                }
              }}
            />
          </div>
        </fieldset>
        <button type="submit"
          disabled={
            !['initial', 'succeeded', 'error'].includes(payment.status) ||
            !stripe
          } 
          className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                  <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                  <span className="ml-2 mt-5px">{t('procceed')}  {formatAmountForDisplay(input.customDonation, config.CURRENCY)}</span>
                </button>

    
      </form>
      <PaymentStatus status={payment.status} />
      <PrintObject content={payment} />
    </>
  )
}

export default ElementsForm
