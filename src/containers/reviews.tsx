import React, { useContext } from 'react'
import ReviewCard from 'components/review-card'
import { DrawerContext } from 'contexts/drawer/drawer.provider'
import { useCart } from 'contexts/cart/cart.provider'
import { useSearch } from 'contexts/search/use-search'
import NotFound from 'assets/icons/not-found'
import { useRouter } from 'next/router'

const Reviews = React.forwardRef(
  ({ items }: any, ref: React.RefObject<HTMLDivElement>) => {
    const { state, dispatch } = useContext(DrawerContext)

    return (
      <div className="w-full px-4" ref={ref}>
        {items.length ? (
          <div>
            {items.map((item) => (
              <ReviewCard key={item.id} item={item}/>
            ))}
          </div>
        ) : (
          <div className="pt-10px md:pt-40px lg:pt-20px pb-40px">

            <h3 className="text-24px text-gray-900 font-bold mt-35px mb-0 text-center">
              No reviews found :(
            </h3>
          </div>
        )}
      </div>
    )
  }
)

export default Reviews
