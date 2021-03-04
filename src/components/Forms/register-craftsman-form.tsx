import React from 'react'
import { useTranslation } from 'next-i18next'

const RegisterCraftsmanForm: React.FC = () => {
  const { t } = useTranslation('craftsman')
  const submit = t('submit')
  return (

<div>
        <form action="" className="form bg-white p-4 my-5 relative">
        <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">{t('h2-1')} <span className="text-gray-600">{t('world')}</span></h2>
            <h3 className="text-2xl text-gray-900 font-semibold">
                {t('call')}
            </h3>
            <p className="text-gray-600">
                    {t('help')}
            </p>
            <div className="flex space-x-5 mt-3">
                <input type="text" name="" id="" placeholder="Your Name" className="border p-2  w-1/2" />
                <input type="tel" name="" id="" placeholder="Your Number" className="border p-2 w-1/2" />
            </div>
            <input type="email" name="" id="" placeholder="Your Email" className="border p-2 w-full mt-3" />
            <textarea className="resize  rounded-md border p-2 mt-3 w-full" placeholder={t('textarea')}></textarea>
            <label className="flex justify-start items-start">
                    <div className="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <input type="checkbox" className="opacity-0 absolute" />
                    <svg className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                </div>
                <div className="select-none">{t('consent')}</div>
                </label>
             <input type="submit" value={submit} className="w-full mt-6 bg-gray-900 hover:bg-gray-600 text-white font-semibold p-3" />
        </form>
    </div>
  )
}
export default RegisterCraftsmanForm
