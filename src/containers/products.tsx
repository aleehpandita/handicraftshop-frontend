import React, { useContext } from 'react'
import ItemCard from 'components/item-card'
import { DrawerContext } from 'contexts/drawer/drawer.provider'
import { useCart } from 'contexts/cart/cart.provider'
import { useSearch } from 'contexts/search/use-search'
import { useSearchable } from 'helpers/use-searchable'
import NotFound from 'assets/icons/not-found'
import { useRouter } from 'next/router'
import { useCategory } from 'contexts/category/use-category'

const Products = React.forwardRef(
  ({ items }: any, ref: React.RefObject<HTMLDivElement>) => {
    const { dispatch } = useContext(DrawerContext)

    const { searchTerm } = useSearch()
    const { category } = useCategory()
    const searchableItems = useSearchable(
      items,
      category,
      searchTerm,
      (item) => [item.name]
    )

    const { addItem, removeItem, getItem } = useCart()
    const router = useRouter()

    const showDetails = (item) => {
      dispatch({
        type: 'STORE_PRODUCT_DETAIL',
        payload: {
          item: item
        }
      })

      router.push(router.locale + '/product/[pid]', `${router.locale}/product/${item.id}`)

      // router.push({
      //   pathname: router.locale + '/product/[id]',
      //   query: { id: item.id }
      // })
    }

    return (
      <div className="w-full mb-5 mt-35px xxl:mt-60px px-4 lg:px-35px" ref={ref}>
        {searchableItems.length ? (
          <div className="grid gap-4 grid-cols-2 mt-9 md:grid-cols-2 md:col-gap-4 md:row-gap-4 lg:grid-cols-3 xxl:grid-cols-3 xxl:col-gap-4 xxl:row-gap-4 2xxl:grid-cols-4 large:grid-cols-5  ">
            {searchableItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onClick={() => showDetails(item)}
                value={getItem(item.id)?.quantity}
                onIncrement={() => addItem(item)}
                onDecrement={() => removeItem(item)}
              />
            ))}
          </div>
        ) : (
          <div className="pt-10px md:pt-40px lg:pt-20px pb-40px">
            <NotFound width="100%" />
            <h3 className="text-24px text-gray-900 font-bold mt-35px mb-0 text-center">
              No product found :(
            </h3>
          </div>
        )}
      </div>
    )
  }
)

export default Products
