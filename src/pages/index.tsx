import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../containers/layout/layout'
import PromotionBanner from 'containers/banner/promotion-banner'
import HowItWorks from 'containers/how-it-works'
import MegaMenu from '../components/mega-menu'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getProducts } from 'helpers/get-products'
import { useRefScroll } from 'helpers/use-ref-scroll'
import Products from 'containers/products'

export default function IndexPage ({ products }) {
  const { elRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -100
  })

  const { t } = useTranslation('common')
  // const { t } = useTranslation('mega-menu');
  return (
    <Layout>
       <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="The real mexican crafts store" />
        <title>  {t('title')} </title>
      </Head>
      <MegaMenu />
      <PromotionBanner />
      <HowItWorks />
      <Products items={products} ref={elRef} />
    </Layout>
  )
}

export async function getServerSideProps ({ locale }) {
  const products = await getProducts()
  // console.log('products', products)
  // const products = {}
  return {
    props: {
      products,
      ...await serverSideTranslations(locale, ['common'])
    }
  }
}
