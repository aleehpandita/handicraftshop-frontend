import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from 'containers/layout/layout'
import ProductDetailComponent from 'components/product-detail'
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
import { getProducts } from 'helpers/get-products'
import * as config from '../../config'
export default function ProductDetail ({ product }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

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

export async function getStaticPaths () {
  // Call an external API endpoint to get posts
  const res = await getProducts()

  // Get the paths we want to pre-render based on posts
  const paths = res.data.map((product) => ({
    params: { id: product.id.toString() }
  }))
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

export async function getStaticProps ({ params }) {
  console.log('params', params)
  // const res = await getProduct(params.id)
  // console.log('segundo res', res.json())
  const res = await fetch(`${config.API_URL}${config.API_VERSION}/products/${params.id}`)
  // console.log('segundo res', res.json())
  const product = await res.json()
  if (!params.locale) {
    params.locale = 'es'
  }
  return {
    props: {
      product,
      ...await serverSideTranslations(params.locale, ['products', 'common'])
    } // will be passed to the page component as props
  }
}

// export async function getStaticPaths ({ locale }) {
//   const blogId = await par.query.id
//   const product = await getProduct(blogId)
//   if (!product) {
//     return null
//   }

//   return {
//     props: {
//       product,
//       ...await serverSideTranslations(locale, ['products', 'common'])
//     }
//   }
// }
