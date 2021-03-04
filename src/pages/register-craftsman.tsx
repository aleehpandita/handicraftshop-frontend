import { useEffect } from 'react'
import Head from 'next/head'
import Layout from 'containers/layout/layout'
import CraftsmanBanner from 'containers/banner/craftsman-banner'
import MegaMenu from '../components/mega-menu'
import RegisterCraftsmanForm from 'components/Forms/register-craftsman-form'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import PartnerImage from 'assets/image/partner.png'

export default function RegisterCraftsman () {
  const { t } = useTranslation('login')

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title> {t('title-register-craft')}</title>
      </Head>
      <MegaMenu />
      <CraftsmanBanner />

<div className="w-full h-1/2 flex divide-x mt-2">
<div className=" p-10 items-center w-1/2 hidden md:block xl:block lg:block ">
      <div class="rounded overflow-hidden shadow-lg my-2 w-full">
              <Image
                    className="object-cover w-full"
                    // src={item.image}
                    src={PartnerImage}
                    alt={t('craftsman')}
                    width={620}
                    height={318}
                    />
                   <div class="py-4">
                      <div class="font-bold text-xl mb-2"> Haz que tu producto llegue a donde siempre deseaste!</div>
                        <p class="text-grey-darker text-base text-justify w-full">Queremos empoderar cada vez más a las Pymes que hacen que la economía crezca. Ya aprendimos mucho sobre este proceso y no tengo dudas de que la metodología de RD Station es un camino para que muchas personas y negocios alcancen sus sueños también. Es muy gratificante el poder ayudar y formar parte de este proceso.
                        </p>
                   </div>
            </div>
         </div>

              <div className=" px-auto w-1/2 hidden md:block xl:block lg:block ">
              <RegisterCraftsmanForm />
              </div>
      </div>
    </Layout>
  )
}
export async function getServerSideProps ({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['craftsman', 'common', 'login'])
    }
  }
}
