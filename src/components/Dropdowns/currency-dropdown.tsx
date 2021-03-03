import React, { useState, useRef, useEffect, useContext } from 'react'
import { useTranslation } from 'next-i18next'
import ActiveLink from 'components/active-link'
import { DrawerContext } from 'contexts/drawer/drawer.provider'
import Link from 'next/link'
import { Transition } from '@tailwindui/react'
import { useRouter } from 'next/router'
import EsFlag from 'assets/icons/es-flag'
import EnFlag from 'assets/icons/en-flag'

type UserProps = {

    login?: {
        id: number,
        username:string
    };
  };

export const CurrencyDropdown: React.FC<UserProps | null> = ({
  login
}) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const languageActive = router.locale
  const path = router.pathname
  const [show, setShow] = useState(false)
  const container = useRef(null)
  const esp = t('es')
  const ing = t('en')

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
    <div ref={container} className="w-full  md:mt-0 px-2">
      <button
        className="flex  w-full "
        onClick={() => setShow(!show)}
      >
            { languageActive === 'en'
              ? <div className="flex md:p-2 lg:p-2 xl:p-2 p-0  lg:mt-0 md:mt-0 ">

                <label className="flex-auto"> $ USD </label>
              </div>
              : <div className="flex md:p-2 lg:p-2 xl:p-2 p-0  lg:mt-0 md:mt-0 ">

                <label className="flex-auto"> $ MXN </label>
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
                href={path}
                locale='es'
                activeClassName="font-semibold mt-0 py-0 "
              >
            <a className="block px-4 py-0 " >
           $ MXN
            </a>

          </ActiveLink>
          <ActiveLink
                href={path}
                locale='en'
                activeClassName="font-semibold mt-0 py-2  "
              >
            <a className="block px-4 py-0" >
           $ USD
            </a>

          </ActiveLink>

        </div>

      </Transition>
    </div>
  )
}
