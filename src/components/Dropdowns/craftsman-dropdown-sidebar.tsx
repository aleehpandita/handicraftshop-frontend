import Link from 'next/link'
import React, { useState, useRef, useEffect, useContext } from 'react'
import { Transition } from '@tailwindui/react'
import { useTranslation } from 'next-i18next'
import ActiveLink from 'components/active-link'

import { DrawerContext } from 'contexts/drawer/drawer.provider'

type UserProps = {

    login?: {
        id: number,
        username:string
    };
  };

export const CraftsmanDropdownSidebar: React.FC<UserProps | null> = ({
  login
}) => {
  const { t } = useTranslation('common')
  const favorites = t('favorites')
  const register = t('register')
  const myorders = t('orders')
  const mynotifications = t('notifications')
  const mycoupons = t('coupons')

  const [show, setShow] = useState(false)
  const container = useRef(null)

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

  const { dispatch } = useContext(DrawerContext)

  const hideMenu = () => {
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        menu: false
      }
    })
  }

  return (
    <div ref={container} className="relative">
      <button
        className="menu-item relative text-gray-900 pl-30px pr-4  transition duration-300 ease-in-out last:mb-0 hover:text-gray-900 font-bold"
        onClick={() => setShow(!show)}
      >
        {/* <img
          className="w-10 h-10 rounded-full"
          src={user.picture}
          alt={user.name}
        /> */}
       {register}
      </button>

      <Transition
        show={show}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >

        <div className="origin-top-right  w-full py-2 mt-1 bg-white rounded shadow-md pl-30px pr-4 ">
             <ActiveLink
                href='/login'
                activeClassName="font-semibold "
              >
            <a className="block px-4 py-2 hover:bg-green-500 hover:text-green-100" onClick={hideMenu}>
           {register}
            </a>
          </ActiveLink>
          <Link href="/api/logout">
            <a className="block px-4 py-2 hover:bg-green-500 hover:text-green-100">
              {myorders}
            </a>
          </Link>
          <Link href="/api/logout">
            <a className="block px-4 py-2 hover:bg-green-500 hover:text-green-100">
            {mynotifications}
            </a>
          </Link>
          <Link href="/api/logout">
            <a className="block px-4 py-2 hover:bg-green-500 hover:text-green-100">
            {favorites}
            </a>
          </Link>

          <Link href="/api/logout">
            <a className="block px-4 py-2 hover:bg-green-500 hover:text-green-100">
            {mycoupons}
            </a>
          </Link>
        </div>

      </Transition>
    </div>
  )
}
