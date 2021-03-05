import React, { useState, useRef, useEffect, useContext } from 'react'
import { useTranslation } from 'next-i18next'
import ActiveLink from 'components/active-link'
import { DrawerContext } from 'contexts/drawer/drawer.provider'
import Link from 'next/link'
import { Transition } from '@tailwindui/react'
import { useRouter } from 'next/router'
import EsFlag from 'assets/icons/es-flag'
import EnFlag from 'assets/icons/en-flag'

export const LanguageDropdown: React.FC = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const favorites = t('favorites')
  const register = t('register')
  const myorders = t('orders')
  const mynotifications = t('notifications')
  const mycoupons = t('coupons')
  const languageActive = router.locale
  const [show, setShow] = useState(false)
  const container = useRef(null)
  const esp = t('es')
  const ing = t('en')

  const ChangeLanguage = () => {
    const currentQuery = router.query
    console.log(currentQuery)
    // router.push({
    //   pathname: '/product/[pid]',
    //   query: { pid: post.id },
    // })
  }
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!container.current.contains(event.target)) {
        if (!show) return
        setShow(false)
      }
    }

    window.addEventListener('click', handleOutsideClick)
    return () => window.removeEventListener('click', handleOutsideClick)
  }, [show, container])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!show) return

      if (event.key === 'Escape') {
        setShow(false)
      }
    }

    document.addEventListener('keyup', handleEscape)
    return () => document.removeEventListener('keyup', handleEscape)
  }, [show])

  return (
    <div ref={container} className="w-full -mt-2 md:mt-0 py-auto">
      <button
        className="flex  w-full "
        onClick={() => setShow(!show)}
      >
            { languageActive === 'en'
              ? <div className="flex md:p-4 lg:p-4 xl:p-4 p-0  lg:mt-0 md:mt-0 ">
              <label className="flex-auto md:px-2 xl:px-2 px-3 lg:px-2 mt-0">
                 <EnFlag width="10px" height="10px" />
                </label>
                <label className="flex-auto"> {ing} </label>
              </div>
              : <div className="flex md:p-4 lg:p-4 xl:p-4 p-0  lg:mt-0 md:mt-0 ">
              <label className="flex-auto md:px-2 xl:px-2 px-3 lg:px-2 mt-0">
                 <EsFlag width="10px" height="10px" />
                </label>
                <label className="flex-auto"> {esp} </label>
              </div>
            }
      </button>

      <Transition
        show={show}
        enter="transition ease-out duration-75"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute  mt-2 origin-top-right rounded-md shadow-lg z-10"
      >

        <div className="bg-white rounded shadow-md">
             <ActiveLink
                locale='es'
                activeClassName="font-semibold mt-0 py-2  "
                onClick={ChangeLanguage}
              >
            <a className="block px-4 py-0 " >
           {esp}
            </a>

          </ActiveLink>
          <ActiveLink
                locale='en'
                onClick={ChangeLanguage}
                activeClassName="font-semibold mt-0 py-2  "
              >
            <a className="block px-4 py-0" >
           {ing}
            </a>

          </ActiveLink>

        </div>

      </Transition>
    </div>
  )
}
