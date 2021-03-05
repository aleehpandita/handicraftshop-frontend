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
          <ReviewCard item={state.item}/>
        {items.length ? (
          <div className="grid gap-4 grid-cols-2 mt-9 md:grid-cols-2 md:col-gap-4 md:row-gap-4 lg:grid-cols-3 xxl:grid-cols-3 xxl:col-gap-4 xxl:row-gap-4 2xxl:grid-cols-4 large:grid-cols-5  ">
            {/* {searchableItems.map((item) => ( */}
              <ReviewCard item={state.item}/>
            {/* ))} */}
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
