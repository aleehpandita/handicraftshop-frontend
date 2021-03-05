import React from 'react'
import Carousel from 'components/hero-carousel'
import SliderComponent from './slider-component'
import BannerImageOne from 'assets/image/slider_1.png'
import BannerImageTwo from 'assets/image/slider_2.png'

const data = [
  { id: 1, background: BannerImageOne, children: <SliderComponent /> },
  { id: 2, background: BannerImageTwo, children: <SliderComponent /> }
]

export default function PromotionBanner () {
  return (
    <div className="w-full  relative min-h-480px ">
      <Carousel data={data} />
    </div>
  )
}
