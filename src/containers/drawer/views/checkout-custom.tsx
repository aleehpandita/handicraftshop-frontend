import { useContext, useState } from 'react'
import NumberFormat from 'react-number-format'
import { DrawerContext } from 'contexts/drawer/drawer.provider'
import { Scrollbar } from 'components/scrollbar'
import ArrowLeft from 'assets/icons/arrow-left'
import Input from 'components/input'
import Button from 'components/button'
import { useCart } from 'contexts/cart/cart.provider'
import Textarea from 'components/textarea'
import { SendingOrder } from 'helpers/send-order'
import OrderSubmit from './order-submit'
import { useRouter } from 'next/router'

import {
  InputBase,
  TextBoxCommonBase,
  TextBoxEnable
} from 'components/utils/theme'
const initialState = {
  phone_number: '',
  name: '',
  email: '',
  address: '',
  postal_code: '',
  suite: ''
}

export default function Checkout () {
  const { dispatch } = useContext(DrawerContext)
  const [formData, setFormData] = useState(initialState)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { items, calculatePrice, clearCart } = useCart()
  const router = useRouter()

  const hideCheckout = () => {
    dispatch({
      type: 'TOGGLE_CHECKOUT_VIEW',
      payload: {
        showCheckout: false
      }
    })
  }
  const handleClose = () =>
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false
      }
    })

  const submitOrder = async () => {
    const { name, email, address, postal_code, suite, phone_number } = formData
    if (!phone_number.trim()) {
      setError({
        field: 'phone_number',
        message: 'Phone number is required'
      })
      return
    }

    setLoading(true)

    // const res = await fetch('/api/order', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     items: items,
    //     address: `${name} ${address} ${postal_code} ${suite}`,
    //     phone_number: phone_number,
    //     email: email,
    //     bill_amount: calculatePrice()
    //   })
    // })
    const body = {
      body: {
        items: items,
        address: `${name} ${address} ${postal_code} ${suite}`,
        phone_number: phone_number,
        email: email,
        bill_amount: calculatePrice()
      }
    }
    const res = await SendingOrder(body)

    if (res.status === 200) {
      setLoading(true)
      handleClose()
      hideCheckout()
      setSuccess(true)
      setLoading(false)
      router.push('/checkout')
    } else {
      // router.push('/checkout')
      hideCheckout()
      setError(true)
    }
  }

  const onChange = (e) => {
    const { value, name } = e.currentTarget
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/checkout')
  }

  if (success) {
    // en lugar de return component redireccionare
    // return <OrderSubmit />
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full flex justify-center relative px-30px py-20px">
        <button
          className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900"
          onClick={hideCheckout}
          aria-label="close"
        >
          <ArrowLeft />
        </button>
        <h2 className="font-bold text-24px m-0">Checkout</h2>
      </div>

      <Scrollbar className="checkout-scrollbar flex-grow">
        <div className="flex flex-col px-30px pt-20px">
          <div className="flex flex-col mb-45px">
            <span className="flex font-semibold text-gray-900 text-18px mb-15px">
              Contact Information
            </span>
            <NumberFormat
              format="+1 (###) ###-####"
              mask="_"
              placeholder="Mobile Phone Number"
              className={`${InputBase} ${TextBoxCommonBase} ${TextBoxEnable} mb-10px`}
              value={formData.phone_number}
              onValueChange={({ value }) =>
                setFormData({
                  ...formData,
                  phone_number: value
                })
              }
            />
            {error?.field === 'phone_number' && (
              <p className="text-12px font-semibold text-error pt-10px pl-15px">
                {error.message}
              </p>
            )}
            <Input
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col">
            <span className="flex font-semibold text-gray-900 text-18px mb-15px">
              Shipping Address
            </span>
            <Input
              placeholder="Name"
              className="mb-10px"
              name="name"
              value={formData.name}
              onChange={onChange}
            />

            <Textarea
              placeholder="Enter Address"
              className="mb-10px"
              name="address"
              value={formData.address}
              onChange={onChange}
            />

            <div className="flex items-center mb-10px">
              <Input
                placeholder="Postal Code"
                style={{ width: 'calc(50% - 5px)', marginRight: '5px' }}
                name="postal_code"
                value={formData.postal_code}
                onChange={onChange}
              />
              <Input
                placeholder="Apartment, Suite, etc."
                style={{ width: 'calc(50% - 5px)', marginLeft: '5px' }}
                name="suite"
                value={formData.suite}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </Scrollbar>

      <div className="flex flex-col p-30px">
        <Button className="big w-full" onClick={submitOrder} loading={loading}>
          Order Now
        </Button>
      </div>
    </div>
  )
}
