import React from 'react'
import FeatureBlock from 'components/feature-block'
import { useTranslation } from 'next-i18next'

const HowItWorks = () => {
  const { t } = useTranslation('common')
  const data = [
    {
      id: 1,
      background: '#feeec8',
      title: t('order'),
      description: t('details')
    },
    {
      id: 2,
      background: '#ceeffe',
      title: t('pick'),
      description:
      t('desc-2')
    },
    {
      id: 3,
      background: '#d4f8c4',
      title: t('pack'),
      description: t('desc-pack')
    },
    {
      id: 4,
      background: '#d8dafe',
      title: t('deliver'),
      description: t('desc-order')
    }
  ]

  return (
    <div className="flex w-full px-15px lg:px-35px mt-35px xxl:mt-60px">
      <div className="flex w-full px-20px md:p-30px py-40px rounded border border-gray-300 bg-white">
        <div className="feature-block-wrapper w-full grid grid-cols-1 gap-x-30px gap-y-40px md:grid-cols-2 xl:grid-cols-4 xxl:gap-30px">
          {data.map((item, index) => (
            <FeatureBlock
              key={item.id}
              title={item.title}
              description={item.description}
              counterBg={item.background}
              counter={index + 1}
              className="feature-block"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default HowItWorks
