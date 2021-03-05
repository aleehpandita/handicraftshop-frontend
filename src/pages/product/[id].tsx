import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from 'containers/layout/layout'
import ProductDetailComponent from 'components/Product/product-detail'
import ReviewForm from 'components/Forms/review'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CURRENCY } from 'helpers/constants'
import { useCart } from 'contexts/cart/cart.provider'
import { DrawerContext } from 'contexts/drawer/drawer.provider'
import ArrowLeft from 'assets/icons/arrow-left'
import Counter from 'components/counter'
import ReviewCard from 'components/review-card'
import Reviews from 'containers/reviews'
import { getProduct } from 'helpers/get-product'

export default function ProductDetail ({ product }) {
  const reviews = product.data.reviews
  // console.log('reviews', product.data.reviews)
  const { t } = useTranslation('products')
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title> {t('title')}</title>
      </Head>
      <ProductDetailComponent item={product} />
      <div className="w-full h-1/2 flex divide-x">

<div className=" px-auto  w-1/2 hidden md:block xl:block lg:block ">
              <ReviewForm />
              </div>
              <div className=" px-auto  w-1/2 hidden md:block xl:block lg:block ">
              <Reviews items={reviews} />
            </div>
    </div>
    <div className="container block md:hidden lg:hidden xl:hidden w-full m-auto px-4">
      <ReviewForm />
    </div>

    <div className="container block md:hidden lg:hidden xl:hidden w-full">
    <Reviews items={reviews} />

    </div>
 </Layout>
  )
}
export async function getServerSideProps ({ locale, query }) {
  const product = await getProduct(query.id)
  if (!product) {
    return null
  }

  return {
    props: {
      product,
      ...await serverSideTranslations(locale, ['products', 'common'])
    }
  }
}
