import React from 'react'
import { useTranslation } from 'next-i18next'

const Register: React.FC = ({}) => {
  const { t } = useTranslation('login')
  return (
    <div>
        <div className="bg-white w-full md:px-10 lg:px-10 xl:px-10  md:m-auto lg:m-auto xl:m-auto md:my-10 lg:my-10 xl:my-10 shadow-md">
            <div className="md:py-8 xl:py-8 lg:py-8  md:px-8 lg:px-8 xl:px-8 rounded-xl">
                <h1 className="font-medium md:text-2xl xl:text-2xl lg:text-2xl text-sm mt-3  md:mt-3 lg:mt-3 xl:mt-3  text-center">{t('new-client')} </h1>
                <form action="" className="md:mt-6 lg:mt-6 xl:mt-6">
                    <div className="md:my-5 xl:my-5 lg:my-5 text-sm">
                        <label htmlFor="email" className="block text-black mt-3">{t('email')}</label>
                        <input type="email" id="email" className="rounded-sm lg:px-4 md:px-4 xl:px-4  md:py-3 lg:py-3 xl:py-3 md:mt-3 lg:mt-3 py-3  xl:mt-3 focus:outline-none bg-gray-100 w-full" placeholder={t('email')} />
                    </div>
                    <div className="md:my-5 xl:my-5 lg:my-5 text-sm">
                        <label htmlFor="password" className="block text-black mt-3">{t('pass')}</label>
                        <input type="password" id="password" className="rounded-sm md:px-4 lg:px-4 xl:px-4 md:py-3 lg:py-3 py-3 xl:py-3  md:mt-3 lg:mt-3 xl:mt-3  focus:outline-none bg-gray-100 w-full" placeholder={t('pass')} />

                    </div>

                    <div className="xl:my-5 my-5 lg:my-5 md:my-5 text-sm">
                        <label htmlFor="confirmpassword" className="block text-black">{t('confirm-pass')}</label>
                        <input type="confirmpassword" id="confirmpassword" className="rounded-sm md:px-4 lg:px-4 xl:px-4 md:py-3 xl:py-3 lg:py-3 py-3 xl:mt-3 lg:mt-3 md:mt-3 focus:outline-none bg-gray-100 w-full" placeholder={t('confirm-pass')} />

                    </div>

                    <div className="md:my-5 lg:my-5 my-5 xl:my-5 text-sm">
                        <label htmlFor="preferences" className="block text-black">{t('preferences')}</label>

                    </div>

                    <button className="block text-center text-white bg-gray-800 md:p-3 p-3 lg:p-3 xl:p-3 duration-300 rounded-sm hover:bg-black w-full uppercase font-bold">{t('register')} </button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Register
