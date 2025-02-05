import React from 'react'
import { CURRENCY } from 'helpers/constants'
import CounterAlt from './animated-counter'
import { useRouter } from 'next/router'
import {
  ItemCardBase,
  ItemCardBaseContent,
  ItemCardImage,
  ItemCardContent,
  ItemCardPrice,
  ItemCardName,
  ItemCardInformation,
  ItemCardType,
  ItemCardRoundedDot,
  ItemCardQuantity,
  ItemCardDetailsButton,
  ItemCardCounterWrapper
} from './utils/theme'
import Image from 'next/image'

interface ItemProps {
  id:number,
  image: string;
  name: string;
  price: number;
  type: string;
  quantity: number;
  excerpt:string,
  stock:number,
}

interface ItemCardProps {
  item: ItemProps;
  value: number;
  onClick?: (e: any) => void;
  onDecrement?: (e: any) => void;
  onIncrement?: (e: any) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onClick,
  onDecrement,
  onIncrement,
  value
}) => {
  const baseClassName = ItemCardBase + ' ' + (value ? 'shadow-cart' : 'shadow-cart')
  const router = useRouter()
  return (
    <div className={baseClassName}>
      <div className={ItemCardBaseContent}>
        <div className={ItemCardImage}>
          <Image
            className="object-cover"
            src={item.image}
            // src='/use-shopping-cart.png'
            alt={' Alt ' + item.name}
            width={138}
            height={138}
            unoptimized
            />
        </div>

        <div className={ItemCardContent}>
          <span className={ItemCardPrice}>
            {CURRENCY}
            {item.price}
          </span>
          <span className={ItemCardName}>{item.name}</span>

          <div className={ItemCardInformation}>
            <span className={ItemCardType}>{item.excerpt}</span>
            <span className={ItemCardRoundedDot} />
            <span className={ItemCardQuantity}>{item.stock} Pieces</span>
          </div>

          <button className={ItemCardDetailsButton}
           onClick={onClick}
          >
            Details
          </button>

          <div className={ItemCardCounterWrapper}>
            <CounterAlt
              value={value}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
