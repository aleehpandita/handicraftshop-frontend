import { useEffect } from 'react'
import Head from 'next/head'
import Layout from 'containers/layout/layout'
import LoginForm from 'components/Forms/login'
import LoginTabs from 'components/Tabs/login-tabs'
import RegisterForm from 'components/Forms/register'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Login () {
  const { t } = useTranslation('login')

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

      <div className="w-full h-full xl:hidden lg:hidden md:hidden">

          <LoginTabs />

      </div>
      <div className="w-full h-1/2 flex divide-x">

          <div className=" px-auto  w-1/2 hidden md:block xl:block lg:block ">

            <LoginForm />
          </div>
          <div className=" px-auto w-1/2 hidden md:block xl:block lg:block ">

          <RegisterForm />
        </div>
      </div>
    </Layout>
  )
}
export async function getServerSideProps ({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['login', 'common'])
    }
  }
}
