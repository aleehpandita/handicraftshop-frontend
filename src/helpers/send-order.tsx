import * as config from '../config'

type OrderProps = { body:{
      items: [],
      address: string,
      phone_number: string,
      email: string,
      bill_amount: number
  }
};

export async function SendingOrder (body:OrderProps) {
  // console.log(config.API_URL + config.API_VERSION)
  // const res = await fetch(config.API_URL + config.API_VERSION + '/products')
  // const products = await res.json()
  // if (!products) {
  //   return {
  //     notFound: true
  //   }
  // }
  const products = {
    status: 200
  }

  return products
}
