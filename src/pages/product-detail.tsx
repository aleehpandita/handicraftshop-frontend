import React, { useState, useContext } from 'react'
import Head from 'next/head'
import Layout from 'containers/layout/layout'
import LoginForm from 'components/Forms/login'
import LoginTabs from 'components/Tabs/login-tabs'
import ProductDetailComponent from 'components/Product/product-detail'
import RegisterForm from 'components/Forms/register'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CURRENCY } from 'helpers/constants'
import { useCart } from 'contexts/cart/cart.provider'
import { DrawerContext } from 'contexts/drawer/drawer.provider'
import ArrowLeft from 'assets/icons/arrow-left'
import Counter from 'components/counter'

export default function ProductDetail () {
  const { addItem, getItem, removeItem } = useCart()
  const { state, dispatch } = useContext(DrawerContext)

  const addToCart = () => {
    addItem(state.item)
    dispatch({
      type: 'TOGGLE_CART_VIEW',
      payload: {
        showCart: true
      }
    })
  }

  const count = getItem(state.item.id)?.quantity

  const { t } = useTranslation('products')
  const name = state.item.name
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title> {t('title', name)}</title>
      </Head>
      <ProductDetailComponent />
 </Layout>
  )
}
export async function getServerSideProps ({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['products', 'common'])
    }
  }
}
