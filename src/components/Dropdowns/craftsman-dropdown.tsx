import Link from 'next/link'
import React, { useState, useRef, useEffect, useContext } from 'react'
import { Transition } from '@tailwindui/react'
import { useTranslation } from 'next-i18next'
import ActiveLink from 'components/active-link'

export const CraftsmanDropdown: React.FC = () => {
  const { t } = useTranslation('common')
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

  return (
    <div ref={container} className="w-full lg:px-2 md:px-2 xl:px-2  md:mt-0  ">
      <button
        className={'flex  w-full '}
        onClick={() => setShow(!show)}
      >
              <label className="flex-auto md:px-2 xl:px-2  lg:px-2 w-full">    { t('supplier')} </label>

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
                href='/register-craftsman'
                activeClassName="font-semibold "
              >
            <a className="block py-2 px-4 hover:bg-green-500 hover:text-green-100">
           { t('supplier')}
            </a>
          </ActiveLink>
          <Link href="/">
            <a className="block px-4 py-2 hover:bg-green-500 hover:text-green-100">
              { t('artesan') }
            </a>
          </Link>

        </div>

      </Transition>
    </div>
  )
}
