import { useEffect } from 'react'
import Head from 'next/head'
import Layout from 'containers/layout/layout'
import LoginForm from 'components/Forms/login'
import LoginTabs from 'components/Tabs/login-tabs'
import RegisterForm from 'components/Forms/register'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Checkout () {
  const { t } = useTranslation('checkout')

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title> eded {t('title')}</title>
      </Head>

 </Layout>
  )
}
export async function getServerSideProps ({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['checkout', 'common'])
    }
  }
}
