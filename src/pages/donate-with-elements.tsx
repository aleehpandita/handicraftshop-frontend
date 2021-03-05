import { NextPage } from 'next'
import { Elements } from '@stripe/react-stripe-js'
import getStripe from '../utils/get-stripejs'

import Layout from '../containers/layout/layout'
import ElementsForm from '../components/ElementsForm'
import Head from 'next/head'

const DonatePage: NextPage = () => {
  return (
    <Layout>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="Description" content="Put your description here." />
      <title> hola</title>
    </Head>
      <div className="page-container">
        <h1>Donate with Elements</h1>
        <p>Donate to our project 💖</p>
        <Elements stripe={getStripe()}>
          <ElementsForm />
        </Elements>
      </div>
    </Layout>
  )
}

export default DonatePage
