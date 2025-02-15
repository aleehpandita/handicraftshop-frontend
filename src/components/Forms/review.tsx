import React, { useContext } from 'react'
import { useTranslation } from 'next-i18next'
import { useCart } from 'contexts/cart/cart.provider'
import { DrawerContext } from 'contexts/drawer/drawer.provider'

const ReviewForm: React.FC = () => {
  const { addItem, getItem, removeItem } = useCart()
  const { state, dispatch } = useContext(DrawerContext)
  const { t } = useTranslation('login')
  return (

<div className="mx-auto bg-white shadow-lg rounded-lg  max-w-sm w-full">
   <div className="mb-1 tracking-wide py-4 w-full" >
      <h2 className="text-gray-800 font-semibold mt-1">67 Users reviews</h2>
      <div className="border-b -mx-8 px-8 pb-3">
         <div className="flex items-center mt-1">
            <div className=" w-1/5 text-indigo-500 tracking-tighter">
               <span>5 star</span>
            </div>
            <div className="w-3/5">
               <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-7/12 bg-indigo-600 rounded-lg h-2"></div>
               </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
               <span className="text-sm">51%</span>
            </div>
         </div>
         <div className="flex items-center mt-1">
            <div className="w-1/5 text-indigo-500 tracking-tighter">
               <span>4 star</span>
            </div>
            <div className="w-3/5">
               <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className="w-1/5 bg-indigo-600 rounded-lg h-2"></div>
               </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
               <span className="text-sm">17%</span>
            </div>
         </div>
         <div className="flex items-center mt-1">
            <div className="w-1/5 text-indigo-500 tracking-tighter">
               <span>3 star</span>
            </div>
            <div className="w-3/5">
               <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-3/12 bg-indigo-600 rounded-lg h-2"></div>
               </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
               <span className="text-sm">19%</span>
            </div>
         </div>
         <div className="flex items-center mt-1">
            <div className=" w-1/5 text-indigo-500 tracking-tighter">
               <span>2 star</span>
            </div>
            <div className="w-3/5">
               <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-1/5 bg-indigo-600 rounded-lg h-2"></div>
               </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
               <span className="text-sm">8%</span>
            </div>
         </div>
         <div className="flex items-center mt-1">
            <div className="w-1/5 text-indigo-500 tracking-tighter">
               <span>1 star</span>
            </div>
            <div className="w-3/5">
               <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-2/12 bg-indigo-600 rounded-lg h-2"></div>
               </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
               <span className="text-sm">5%</span>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}

export default ReviewForm
