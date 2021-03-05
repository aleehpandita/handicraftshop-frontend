import React, { useContext } from 'react'
import { useTranslation } from 'next-i18next'
import { useCart } from 'contexts/cart/cart.provider'
import { DrawerContext } from 'contexts/drawer/drawer.provider'
import CartItem from 'components/cart-item'
import { CURRENCY } from 'helpers/constants'
import CurrencyFormat from 'react-currency-format'
import { totalmem } from 'os'
import { Elements } from '@stripe/react-stripe-js'
import getStripe from '../utils/get-stripejs'
import ElementsForm from '../components/ElementsForm'

const ShoppingCart: React.FC = () => {
  const { state, dispatch } = useContext(DrawerContext)
  const { items, calculatePrice } = useCart()
  const [coupon, setCoupon] = React.useState(0)

  const [stripeItem, setStripe] = React.useState(false)
  const [paypalItem, setPaypal] = React.useState(false)

  const [Realtotal, setTotal] = React.useState(0)

  const couponRef = React.useRef()
  const [textCoupon, settextCoupon] = React.useState('')
  const updateCoupon = () => {
    // settextCoupon(item)
    // if(couponRef!=undefined){
    //   const value = (couponRef?.current!.value);
    // }else{
    //   const value = ""
    // }
    settextCoupon('dwew')
    // settextCoupon(couponRef?.current!.value)
    // buscar cupon en bd y sacar descuento ejemplo 10%
    setCoupon(15 / 100)
    setTotal(calculatePrice() - (calculatePrice() * coupon))
    //   const sub = calculatePrice()

  //   const calc = sub * (coupon / 100)
  //   setRealtotal(calc)
  }
  const { t } = useTranslation('checkout')

  React.useEffect(() => {
    setTotal(calculatePrice())
    console.log(Realtotal)
  }, [calculatePrice(), Realtotal])

  return (

<div className="flex justify-center my-6">

  <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
    <div className="flex-1">
    <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl"> {t('cart')} </h1><span className="text-red-500 font-bold">Favor de checar que todo sus datos sean los correctos</span>
    <div className="flex  mt-6 -mx-2 lg:flex">
        <div className="lg:px-2 lg:w-1/2 md:w-1/2 xl:w-1/2 w-full">
        <div className="p-2 bg-gray-300 ">
            <h2 className="ml-2 font-bold uppercase">{t('address')}</h2 >

          </div>
          <p className="mb-4 italic text-xl">
          <textarea className="w-full h-24 p-2 bg-gray-100 rounded" defaultValue=" Direccion Reg 96 Calle Hotzuc Zona Industrial Lote 3 Mz 85   Sm. 59 Cp 88530
">

          </textarea>
            </p>
<div className="p-2 bg-gray-300">
            <h2 className="ml-2 font-bold uppercase text-sm">{t('ins-d')}</h2>
          </div>
          <div className="p-2">
            <p className="mb-4 italic">{t('seller-info')}</p>
            <textarea className="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
          </div>
        </div>

      <div className="lg:px-2 lg:w-1/2 md:w-1/2 xl:w-1/2 w-full">
      <div className="p-2 bg-gray-300">
            <h2 className="ml-2 font-bold uppercase">{t('o-details')}</h2>
          </div>
            {items.map((item) => (
                      <CartItem item={item} key={item.id} />
            ))}
       </div>
     </div>
      <div className="  -mx-2 lg:flex">
        <div className="lg:px-2 lg:w-1/2">
        <div className="p-2 bg-gray-300">
            <h2 className="ml-2 font-bold uppercase">{t('methods')}</h2>
          </div>

          <div className="mt-4">
                <span className="text-gray-700"> Choose your method:  </span>
                <div className="mt-2">
                <label className="inline-flex items-center mt-3">
                    <input type="radio" className="form-radio h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">Credit Card</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input type="radio" className="form-radio h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">Paypal</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input type="radio" className="form-radio h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">label</span>
                </label>
              </div>
              </div>
              <div id="stripe_method">
              <Elements stripe={getStripe()}>
                  <ElementsForm total={Realtotal}/>
                </Elements>
              </div>
        </div>

        <div className="lg:px-2 lg:w-1/2">
        <div className="p-2 bg-gray-300 ">
            <h2 className="ml-2 font-bold uppercase text-sm">{t('code')}</h2>
          </div>
          <div className="p-4">
            <p className="mb-4 italic">{t('c-info')}</p>
            <div className="justify-center md:flex">
              <div className="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
                    <input type="text" name="code" id="coupon" placeholder="Apply coupon" ref={couponRef}
                            className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none" />
                      <button onClick={updateCoupon} className="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none">
                        <svg aria-hidden="true" data-prefix="fas" data-icon="gift" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/></svg>
                        <span className="font-medium">Apply coupon</span>
                      </button>
                  </div>
            </div>
          </div>

          <div className="p-4">
            <p className="mb-6 italic">Shipping and additionnal costs are calculated based on values you have entered</p>
              <div className="flex justify-between border-b">
                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Subtotal
                </div>
                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                <span className="font-semibold text-18px text-gray-900">
                        {/* {CURRENCY}
                        {calculatePrice()} */}
                        <CurrencyFormat
                          value={calculatePrice()}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={CURRENCY}
                        />
                      </span>
                </div>
              </div>
                <div className="flex justify-between pt-4 border-b">
                  <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                    <form action="" method="POST">
                      <button type="submit" className="mr-2 mt-1 lg:mt-2">
                        <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" className="w-4 text-red-600 hover:text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"/></svg>
                      </button>
                    </form>
                    Coupon { textCoupon }
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                    {calculatePrice() * coupon }
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  <span className="font-semibold text-18px text-gray-900">
                        {/* {CURRENCY}
                        {calculatePrice()} */}
                        <CurrencyFormat
                          value={calculatePrice() - (calculatePrice() * coupon) }
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={CURRENCY}
                        />
                      </span>
                  </div>
                </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
export default ShoppingCart
