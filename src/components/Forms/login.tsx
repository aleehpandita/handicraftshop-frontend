import React from 'react'
import { useTranslation } from 'next-i18next'

const Login: React.FC = () => {
  const { t } = useTranslation('login')
  return (
    <div>
        <div className="bg-white w-full md:px-10 xl:px-10 lg:px-10  md:m-auto lg:m-auto xl:m-auto lg:my-10 md:my-10 xl:my-10 shadow-md">
            <div className="md:py-8 xl:py-8 md:px-8 lg:py-8  rounded-xl">
                <h1 className="font-medium text-2xl md:mt-3 lg:mt-3  xl:mt-3  text-center">{t('login-h2')} </h1>
                <form action="" className=" mt-0 xl:mt-6 lg:mt-6 md:mt-6">
                    <div className="lg:my-5 xl:my-5 md:my-5 text-sm">
                        <label htmlFor="email" className="block text-black">{t('email')}</label>
                        <input type="email" id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder={t('email')} />
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="password" className="block text-black">{t('pass')}</label>
                        <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder={t('pass')} />
                        <div className="flex justify-end mt-2 text-xs text-gray-600">
                           <a href="../../pages/auth/forget_password.html hover:text-black">{t('forget-pass')}</a>
                        </div>
                    </div>

                    <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full uppercase font-bold">{t('login-h2')} </button>
                </form>

                 <div className="flex md:justify-between justify-center items-center mt-10 w-full">
                    <p className="md:mx-2 text-sm font-light w-full text-center text-gray-800"> {t('social')} </p>
                </div>

                <div className="grid md:grid-cols-2 gap-2 mt-7">
                    <div>
                        <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
                    </div>
                    <div>
                        <button className="text-center w-full text-white bg-red-800 p-3 duration-300 rounded-sm hover:bg-blue-500">Google</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Login
