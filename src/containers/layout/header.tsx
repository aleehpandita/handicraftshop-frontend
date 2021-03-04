import React, { useContext, useRef, useEffect } from 'react'
import Link from 'next/link'
import PhoneIcon from 'assets/icons/phone'
import CartIcon from 'assets/icons/cart'
import Search from 'components/search-outline'
import { DrawerContext } from 'contexts/drawer/drawer.provider'
import { StickyContext } from 'contexts/sticky/sticky.provider'
import { useCart } from 'contexts/cart/cart.provider'
import { useMedia } from 'helpers/use-media'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { UserDropdown } from 'components/Dropdowns/user-dropdown'
import { CurrencyDropdown } from 'components/Dropdowns/currency-dropdown'
import { LanguageDropdown } from 'components/Dropdowns/language-dropdown'
import { CraftsmanDropdown } from 'components/Dropdowns/craftsman-dropdown'
import Image from 'next/image'

export default function Header () {
  const router = useRouter()
  const { t } = useTranslation('common')
  const isLargeScreen = useMedia('(min-width: 1024px)')
  const { dispatch } = useContext(DrawerContext)
  const {
    state: { isSticky }
  } = useContext(StickyContext)
  const { itemsCount } = useCart()
  const searchRef = useRef(null)
  useEffect(() => {
    if (isLargeScreen && isSticky && searchRef.current) {
      searchRef.current.focus()
    }
  }, [isSticky, isLargeScreen])

  const showMenu = () => {
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        menu: true
      }
    })
  }

  const showCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: true
      }
    })
    dispatch({
      type: 'TOGGLE_CART_VIEW',
      payload: {
        showCart: true
      }
    })
  }

  const isHome = router.pathname === '/'

  return (
    <header className="flex items-center shadow-mobile text-gray-700 body-font fixed bg-white w-full h-90px z-20 lg:shadow-header pr-20px md:pr-30px lg:pr-40px">
      <button
        aria-label="Menu"
        className="menuBtn flex flex-col items-center justify-center w-50px flex-shrink-0 h-full outline-none focus:outline-none lg:w-90px"
        onClick={showMenu}
      >
        <span className="menuIcon">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </span>
      </button>

      <Link href="/">
        <a href="/" className="hidden mx-auto lg:mr-10 lg:flex">
          <span className="sr-only">HandiCraft Shop</span>
          <Image
            className="object-cover"
            src='/logo.png'
            alt="logo HandiCraft"
            width={780}
            height={100}
            />
        </a>
      </Link>

      <div
        className={`w-full ml-0px mr-0px lg:mr-10 lg:ml-auto transition duration-350 ease-in-out flex justify-center visible ${
          isSticky ? 'lg:opacity-100 lg:visible' : 'lg:opacity-0 lg:visible'
        }`}
      >
        {isHome && <Search ref={searchRef} className="search-outline" />}
      </div>

      <div className="hidden items-center text-gray-900 mr-10 flex-shrink-0 lg:flex">
        <PhoneIcon />
        <span className="font-semibold text-base text-14px ml-3">
          +1 855-766-5885
        </span>
      </div>

      <div className="hidden xl:block lg:block md:block items-center text-gray-900 mr-0 flex-shrink-0 lg:flex">
        <span className="font-semibold text-base ">
           <CraftsmanDropdown />
        </span>
      </div>
      <div className=" items-center text-gray-900 mr-2 mt-2 flex-shrink-0 lg:flex">
        <span className="font-semibold text-base text-14px ml-3">
           <LanguageDropdown />
        </span>
      </div>
      <div className="hidden xl:block lg:block md:block items-center text-gray-900 mr-0 flex-shrink-0 lg:flex">
        <span className="font-semibold text-base ">
           <UserDropdown />
        </span>
      </div>
      <div className=" items-center text-gray-900 mr-2 mt-0 flex-shrink-0 lg:flex">
        <span className="font-semibold text-base text-14px ml-3">
           <CurrencyDropdown />
        </span>
      </div>
      <button
        className="flex items-center justify-center flex-shrink-0 mt-5 md:mt-0 lg:mt-0 xl:mt-0  h-auto relative focus:outline-none"
        onClick={showCart}
        aria-label="cart-button"
      >
        <CartIcon width="20px" height="22px" />
        <span
          className="w-18px h-18px flex items-center justify-center bg-gray-900 text-white absolute rounded-full"
          style={{ fontSize: '10px', top: '-10px', right: '-10px' }}
        >
          {itemsCount}
        </span>
      </button>
    </header>
  )
}
