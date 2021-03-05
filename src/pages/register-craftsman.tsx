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
  const { t } = useTranslation('craftsman')

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content={t('meta-descrip')} />
        <title> {t('title-register')}</title>
      </Head>
      <MegaMenu />
      <CraftsmanBanner />

<div className="w-full h-1/2 flex lg:divide-x  md:divide-x xl:divide-x   mt-2">
      <div className=" p-10 items-center w-full lg:w-1/2 md:w-1/2 xl:w-1/2 block-inline md:block xl:block lg:block ">
            <div className="rounded overflow-hidden shadow-lg my-2">
                    <Image
                          className="object-cover w-full"
                          // src={item.image}
                          src={PartnerImage}
                          alt={t('craftsman')}
                          width={620}
                          height={318}
                          />
                        <div className="py-4">
                            <div className="font-bold text-xl mb-2">{t('title-info')}</div>
                              <p className="text-grey-darker text-base text-justify w-full">{t('information')}
                              </p>
                        </div>
                  </div>
              </div>

              <div className=" px-auto w-full  lg:w-1/2 md:w-1/2 xl:w-1/2 md:block xl:block lg:block ">
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
