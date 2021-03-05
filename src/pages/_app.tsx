import 'typeface-open-sans'
import 'rc-collapse/assets/index.css'
import 'overlayscrollbars/css/OverlayScrollbars.css'
import 'react-multi-carousel/lib/styles.css'
import 'assets/styles/index.css'

// import 'assets/styles/stripe.css'
import { CartProvider } from 'contexts/cart/cart.provider'
import { DrawerProvider } from 'contexts/drawer/drawer.provider'
import { StickyProvider } from 'contexts/sticky/sticky.provider'
import { SearchProvider } from 'contexts/search/use-search'
import { CategoryProvider } from 'contexts/category/use-category'

import path from 'path'
import { appWithTranslation } from 'next-i18next'

const CustomApp = ({ Component, pageProps }) =>
  (

    <StickyProvider>
    <SearchProvider>
    <CategoryProvider>

        <DrawerProvider>
          <CartProvider>
            <Component {...pageProps} />

          </CartProvider>
        </DrawerProvider>
        </CategoryProvider>
    </SearchProvider>

    </StickyProvider>
  )
export default appWithTranslation(CustomApp)

// export default appWithTranslation(CustomApp, {
//   defaultLanguage: 'en',
//   otherLanguages: ['es', 'en'],
//   localePath: path.resolve('./public/static/locales')
// })
