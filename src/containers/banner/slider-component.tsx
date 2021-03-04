import React from 'react'
import Button from 'components/button'
import ArrowRight from 'assets/icons/arrow-right'
import { useTranslation } from 'next-i18next'

const SliderComponent = () => {
  const { t } = useTranslation('common')

  return (
    <div className="w-full lg:w-6/12 text-center lg:text-left flex flex-col items-center lg:items-start">
      <h3 className="text-30px text-gray-900 font-normal mb-4 capitalize">
        <span className="font-bold">{t('slide')}</span>
        <span className="font-bold block"> </span>
      </h3>
      <p className="text-gray-500 mb-40px">
         {t('slide2')}
      </p>
      <Button variant="elevation">
        <span className="mr-2"> {t('shop')}</span> <ArrowRight width="13px" />
      </Button>
    </div>
  )
}

export default SliderComponent
